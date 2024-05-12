import { Box, Grid } from "@mui/material";
import BestSelledProductChart from "./BestSelledProductChart";
import BestSelledProductChartBar from "./BestSelledProductChartBar";
import RevenueCard from "./RevenueCard";
import RevenueCostChart from "./RevenueCostChart";

const Revenue = () => {
  const revenueItems = [
    {
      isMoney: true,
      number: "23 000",
      percentage: 55,
      upOrDown: "up",
      color: "green",
      title: "Sales This Year",
      subTitle: "vs prev year",
    },
    {
      isMoney: true,
      number: "3500",
      percentage: 70,
      upOrDown: "up",
      color: "green",
      title: "Revenue This Year",
      subTitle: "vs prev year",
    },
    {
      isMoney: true,
      number: "2000",
      percentage: 12,
      upOrDown: "down",
      color: "red",
      title: "Cost This Year",
      subTitle: "vs prev year",
    },
    {
      isMoney: true,
      number: "98 000",
      percentage: undefined,
      title: "Revenue Total",
      subTitle: "vs prev year",
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
        <Grid item md={12}>
          <RevenueCostChart />
        </Grid>
      </Grid>
      <Grid container sx={{ mx: 4 }}>
        <Grid item md={6}>
          <BestSelledProductChart />
        </Grid>
        <Grid item md={6}>
          <BestSelledProductChartBar />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Revenue;

//
//

// import { Component } from "react";
// import RevenueCard from "./RevenueCard";
// import { Box, Grid, Paper } from "@mui/material";
// import RevenueCostChart from "./RevenueCostChart";
// import BestSelledProductChart from "./BestSelledProductChart";
// import BestSelledProductChartBar from "./BestSelledProductChartBar";

// export default class Revenue extends Component {
//   render() {
//     const revenuCards = [
//       {
//         isMoney: true,
//         number: "23 000",
//         percentage: 55,
//         upOrDown: "up",
//         color: "green",
//         title: "Sales This Year",
//         subTitle: "vs prev year",
//       },
//       {
//         isMoney: true,
//         number: "3500",
//         percentage: 70,
//         upOrDown: "up",
//         color: "green",
//         title: "Revenue This Year",
//         subTitle: "vs prev year",
//       },
//       {
//         isMoney: true,
//         number: "2000",
//         percentage: 12,
//         upOrDown: "down",
//         color: "red",
//         title: "Cost This Year",
//         subTitle: "vs prev year",
//       },
//       {
//         isMoney: true,
//         number: "98 000",
//         percentage: undefined,
//         title: "Revenue Total",
//         subTitle: "vs prev year",
//       },
//     ];
//     return (
//       <Box sx={{ p: 3, mx: 3 }}>
//         <Grid container sx={{ mx: 4 }}>
//           {revenuCards.map((card) => (
//             <Grid item md={3}>
//               <Box m={4}>
//                 <RevenueCard card={card} />
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//         <Grid container sx={{ mx: 4 }}>
//           <Grid item md={12}>
//             <RevenueCostChart />
//           </Grid>
//         </Grid>
//         <Grid container sx={{ mx: 4 }}>
//           <Grid item md={6}>
//             <BestSelledProductChart />
//           </Grid>
//           <Grid item md={6}>
//             <BestSelledProductChartBar />
//           </Grid>
//         </Grid>
//       </Box>
//     );
//   }
// }
