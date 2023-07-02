import React from "react";
import Box from "@mui/material/Box";

const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        margin: "200px auto",
        height: "100vh"
      }}
    >
      <img src="/loading.gif" alt="loading" />
    </Box>
  );
};

export default Loading;
