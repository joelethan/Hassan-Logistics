import { Box } from "@mui/material";
// import React from "react";
import CustomerList from "./CustomerList";

const Customer = () => {
  return (
    <Box sx={{ m: 0, p: 3, width: "100%" }}>
      <CustomerList />
    </Box>
  );
};

export default Customer;

// import { Component } from "react";
// import CustomerList from "./CustomerList";
// import { Box } from "@mui/material";
// export default class Customer extends Component {
//   render() {
//     return (
//       <Box sx={{ m: 0, p: 3, width: "100%" }}>
//         <CustomerList />
//       </Box>
//     );
//   }
// }
