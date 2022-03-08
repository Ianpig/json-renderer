import { useEffect, useState } from "react";
import SplitPane, { Pane } from "react-split-pane";
import data from "./data";
import "./App.less";
import { CloseOutlined } from "@ant-design/icons";

import Dashboard from "./Dashboard";
import Editor from "./Editor";

const buildLinklist = (mock, children, rowData) => {
  if (children && Array.isArray(children)) {
    mock.children = [];
    return {
      ...mock,
      children: children.map((id) => {
        const selectItem = rowData.find((item: { id: any }) => item.id === id);
        const { children: childrens, ...rest } = selectItem;
        return buildLinklist({ ...rest }, childrens, rowData);
      }),
    };
  }
  return { ...mock };
};

const App = () => {
  const [selectEdit, setSelectEdit] = useState("");
  const [code, setCode] = useState(data);
  let { children, ...restProps } =
    (code && code.find((item) => item.root === true)) || {};
  const buildTree = buildLinklist(restProps, children, code);

  const findItemUpdate = (
    mockCode: any[],
    value: { [x: string]: any; id?: any; children?: any }
  ) => {
    const { children, ...restValue } = value;
    mockCode[mockCode.findIndex((el) => el.id === value.id)] = {
      ...mockCode[mockCode.findIndex((el) => el.id === value.id)],
      ...restValue,
    };
  };

  const recursiveUpdateDown = (
    mockCode: any[],
    value: { children: { [x: string]: any; id?: any; children?: any }[] }
  ) => {
    if (value?.children) {
      value.children.forEach(
        (element: { [x: string]: any; id?: any; children?: any }) => {
          findItemUpdate(mockCode, element);
          recursiveUpdateDown(mockCode, element);
        }
      );
    }
  };

  const handleSetEditUpdate = (value, callback = () => {}) => {
    setSelectEdit(value);
    const mockCode = [...code];
    findItemUpdate(mockCode, value);
    recursiveUpdateDown(mockCode, value);
    callback(mockCode);
  };

  return (
    <SplitPane split="vertical" minSize={`50%`} defaultSize={`50%`}>
      <Pane initialSize="40%" minSize="10%">
        <div>
          <h3>Data edit</h3>
          {selectEdit?.id && (
            <>
              You are in selected edit mode
              <CloseOutlined onClick={() => setSelectEdit("")} />
            </>
          )}
        </div>
        {selectEdit ? (
          <Editor
            key={selectEdit?.id}
            code={selectEdit}
            updateCode={(val) => handleSetEditUpdate(val, setCode)}
          />
        ) : (
          <Editor
            key={buildTree?.id}
            code={buildTree}
            updateCode={(val) => handleSetEditUpdate(val, setCode)}
          />
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
