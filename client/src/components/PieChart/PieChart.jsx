import React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { theme } from "@/config/theme";

export const PieChartComponent = ({ data, size }) => {
  return (
    <PieChart
      colors={[theme.colors.lightGray, theme.colors.gray, theme.colors.text]}
      series={[
        {
          arcLabel: (item) => `${item.label}`,
          arcLabelMinAngle: 45,
          data,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: theme.colors.white,
          fontFamily: theme.fonts.primary,
          fontSize: 8,
        },
      }}
      slotProps={{ legend: { hidden: true }, popper: { hidden: true } }}
      margin={{
        left: 0,
        right: 20,
      }}
      {...size}
    />
  );
};
