import React from "react";
import styled from "styled-components";

const Label = styled.div`
  width: 8px;
  height: 8px;
  background: #eee;
  border-radius: 50%;
`;

function StatusLabel({ size }) {
  return <Label />;
}

export default StatusLabel;
