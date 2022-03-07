import React, { MouseEventHandler, useState } from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

import renders from "../Render";
import Renderer from "../Renderer";

const menu: React.FC<{
  onDownload: MouseEventHandler<HTMLDivElement> | undefined;
}> = ({ onDownload }) => {
  return (
    <Menu>
      <Menu.Item>
        <div onClick={onDownload}>Donwload csv</div>
      </Menu.Item>
    </Menu>
  );
};

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
  count: number;
}> = ({ config, count }) => {
  const newCount = count + 1;
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

  return (
    <RenderComp
      {...config.props}
      onClick={(e: { stopPropagation: () => void }) => {
        e.stopPropagation();
        console.log(config);
      }}
      extra={
        <Dropdown overlay={menu({ onDownload: handleDownload })}>
          <a className="ant-dropdown-link" onClick={handleDownload}>
            Download <DownOutlined />
          </a>
        </Dropdown>
      }
    >
      {config.content
        ? typeof config.content === "function"
          ? config.content({ ...config })
          : config.content
        : config.children &&
          config.children.slice()
            .sort(
              (a: { order: number }, b: { order: number }) => a.order - b.order
            )
            .map((c: any) => <Renderer {...c} count={newCount} />)}
    </RenderComp>
  );
};

export default DownloadTable;
