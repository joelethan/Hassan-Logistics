/* eslint-disable react/prop-types */
import { Box, Card, CardContent, Typography } from "@mui/material";

const InfoCard = ({ card }) => {
  return (
    //do the routing here
    <>
      <Card elevation={6} sx={{ mx: card.mx, my: card.my, borderRadius: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center" }} pl={1}>
          <Box
            p={1}
            m={2}
            sx={{
              display: "flex",
              bgcolor: "primary.main",
              borderRadius: 2,
              alignItems: "center",
            }}
          >
            {card.icon}
          </Box>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6" color="text.secondary" component="div">
              {card.title}
            </Typography>
            <Typography
              variant="h5"
              fontWeight={"bolder"}
              color="text.secondary"
              component="div"
            >
              {card.subTitle}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  );
};

export default InfoCard;
