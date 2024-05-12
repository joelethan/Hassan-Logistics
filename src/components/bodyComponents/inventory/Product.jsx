/* eslint-disable react/prop-types */
import { Avatar, Typography } from "@mui/material";
//more about avatar refres to https://mui.com/material-ui/react-avatar/

const Product = ({ productName }) => {
  return (
    <>
      <Avatar
        alt="alt"
        // src="image/source"
        sx={{ width: 30, height: 30 }}
      >
        A
      </Avatar>

      <Typography sx={{ mx: 3 }} variant="subtitle2">
        {productName}
      </Typography>
    </>
  );
};

export default Product;
