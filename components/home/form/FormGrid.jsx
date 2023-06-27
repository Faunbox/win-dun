import { Grid } from "@nextui-org/react";

const GridForm = ({ children }) => {
  return (
    <Grid  xs={12} sm={6} xl={4}>
      {children}
    </Grid>
  );
};

export default GridForm;
