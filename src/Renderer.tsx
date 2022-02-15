import React from "react";
import { Card, Layout, Row, Col, Button } from "antd";

import { Line } from "@ant-design/charts";

const renders = (type: string) => {
  switch (type) {
    case "Layout":
      return Layout;
    case "Row":
      return Row;
    case "Col":
      return Col;
    case "Card":
      return Card;
    case "Line":
      return Line;
    case "Button":
      return Button;
    default:
      return "div";
  }
};

function renderer(config: {
  type: any;
  id?: string;
  props: any;
  children: any;
  content?: any;
}) {
  const RenderComp = renders(config.type);
  if (typeof RenderComp !== "undefined") {
    return React.createElement(
      RenderComp,
      { ...config.props, key: new Date().getTime() },
      config.content ||
        (config.children &&
          config.children
            .sort(
              (a: { order: number }, b: { order: number }) => a.order - b.order
            )
            .map((c: any) => renderer(c)))
    );
  }
}

export default renderer;
