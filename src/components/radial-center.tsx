import React from "react";
import "./radial-grid.css";
import { cn } from "../utils/cn";

export const RadialCenter: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className = "" }) => {
  return <div className={cn("center-container", className)}>{children}</div>;
};
