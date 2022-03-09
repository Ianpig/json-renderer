import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Dropper from "./Dropper";
import Renderer from "./Renderer";

const Dashboard: React.FC<{
  data: {
    type: any;
    id?: string;
    props: any;
    children: any;
    content?: any;
  };
  onSelectEdit: any;
}> = ({ data, onSelectEdit }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Renderer {...data} onSelectEdit={onSelectEdit} />
      {/* <Dropper /> */}
    </DndProvider>
  );
};

export default Dashboard;
