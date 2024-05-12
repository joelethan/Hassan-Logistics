import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBarComponent from "./NavBarComponent";
import SideBarComponent from "./SideBarComponent";

const RootComponent = () => {
  return (
    <>
      <NavBarComponent />
      <Box
        sx={
          {
            // bgcolor: "#DEE3E9",
            // height: 899,
          }
        }
      >
        <Grid container spacing={0}>
          <Grid item md={2} sm={0}>
            <SideBarComponent />
          </Grid>
          <Grid item md={10}>
            <Outlet />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default RootComponent;
