import React from "react";
import renders from "./Render";
import DownloadTable from "./components/DownloadTable";
import StyledLayout from "./components/StyledLayout";

import colors from "./styles/color";

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
  let injectStyles = {};
  const { onSelectEdit } = config;
  let props = config.props;
  if (props?.style) {
    Object.keys(props.style).forEach((key) => {
      const getColor = colors[props.style[key]];
      if (getColor) {
        injectStyles = {
          ...injectStyles,
          [key]: getColor,
        };
      }
    });
  }
  if (config.isDownload) {
    if (config.type === "Card") {
      return (
        <DownloadTable
          config={config}
          injectStyles={injectStyles}
          onSelectEdit={onSelectEdit}
        />
      );
    }
  }
  if (config.type === "Layout" && config.media) {
    return (
      <StyledLayout
        config={config}
        injectStyles={injectStyles}
        onSelectEdit={onSelectEdit}
      />
    );
  }
  let injectProps = {};
  if (config.isColumn) {
    injectProps = { ...injectProps, ...config };
  }

  const RenderComp = renders(config.type);
  if (config.type === "Row" || config.type === "Col") {
    return React.createElement(
      RenderComp,
      {
        ...config.props,
        key: config.id,
        onClick: (e) => {
          e.stopPropagation();
          onSelectEdit(config);
        },
        style: { ...props?.style, ...injectStyles },
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
      injectProps = {
        ...injectProps,
        columns: [...config.props.columns].map((item) => {
          const { render, ...rest } = item;
          if (typeof render === "function") {
            return { ...rest, render };
          }
          if (typeof render === "object") {
            return {
              ...rest,
              render: (
                _: any,
                record: JSX.IntrinsicAttributes & {
                  type: any;
                  id?: string | undefined;
                  props: any;
                  children: any;
                  content?: any;
                  isColumn?: boolean | undefined;
                  isDownload?: boolean | undefined;
                  variable?: any;
                  media?: any;
                  onSelectEdit: any;
                }
              ) => (
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
        }),
      };
    }
    let variable = config.variable || {};
    return (
      <RenderComp
        {...props}
        {...injectProps}
        onClick={(e: { stopPropagation: () => void }) => {
          e.stopPropagation();
          onSelectEdit(config);
        }}
        style={{ ...props?.style, ...injectStyles }}
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
