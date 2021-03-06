import { useState, useRef } from "react";
import "./App.less";

import Dashboard from "./Dashboard";
import Editor from "./Editor";

import data from "./data.js";

const App = () => {
  console.log(data);
  const [mockData, setMockData] = useState(data);

  return (
    <div style={{ display: "flex" }}>
      {/* <div style={{ flexBasis: "50%" }}>
        <h3>Data edit</h3>
        <Editor code={mockData} updateCode={setMockData} />
      </div> */}
      <div className="App" style={{ flexBasis: "100%" }}>
        <Dashboard data={mockData} />
      </div>
    </div>
  );
};

export default App;
