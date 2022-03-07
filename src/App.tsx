import { useEffect, useState } from "react";
import SplitPane, { Pane } from "react-split-pane";
import data from "./data";
import "./App.less";

import Dashboard from "./Dashboard";
import Editor from "./Editor";

function buildLinklist(mock, children, rowData) {
  if (children && Array.isArray(children)) {
    mock.children = [];
    return {
      ...mock,
      children: children.map((id) => {
        const selectItem = rowData.find((item) => item.id === id);
        const { children: childrens, ...rest } = selectItem;
        return buildLinklist({ ...rest }, childrens, rowData);
      }),
    };
  }
  return { ...mock };
}

const App = () => {
  const [selectEdit, setSelectEdit] = useState("");
  const [code, setCode] = useState(data);
  let { children, ...restProps } =
    (code && code.find((item) => item.root === true)) || {};
  const buildTree = buildLinklist(restProps, children, code);
  console.log(`buildTree`, buildTree);

  const handleSetEditUpdate = (value) => {
    setSelectEdit(value);
    console.log(value);
    const mockCode = [...code];
    const { children, ...restValue } = value;
    mockCode[mockCode.findIndex((el) => el.id === value.id)] = {
      ...mockCode[mockCode.findIndex((el) => el.id === value.id)],
      ...restValue,
    };
    if (value?.children) {
      value.children.forEach((element) => {
        const { children, ...restValue } = element;
        console.log(restValue);
        mockCode[mockCode.findIndex((el) => el.id === element.id)] = {
          ...mockCode[mockCode.findIndex((el) => el.id === element.id)],
          ...restValue,
        };
      });
    }
    console.log(mockCode);
    setCode(mockCode);
  };

  return (
    <SplitPane split="vertical" minSize={`50%`} defaultSize={`50%`}>
      <Pane initialSize="40%" minSize="10%">
        You can use a Pane component
        <h3>Data edit</h3>
        {selectEdit ? (
          <Editor
            key={selectEdit?.id}
            code={selectEdit}
            updateCode={handleSetEditUpdate}
          />
        ) : (
          <Editor key={buildTree?.id} code={buildTree} updateCode={setCode} />
        )}
      </Pane>
      <Pane initialSize="60%" minSize="10%">
        <div className="App">
          <Dashboard data={buildTree} onSelectEdit={setSelectEdit} />
        </div>
      </Pane>
    </SplitPane>
  );
};

export default App;
