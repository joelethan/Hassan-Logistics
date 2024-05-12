import { Box, Grid } from "@mui/material";
import RevenueCard from "../Revenue/RevenueCard";
import CustomersGrowthCharts from "./CustomersGrowthCharts";
import ProductsGrowthCharts from "./ProductsGrowthCharts";
import SalesGrowthCharts from "./SalesGrowthCharts";
import VisitorsGrowthCharts from "./VisitorsGrowthCharts";

const Growth = () => {
  const revenueItems = [
    {
      isMoney: false,
      number: "330",
      percentage: 11,
      upOrDown: "down",
      color: "red",
      title: "Orders Per Month",
      subTitle: "vs prev month",
    },
    {
      isMoney: false,
      number: "109",
      percentage: 35,
      upOrDown: "up",
      color: "green",
      title: "Total Customer",
      subTitle: "vs prev year",
    },
    {
      isMoney: false,
      number: "607",
      percentage: 10,
      upOrDown: "up",
      color: "green",
      title: "Total Product",
      subTitle: "vs prev month",
    },
    {
      isMoney: false,
      number: "1200",
      percentage: "30",
      title: "Total Visitors",
      color: "green",
      subTitle: "vs prev week",
    },
  ];
  return (
    <Box sx={{ p: 3, mx: 3 }}>
      <Grid container sx={{ mx: 4 }}>
        {revenueItems.map((card, index) => (
          <Grid item md={3} key={index}>
            <Box m={4}>
              <RevenueCard card={card} />
            </Box>
          </Grid>
        ))}
      </Grid>
      <Grid container sx={{ mx: 4 }}>
        <Grid item md={6}>
          <SalesGrowthCharts />
        </Grid>
        <Grid item md={6}>
          <VisitorsGrowthCharts />
        </Grid>
      </Grid>
      <Grid container sx={{ mx: 4 }}>
        <Grid item md={6}>
          <ProductsGrowthCharts />
        </Grid>
        <Grid item md={6}>
          <CustomersGrowthCharts />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Growth;




// import { Box, Grid } from "@mui/material";
// import { Component } from "react";
// import RevenueCard from "../Revenue/RevenueCard";
// import CustomersGrowthCharts from "./CustomersGrowthCharts";
// import ProductsGrowthCharts from "./ProductsGrowthCharts";
// import SalesGrowthCharts from "./SalesGrowthCharts";
// import VisitorsGrowthCharts from "./VisitorsGrowthCharts";
// export default class Growth extends Component {
//   render() {
//     const revenueItems = [
//       {
//         isMoney: false,
//         number: "330",
//         percentage: 11,
//         upOrDown: "down",
//         color: "red",
//         title: "Orders Per Month",
//         subTitle: "vs prev month",
//       },
//       {
//         isMoney: false,
//         number: "109",
//         percentage: 35,
//         upOrDown: "up",
//         color: "green",
//         title: "Total Customer",
//         subTitle: "vs prev year",
//       },
//       {
//         isMoney: false,
//         number: "607",
//         percentage: 10,
//         upOrDown: "up",
//         color: "green",
//         title: "Total Product",
//         subTitle: "vs prev month",
//       },
//       {
//         isMoney: false,
//         number: "1200",
//         percentage: "30",
//         title: "Total Visitors",
//         color: "green",
//         subTitle: "vs prev week",
//       },
//     ];
//     return (
//       <Box sx={{ p: 3, mx: 3 }}>
//         <Grid container sx={{ mx: 4 }}>
//           {revenueItems.map((card, index) => (
//             <Grid item md={3} key={index}>
//               <Box m={4}>
//                 <RevenueCard card={card} />
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//         <Grid container sx={{ mx: 4 }}>
//           <Grid item md={6}>
//             <SalesGrowthCharts />
//           </Grid>
//           <Grid item md={6}>
//             <VisitorsGrowthCharts />
//           </Grid>
//         </Grid>
//         <Grid container sx={{ mx: 4 }}>
//           <Grid item md={6}>
//             <ProductsGrowthCharts />
//           </Grid>
//           <Grid item md={6}>
//             <CustomersGrowthCharts />
//           </Grid>
//         </Grid>
//       </Box>
//     );
//   }
// }
