import React from "react";
import styled from "styled-components";
import colors from "../styles/color";

const Label = styled.div`
  width: 8px;
  height: 8px;
  background: #eee;
  border-radius: 50%;
  background: ${(props) => props.bgColor || "#eee"};
`;

function StatusLabel(props) {
  console.log(props.statusColor);
  return <Label bgColor={colors[props?.statusColor]} />;
}

export default StatusLabel;
