import React from "react";
// import { useDrag } from "react-dnd";
import renders from "./Render";
import DownloadTable from "./components/DownloadTable";

const Renderer = (config: {
  type: any;
  id?: string;
  props: any;
  children: any;
  content?: any;
  isColumn?: boolean;
  isDownload?: boolean;
}) => {
  let props = config.props;
  let appendComps = [];
  if (config.isDownload) {
    if (config.type === "Card") {
      return <DownloadTable config={config} />;
    }
  }
  let injectProps = {};
  if (config.isColumn) {
    injectProps = { ...injectProps, ...config };
  }
  // const [{ isOver, canDrop }, drag] = useDrag(
  //   () => ({
  //     // accept: "Box",
  //     type: "Box",
  //     item: { name: "123" },
  //     end: (item, monitor) => {
  //       const dropResult = monitor.getDropResult();
  //       if (item && dropResult) {
  //         alert(`You dropped ${item.name} into ${dropResult.name}!`);
  //       }
  //     },
  //     collect: (monitor) => ({
  //       isDragging: monitor.isDragging(),
  //       handlerId: monitor.getHandlerId(),
  //     }),
  //   }),
  //   []
  // );

  const RenderComp = renders(config.type);
  if (config.type === "Row" || config.type === "Col") {
    return React.createElement(
      RenderComp,
      {
        ...config.props,
        key: new Date().getTime(),
        onClick: (e) => {
          e.stopPropagation();
          console.log(config);
        },
        // ref: drag,
      },
      config.content ||
        (config.children &&
          config.children
            .sort(
              (a: { order: number }, b: { order: number }) => a.order - b.order
            )
            .map((c: any) => <Renderer {...injectProps} {...c} />))
    );
  }
  if (typeof RenderComp !== "undefined") {
    if (config.type === "Table") {
      config.props.columns = config.props.columns.map((item) => {
        const { render, ...rest } = item;
        if (typeof render === "function") {
          return { ...rest, render };
        }
        if (typeof render === "object") {
          return {
            ...rest,
            render: (_, record) => (
              <Renderer isColumn {...injectProps} {...record} {...render} />
            ),
          };
        }
        return { ...item, isColumn: true };
      });
    }
    return React.createElement(
      RenderComp,
      {
        ...props,
        key: new Date().getTime(),
        onClick: (e) => {
          e.stopPropagation();
          console.log(config);
        },
      },
      config.content
        ? typeof config.content === "function"
          ? config.content(config)
          : config.content
        : config.children && [
            ...config.children
              .sort(
                (a: { order: number }, b: { order: number }) =>
                  a.order - b.order
              )
              .map((c: any) => <Renderer {...injectProps} {...c} />),
            ...appendComps,
          ]
    );
  }
  return null;
};

export default Renderer;
