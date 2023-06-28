import { Box, Grid } from "@mui/material";
import React from "react";
import Card from "../components/Card";

export default function HomePage() {
  return (
    <Box maxWidth="xl" margin="100px auto">
      <Box>
        <Grid container maxWidth="md" columnGap={2} margin="0 auto">
          <Grid item md={3.8}>
            <Card place="اول" />
          </Grid>
          <Grid item md={3.8}>
            <Card place="دوم" />
          </Grid>
          <Grid item md={3.8}>
            <Card place="سوم" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
