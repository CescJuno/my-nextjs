import { Grid } from "@mui/material";
import { useFilter } from "../contexts/useFilter";

const NoticeBox = () => {
  const { filter } = useFilter();

  console.log(filter);
  return (
    <Grid container my={1}>
      <Grid item>aa</Grid>
    </Grid>
  );
};
export default NoticeBox;
