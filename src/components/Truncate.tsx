import React from 'react';
import { Tooltip } from 'antd';

export default function Truncate({ children }: { children: React.ReactNode }) {
  return (
    <Tooltip title={children}>
      <div className="truncate">{children}</div>
    </Tooltip>
  );
}
