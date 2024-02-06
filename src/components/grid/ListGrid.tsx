import { Divider, Grid } from '@mui/material';

interface ListBoxProps {
  title: React.ReactNode;
  tools: React.ReactNode;
  table: React.ReactNode;
}
export default function ListGrid(props: ListBoxProps) {
  const { title, tools, table } = props;
  return (
    <Grid container flexWrap='nowrap' flexDirection='column' height='100%'>
      <Grid item xs>
        <Grid container mb={2}>
          {title}
        </Grid>
        <Divider />
        <Grid container my={2}>
          {tools}
        </Grid>
        <Divider />
        <Grid container my={2}>
          {table}
        </Grid>
      </Grid>
    </Grid>
  );
}
