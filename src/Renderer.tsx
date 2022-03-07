import React from "react";
// import { useDrag } from "react-dnd";
import renders from "./Render";
import DownloadTable from "./components/DownloadTable";
import StyledLayout from "./components/StyledLayout";

const Renderer = (config: {
  type: any;
  id?: string;
  props: any;
  children: any;
  content?: any;
  isColumn?: boolean;
  isDownload?: boolean;
  variable?: any;
  media?: any;
  onSelectEdit: any;
}) => {
  const { onSelectEdit } = config;
  let props = config.props;
  if (config.isDownload) {
    if (config.type === "Card") {
      return <DownloadTable config={config} onSelectEdit={onSelectEdit} />;
    }
  }
  if (config.type === "Layout" && config.media) {
    return <StyledLayout config={config} onSelectEdit={onSelectEdit} />;
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
        key: config.id,
        onClick: (e) => {
          e.stopPropagation();
          console.log(config);
          onSelectEdit(config);
        },
        // ref: drag,
      },
      config.content ||
        (config.children &&
          config.children
            .sort(
              (a: { order: number }, b: { order: number }) => a.order - b.order
            )
            .map((c: any) => (
              <Renderer {...injectProps} {...c} onSelectEdit={onSelectEdit} />
            )))
    );
  }
  if (typeof RenderComp !== "undefined") {
    if (config.type === "Table") {
      config.props.columns = [...config.props.columns].map((item) => {
        const { render, ...rest } = item;
        if (typeof render === "function") {
          return { ...rest, render };
        }
        if (typeof render === "object") {
          return {
            ...rest,
            render: (_, record) => (
              <Renderer
                isColumn
                {...injectProps}
                {...record}
                {...render}
                onSelectEdit={onSelectEdit}
              />
            ),
          };
        }
        return { ...item, isColumn: true };
      });
    }
    let variable = config.variable || {};
    return (
      <RenderComp
        {...props}
        onClick={(e: { stopPropagation: () => void }) => {
          e.stopPropagation();
          console.log(config);
          onSelectEdit(config);
        }}
      >
        {config.content
          ? typeof config.content === "function"
            ? config.content({ ...config, ...variable })
            : config.content
          : config.children &&
            config.children
              .sort(
                (a: { order: number }, b: { order: number }) =>
                  a.order - b.order
              )
              .map((c: any) => (
                <Renderer {...injectProps} {...c} onSelectEdit={onSelectEdit} />
              ))}
      </RenderComp>
    );
  }
  return null;
};

export default Renderer;
