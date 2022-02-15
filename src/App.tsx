import { useState, useRef } from "react";
import "./App.less";

import Renderer from "./Renderer";

import data from "./data.json";
import { Button } from "antd";

const App = () => {
  console.log(data);
  const [mockDate, setMockData] = useState(data);
  const inputRef = useRef(null);

  return (
    <div style={{ display: "flex" }}>
      <div>
        <h3>Data edit</h3>
        <textarea
          ref={inputRef}
          defaultValue={JSON.stringify(mockDate, undefined, 4)}
          id=""
          cols={40}
          rows={30}
          style={{ width: "100%" }}
        ></textarea>
        <Button
          onClick={() => {
            if (inputRef.current) {
              console.log(inputRef.current);
              setMockData(JSON.parse(inputRef.current.value));
            }
          }}
        >
          Apply
        </Button>
      </div>
      <div className="App">{Renderer(mockDate)}</div>
    </div>
  );
};

export default App;
