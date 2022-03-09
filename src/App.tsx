import { useEffect, useState, useCallback } from "react";
import SplitPane, { Pane } from "react-split-pane";
import data from "./data";
import "./App.less";
import { CloseOutlined } from "@ant-design/icons";

import Dashboard from "./Dashboard";
import Editor from "./Editor";
import JSONHandler from "./JSONHandler";

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
  const [code, setCode] = useState(data);

  let { children, ...restProps } =
    (code && code.find((item) => item.root === true)) || {};
  const buildTree = buildLinklist(restProps, children, code);
  const [selectEdit, setSelectEdit] = useState("");

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

  useEffect(() => {
    setSelectEdit(buildTree);
  }, []);

  const handleSetEditUpdate = useCallback(
    (value) => {
      if (selectEdit) {
        setSelectEdit(value);
      }

      setCode((prevCode) => {
        const mockCode = [...prevCode];
        findItemUpdate(mockCode, value);
        recursiveUpdateDown(mockCode, value);
        return mockCode;
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // const handleSetEditUpdate = (value, callback = () => {}) => {
  //   console.log(value);
  //   if (selectEdit) {
  //     setSelectEdit(value);
  //   }
  //   const mockCode = [...code];
  //   findItemUpdate(mockCode, value);
  //   recursiveUpdateDown(mockCode, value);
  //   console.log(mockCode);
  //   setCode(mockCode);
  // };
  console.log("code", code);
  return (
    <SplitPane split="vertical" minSize={`50%`} defaultSize={`50%`}>
      <Pane initialSize="40%" minSize="10%">
        <div>
          <h3>Data edit</h3>
          <JSONHandler
            key={selectEdit?.id}
            code={selectEdit}
            updateCode={handleSetEditUpdate}
          />
        </div>
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
