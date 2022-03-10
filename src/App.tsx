import { useEffect, useState, useCallback, useRef } from "react";
import SplitPane, { Pane } from "react-split-pane";
import styled from "styled-components";
import { Typography } from "antd";

import { Button, Switch } from "antd";
import data from "./data";
import "./App.less";

import Dashboard from "./Dashboard";
import JSONHandler from "./JSONHandler";

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  padding-bottom: 8px;
`;

const buildLinklist = (mock, children, rowData) => {
  if (children && Array.isArray(children)) {
    mock.children = [];
    return {
      ...mock,
      children: children.map((id) => {
        const selectItem =
          rowData.find((item: { id: any }) => item.id === id) || {};
        const { children: childrens, ...rest } = selectItem;
        return buildLinklist({ ...rest }, childrens, rowData);
      }),
    };
  }
  return { ...mock };
};

const App = () => {
  const [lockSelected, setLockSelected] = useState(false);
  const [mode, setMode] = useState("code");
  const [code, setCode] = useState(data);
  const disableSelect = useRef(false);

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
    value: { children: { [x: string]: any; id?: string; children?: any }[] }
  ) => {
    const root = mockCode.find(({ id }) => id === value.id);
    // use for delete item
    if (root?.children) {
      root?.children.forEach((id: string, index: number) => {
        const findNode =
          value?.children &&
          value?.children.find((element) => element.id === id);
        if (!findNode) {
          root.children.splice(index, 1);
        }
      });
    }

    // use for add item
    if (value?.children) {
      value?.children.forEach((element, index) => {
        const findNode =
          root?.children && root?.children.find((id) => element.id === id);
        if (!findNode) {
          if (root?.children) {
            root.children.splice(index, 0, element.id);
          } else {
            root.children[0] = element.id;
          }
          mockCode.push(element);
        }
      });
    }

    if (value?.children) {
      // use for remove node
      value.children.forEach(
        (element: { [x: string]: any; id?: any; children?: any }) => {
          findItemUpdate(mockCode, element);
          recursiveUpdateDown(mockCode, element);
        }
      );
    }
  };

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
      disableSelect.current = false;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleSelectEditItem = (node) => {
    if (!lockSelected && !disableSelect.current) {
      setSelectEdit(node);
    }
  };

  const downloadFile = async () => {
    // is an object and I wrote it to file as
    // json
    console.log(buildTree);
    const fileName = "file";
    const json = JSON.stringify(
      buildTree,
      function (key, value) {
        return typeof value === "function" ? value.toString() : value;
      },
      2
    );
    const blob = new Blob([json], { type: "application/json" });
    const href = await URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    setSelectEdit(buildTree);
  }, []);

  return (
    <SplitPane split="vertical" minSize={`50%`} defaultSize={`50%`}>
      <Pane initialSize="40%" minSize="10%">
        <div>
          <TitleWrapper>
            <Typography.Title>Data edit</Typography.Title>
            <div>
              <Typography.Text>Lock Select: </Typography.Text>
              <Switch value={lockSelected} onChange={setLockSelected} />{" "}
              <Button onClick={downloadFile}>Download</Button>
            </div>
          </TitleWrapper>
          <JSONHandler
            key={selectEdit?.id}
            code={selectEdit}
            updateCode={handleSetEditUpdate}
            mode={mode}
            updateMode={setMode}
            disableSelect={disableSelect}
          />
        </div>
      </Pane>
      <Pane initialSize="60%" minSize="10%">
        {/* <div className="App">
          <Dashboard data={buildTree} onSelectEdit={handleSelectEditItem} />
        </div> */}
      </Pane>
    </SplitPane>
  );
};

export default App;
