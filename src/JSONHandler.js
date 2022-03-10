import React, { useState } from "react";

import JSONEditorReact from "./components/JSONEditor/JSONEditor";
import _ from "lodash";

const schema = {
  title: "Example Schema",
  type: "object",
  properties: {
    array: {
      type: "array",
      items: {
        type: "number",
      },
    },
    boolean: {
      type: "boolean",
    },
    number: {
      type: "number",
    },
  },
  required: ["array", "string", "boolean"],
};

const modes = ["tree", "form", "view", "code", "text"];

function JSONHandler({ code, updateCode, mode, updateMode, disableSelect }) {
  const [text, setText] = useState(
    JSON.stringify(code, function (key, value) {
      return typeof value === "function" ? value.toString() : value;
    }, 2)
  );

  console.log(`text`, text);

  const onModeChange = (mode) => {
    updateMode(mode);
  };

  const handleUpdateText = (code) => {
    disableSelect.current = true;
    _.debounce(
      updateCode(
        JSON.parse(code, function (key, value) {
          if (typeof value != "string") return value;
          return value.substring(0, 8) === "function"
            ? // eslint-disable-next-line no-eval
              eval("(" + value + ")")
            : value;
        })
      ),
      1000
    );

    setText(code);
  };

  return (
    <div style={{ height: `calc(100Vh - 103px)` }}>
      <JSONEditorReact
        schema={schema}
        text={text}
        mode={mode}
        modes={modes}
        indentation={4}
        onChangeText={handleUpdateText}
        onModeChange={onModeChange}
      />
    </div>
  );
}

export default React.memo(JSONHandler);
