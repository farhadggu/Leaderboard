import { Box, Typography } from "@mui/material";
import React from "react";
import { BiLogoAirbnb } from "react-icons/bi";
import { GiTrophyCup } from "react-icons/gi";
import { MdVerified } from "react-icons/md";

export default function Card({ place }) {
  return (
    <Box
      sx={{
        background: "#21214a",
        height: "350px",
        borderRadius: "20px",
        border: "1px solid #eee",
      }}
    >
      <Box
        sx={{
          background:
            place == "اول"
              ? "radial-gradient(circle, rgba(246,244,171,1) 0%, rgba(226,240,209,1) 35%, rgba(18,18,58,1) 100%)"
              : place == "دوم"
              ? "radial-gradient(circle, rgba(159,241,234,1) 0%, rgba(239,231,249,1) 35%, rgba(18,18,58,1) 100%)"
              : place == "سوم"
              ? "radial-gradient(circle, rgba(250,218,193,1) 0%, rgba(226,240,203,1) 35%, rgba(18,18,58,1) 100%)"
              : "",
          height: "80px",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            padding: "20px",
            fontSize: "22px",
            color: "rgba(255, 255, 255, .5)",
          }}
        >
          {place}
        </Typography>
      </Box>
      
      <Box width="100%" position="relative">
        <Box className="hexagon">
          {place == "اول" ? (
            <img src={"/rank1.webp"} />
          ) : place == "دوم" ? (
            <img src={"/immortal.webp"} />
          ) : place == "سوم" ? (
            <img src={"/immortal.webp"} />
          ) : (
            ""
          )}
        </Box>

        <Box
          display="flex"
          justifyContent="start"
          gap="20px"
          alignItems="center"
          marginRight="30px"
          marginTop="10px"
        >
          <Typography
            sx={{
              color: "#fff",
              background: "#25244e",
              border: "1px solid #ccc",
              padding: "4px 16px",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              borderRadius: "5px",
            }}
          >
            امتیاز : 90{" "}
            {place == "اول" ? (
              <GiTrophyCup style={{ color: "#f3dc80", fontSize: "18px" }} />
            ) : place == "دوم" ? (
              <GiTrophyCup style={{ color: "#3abef9", fontSize: "18px" }} />
            ) : place == "سوم" ? (
              <GiTrophyCup style={{ color: "#e4c49e", fontSize: "18px" }} />
            ) : (
              ""
            )}
          </Typography>
          <BiLogoAirbnb style={{ color: "#fff", fontSize: "22px" }} />
        </Box>

        <Box
          display="flex"
          alignItems="center"
          gap="20px"
          width="100%"
          padding="20px"
          mt={3}
        >
          <Typography
            sx={{ color: "#fff", fontSize: "22px", fontWeight: "bold" }}
          >
            فرهاد قراگوزلو
          </Typography>
          <MdVerified
            style={{
              color: "blue",
              fontSize: "22px",
              background: "#fff",
              borderRadius: "50%",
            }}
          />
        </Box>

        <Box display="flex" justifyContent="center" alignItems="center" gap="40px" mt={3}>
          <Box display="flex" flexDirection="column" alignItems="start" justifyContent="start">
            <Typography sx={{ color: "#fff", fontSize: "22px", fontWeight: "bold" }}>40</Typography>
            <Typography sx={{ color: "#fff", color: "#bbb", fontSize: "16px", fontWeight: "bold" }}>اخبار</Typography>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="start" justifyContent="start">
            <Typography sx={{ color: "#fff", fontSize: "22px", fontWeight: "bold" }}>35</Typography>
            <Typography sx={{ color: "#fff", color: "#bbb", fontSize: "16px", fontWeight: "bold" }}>ابزار</Typography>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="start" justifyContent="start">
            <Typography sx={{ color: "#fff", fontSize: "22px", fontWeight: "bold" }}>75</Typography>
            <Typography sx={{ color: "#fff", color: "#bbb", fontSize: "16px", fontWeight: "bold" }}>مقاله</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
