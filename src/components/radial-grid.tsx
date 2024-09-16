import React from "react";
import "./radial-grid.css";
import { cn } from "../utils/cn";

export const RadialGrid: React.FC<
  React.PropsWithChildren<{
    className?: string;
  }>
> = ({ children, className = "" }) => {
  return <div className={cn("grid-container", className)}>{children}</div>;
};
