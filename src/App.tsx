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

const App = () => {
  const [lockSelected, setLockSelected] = useState(false);
  const [mode, setMode] = useState("code");
  const [code, setCode] = useState(
    JSON.parse(JSON.stringify(data), function (key, value) {
      if (typeof value != "string") return value;
      return value.substring(0, 8) === "function"
        ? // eslint-disable-next-line no-eval
          eval("(" + value + ")")
        : value;
    })
  );
  const disableSelect = useRef(false);

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

  // const recursiveUpdateDown = (
  //   mockCode: any[],
  //   value: { children: { [x: string]: any; id?: string; children?: any }[] }
  // ) => {
  //   const root = mockCode.find(({ id }) => id === value.id);
  //   // use for delete item
  //   if (root?.children) {
  //     root?.children.forEach((id: string, index: number) => {
  //       const findNode =
  //         value?.children &&
  //         value?.children.find((element) => element.id === id);
  //       if (!findNode) {
  //         root.children.splice(index, 1);
  //       }
  //     });
  //   }

  //   // use for add item
  //   if (value?.children) {
  //     value?.children.forEach((element, index) => {
  //       const findNode =
  //         root?.children && root?.children.find((id) => element.id === id);
  //       if (!findNode) {
  //         if (root?.children) {
  //           root.children.splice(index, 0, element.id);
  //         } else {
  //           root.children[0] = element.id;
  //         }
  //         mockCode.push(element);
  //       }
  //     });
  //   }

  //   if (value?.children) {
  //     // use for remove node
  //     value.children.forEach(
  //       (element: { [x: string]: any; id?: any; children?: any }) => {
  //         findItemUpdate(mockCode, element);
  //         recursiveUpdateDown(mockCode, element);
  //       }
  //     );
  //   }
  // };

  const handleSetEditUpdate = (codeText) => {
    const formatValue = JSON.parse(codeText, function (key, value) {
      if (typeof value != "string") return value;
      return value.substring(0, 8) === "function"
        ? // eslint-disable-next-line no-eval
          eval("(" + value + ")")
        : value;
    });
    setCode(formatValue);
  };

  const handleSelectEditItem = (node) => {
    // if (!lockSelected && !disableSelect.current) {
    //   setSelectEdit(node);
    // }
  };

  const downloadFile = async () => {
    // is an object and I wrote it to file as
    // json
    const fileName = "file";
    const json = JSON.stringify(
      code,
      function (key, value) {
        return typeof value === "function" ? value.toString() : value;
      },
      2
    );
    const blob = new Blob([json], { type: "text/plain;charset=utf-8;" });
    const href = await URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName + ".txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    setSelectEdit(data);
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
            code={code}
            updateCode={handleSetEditUpdate}
            mode={mode}
            updateMode={setMode}
            disableSelect={disableSelect}
          />
        </div>
      </Pane>
      <Pane initialSize="60%" minSize="10%">
        <div className="App">
          <Dashboard data={code} onSelectEdit={handleSelectEditItem} />
        </div>
      </Pane>
    </SplitPane>
  );
};

export default App;
