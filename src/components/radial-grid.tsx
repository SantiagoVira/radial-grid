import React from "react";
import "./radial-grid.css";
import { cn } from "../utils/cn";

const scale360 = (value: number, outMin: number, outMax: number) => {
  const inMin = 0;
  const inMax = 360;
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

const RadialGrid: React.FC<
  React.PropsWithChildren<{
    preserveChildRotation?: boolean;
    startAngle?: number;
    endAngle?: number;
    lastMeetEnd?: boolean;
    className?: string;
  }>
> = ({
  children,
  preserveChildRotation = false,
  startAngle = 0,
  endAngle = 360,
  lastMeetEnd = false,
  className = "",
}) => {
  return (
    <div className={cn("container", className)}>
      {React.Children.map(children, (child, i) => {
        let count = React.Children.count(children);
        if (lastMeetEnd && count > 1) count--;

        const angle = scale360((360 / count) * i, startAngle, endAngle);
        return (
          <div
            className="element"
            style={{
              rotate: `${angle}deg`,
            }}>
            <div style={{ rotate: `${preserveChildRotation ? -angle : 0}deg` }}>
              {child}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RadialGrid;
