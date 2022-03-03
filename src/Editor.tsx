import { JsonEditor as CodeEditor } from "jsoneditor-react";
import "jsoneditor-react/es/editor.min.css";
import ace from "brace";
import "brace/mode/json";
import "brace/theme/github";

const schema = {
  type: "object",
  properties: {
    some: {
      type: "integer",
    },
  },
  required: ["some"],
};

const Editor = ({ code, updateCode }: { code: any; updateCode: any }) => {
  return (
    <CodeEditor
      value={code}
      language="js"
      placeholder="Please enter JS code."
      onChange={updateCode}
      padding={15}
      style={{
        width: "50%",
        fontSize: 12,
        backgroundColor: "#f5f5f5",
        fontFamily:
          "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
      }}
      ace={ace}
      theme="ace/theme/github"
      schema={schema}
    />
  );
};

export default Editor;
