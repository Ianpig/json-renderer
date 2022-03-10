import React, { useState } from "react";

import JSONEditorReact from "./components/JSONEditor/JSONEditor";
import _ from "lodash";
import { JSONfn } from "jsonfn";

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
  const [text, setText] = useState(JSONfn.stringify(code, true, 2));

  const onModeChange = (mode) => {
    updateMode(mode);
  };

  const handleUpdateText = (code) => {
    disableSelect.current = true;
    _.debounce(updateCode(JSON.parse(code)), 1000);

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
