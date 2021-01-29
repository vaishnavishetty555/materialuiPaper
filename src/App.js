import React from "react";
import { Paper, Typography } from "@material-ui/core";

export default function App() {
  return (
    <Paper style={{ borderRadius: "10px" }} elevation="14" square>
      <Typography variant="h6">This is my Typography</Typography>
    </Paper>
  );
}
