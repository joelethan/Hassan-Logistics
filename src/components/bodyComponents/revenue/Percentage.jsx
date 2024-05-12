/* eslint-disable react/prop-types */
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const Percentage = ({ percentage, upOrDown, color }) => {
  const percentageColor = color === "red" ? "error" : "success";
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography fontWeight={"bold"} variant="h6" color={color}>
        {percentage}%
      </Typography>
      {upOrDown === "up" ? (
        <ArrowDropUp color={percentageColor} />
      ) : (
        <ArrowDropDown color={percentageColor} />
      )}
    </Box>
  );
};

export default Percentage;
