import React, { useState } from "react";
import { Card, Menu } from "antd";
import {
  PushpinOutlined,
  ArrowsAltOutlined,
  MinusOutlined,
  ExportOutlined,
  CloseOutlined,
} from "@ant-design/icons";

interface PanelProps {
  title: string;
  children: React.ReactNode;
}

const Panel: React.FC<PanelProps> = ({ title, children }) => {
  const [isMinimized, setIsMinimized] = useState(false);

  const handleMenuClick = (e: any) => {
    switch (e.key) {
      case "adjust":
        // Placeholder for adjust logic
        console.log("Adjust panel");
        break;
      case "dock":
        // Placeholder for dock logic
        console.log("Dock panel");
        break;
      case "minimize":
        setIsMinimized(!isMinimized);
        console.log("Minimize panel");
        break;
      case "popout":
        // Placeholder for pop-out logic
        console.log("Pop out panel");
        break;
      case "remove":
        // Placeholder for remove logic
        console.log("Remove panel");
        break;
      default:
        break;
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick} mode="horizontal">
      <Menu.Item key="adjust" icon={<ArrowsAltOutlined />}>
        Adjust
      </Menu.Item>
      <Menu.Item key="dock" icon={<PushpinOutlined />}>
        Dock
      </Menu.Item>
      <Menu.Item key="minimize" icon={<MinusOutlined />}>
        {isMinimized ? "Maximize" : "Minimize"}
      </Menu.Item>
      <Menu.Item key="popout" icon={<ExportOutlined />}>
        Pop Out
      </Menu.Item>
      <Menu.Item key="remove" icon={<CloseOutlined />}>
        Remove
      </Menu.Item>
    </Menu>
  );

  return (
    <Card title={title} extra={menu} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {!isMinimized && <div style={{ flex: 1, overflow: "auto" }}>{children}</div>}
