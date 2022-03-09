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

function JSONHandler({ code, updateCode }) {
  const [mode, setMode] = useState("tree");
  const [text, setText] = useState(JSON.stringify(code, null, 2));

  const onModeChange = (mode) => {
    setMode(mode);
  };

  console.log("RRRR");

  const handleUpdateText = (code) => {
    _.debounce(updateCode(JSON.parse(code)), 500);

    setText(code);
  };

  return (
    <>
      <h1>JSONEditor React advanced demo</h1>
      <div style={{ height: `calc(100Vh - 110px)` }}>
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
    </>
  );
}

export default React.memo(JSONHandler);
