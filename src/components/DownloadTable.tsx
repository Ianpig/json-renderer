import React, { useState } from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

import renders from "../Render";
import Renderer from "../Renderer";

const menu = ({ onDownload }) => (
  <Menu>
    <Menu.Item onClick={onDownload}>Donwload csv</Menu.Item>
  </Menu>
);

const DownloadTable: React.FC<{
  config: {
    type: any;
    id?: string;
    props: any;
    children: any;
    content?: any;
    isColumn?: boolean;
    isDownload?: boolean;
  };
}> = ({ config }) => {
  console.log(config);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const RenderComp = renders(config.type);

  const onSelectChange = (selectedRowKeys: React.SetStateAction<never[]>) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleDownload = () => {
    console.log("selectedRowKeys selected: ", selectedRowKeys);
  };

  function findChildren(element: {
    type: any;
    id?: string | undefined;
    props: any;
    children: any;
    content?: any;
    isColumn?: boolean | undefined;
    isDownload?: boolean | undefined;
  }) {
    if (element.type === "Table") {
      element.props = {
        ...element.props,
        rowSelection: { type: "checkbox", ...rowSelection },
      };
    } else if (element.children && element.children.length) {
      element = element.children.forEach((elem: any) => {
        findChildren(elem);
      });
    }
  }
  findChildren(config);

  return React.createElement(
    RenderComp,
    {
      key: new Date().getTime(),
      onClick: (e) => {
        e.stopPropagation();
        console.log(config);
      },
      extra: (
        <Dropdown overlay={menu({ onDownload: handleDownload })}>
          <a className="ant-dropdown-link" onClick={handleDownload}>
            Download <DownOutlined />
          </a>
        </Dropdown>
      ),
      ...config.props,
    },
    config.children &&
      config.children
        .sort((a: { order: number }, b: { order: number }) => a.order - b.order)
        .map((c: any) => <Renderer {...c} />)
  );
};

export default DownloadTable;
