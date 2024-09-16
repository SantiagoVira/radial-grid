import React from "react";
import "./radial-grid.css";
import { cn } from "../utils/cn";
import { scale360 } from "../utils/scale";
import { Property as CSSTypes } from "csstype";

export const RadialRow: React.FC<
  React.PropsWithChildren<{
    diameter?: CSSTypes.Width;
    preserveChildRotation?: boolean;
    startAngle?: number;
    endAngle?: number;
    lastMeetEnd?: boolean;
    className?: string;
  }>
> = ({
  children,
  diameter = "100%",
  preserveChildRotation = false,
  startAngle = 0,
  endAngle = 360,
  lastMeetEnd = false,
  className = "",
}) => {
  return (
    <div className={cn("row-container", className)} style={{ width: diameter }}>
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
