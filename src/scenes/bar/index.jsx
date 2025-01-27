import React from "react";
import { Box } from "@mui/material";
import Header from "../../component/Header";
import BarChart from "../../component/BarChart";

const Bar = () => {
  return (
    <Box mb="20px">
      <Header title="Bar Chart" subTitle="Simple Bar Chart" />

      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
