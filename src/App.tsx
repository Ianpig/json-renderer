import { useState } from "react";
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
  let { children, ...restProps } =
    (data && data.find((item) => item.root === true)) || {};
  const buildTree = buildLinklist(restProps, children, data);
  console.log(`buildTree`, buildTree);
  return (
    <SplitPane split="vertical" minSize={`50%`} defaultSize={`50%`}>
      <Pane initialSize="40%" minSize="10%">
        You can use a Pane component
        <h3>Data edit</h3>
        <Editor code={buildTree} updateCode={console.log} />
      </Pane>
      <Pane initialSize="60%" minSize="10%">
        <div className="App">
          <Dashboard data={buildTree} />
        </div>
      </Pane>
    </SplitPane>
  );
};

export default App;
