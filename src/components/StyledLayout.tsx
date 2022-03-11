import React from "react";
import styled from "styled-components";

import renders from "../Render";
import Renderer from "../Renderer";

const StyledLayout: React.FC<{
  config: {
    type: any;
    id?: string;
    props: any;
    children: any;
    content?: any;
    isColumn?: boolean;
    isDownload?: boolean;
    media?: any;
  };
  injectStyles;
}> = ({ config, injectStyles }) => {
  const RenderComp = renders(config.type);
  const media = config.media || {};

  return React.createElement(
    styled(RenderComp)`
      @container (max-width: 576px) {
        width: ${media.xs};
      }
      @container (min-width: 576px) {
        width: ${media.sm};
      }
      @container (min-width: 768px) {
        width: ${media.md};
      }
      @container (min-width: 992px) {
        width: ${media.lg};
      }
      @container (min-width: 1200px) {
        width: ${media.xl};
      }
      @container (min-width: 1600px) {
        width: ${media.xxl};
      }
      // container
      // @media (max-width: 576px) {
      //   width: ${media.xs};
      // }
      // @media (min-width: 576px) {
      //   width: ${media.sm};
      // }
      // @media (min-width: 768px) {
      //   width: ${media.md};
      // }
      // @media (min-width: 992px) {
      //   width: ${media.lg};
      // }
      // @media (min-width: 1200px) {
      //   width: ${media.xl};
      // }
      // @media (min-width: 1600px) {
      //   width: ${media.xxl};
      // }
    `,
    {
      key: config.id,
      ...config.props,
      style: { ...config?.props?.style, ...injectStyles },
    },
    config.children &&
      config.children
        .sort((a: { order: number }, b: { order: number }) => a.order - b.order)
        .map((c: any) => <Renderer {...c} />)
  );
};

export default StyledLayout;
