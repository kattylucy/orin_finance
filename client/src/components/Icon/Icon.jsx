import React from "react";
import { icons } from "@/config/icons";
import { useTheme } from "styled-components";

export const Icon = ({
  icon,
  variant,
  height = "18px",
  width = "18px",
  onClick,
  ...props
}) => {
  const theme = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
      fill={theme.colors[variant]}
      onClick={onClick}
      {...props}
    >
      <path d={icons[icon]} />
    </svg>
  );
};
