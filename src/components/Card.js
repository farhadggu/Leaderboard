import { Box, Typography } from "@mui/material";
import React from "react";
import { BiLogoAirbnb } from "react-icons/bi";
import { GiTrophyCup } from "react-icons/gi";
import { MdVerified } from "react-icons/md";
import styles from "./Card.module.css";

export default function Card({ place, item }) {
  return (
    <Box
      sx={{
        background: "#ffffff",
        height: "350px",
        borderRadius: "20px",
        border: "1px solid #eee",
        boxShadow: "0px 20px 20px 13px rgb(0 0 0 / 6%)",
        transition: "all ease .3s",
        "&:hover": {
          transform: "scale(1.03)",
          transition: "all ease .3s"
        }
      }}
      // className={styles.card}
    >
      <Box
        sx={{
          background:
            place == "1"
              ? "linear-gradient(90deg, rgba(242,250,193,1) 0%, rgba(214,229,30,1) 35%, rgba(18,18,58,1) 100%)"
              : place == "2"
              ? "radial-gradient(circle, rgba(159,241,234,1) 0%, rgba(239,231,249,1) 35%, rgba(18,18,58,1) 100%)"
              : place == "3"
              ? "radial-gradient(circle, rgba(250,218,193,1) 0%, rgba(226,240,203,1) 35%, rgba(18,18,58,1) 100%)"
              : "",
          height: "80px",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px"
        }}
      >
        <Typography
          sx={{
            padding: "20px",
            fontSize: "22px",
            color: "#000",
          }}
        >
          {place == 1 ? "اول" : place == 2 ? "دوم" : place == 3 ? "سوم" : ""}
        </Typography>
      </Box>

      <Box width="100%" position="relative">
        <Box className="hexagon">
          {place == "1" ? (
            <img src={"/rank1.webp"} />
          ) : place == "2" ? (
            <img src={"/immortal.webp"} />
          ) : place == "3" ? (
            <img src={"/archon.png"} />
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
              color: "#000",
              border: "1px solid #ccc",
              borderLeft: "none",
              padding: "4px 16px",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px",
            }}
          >
            امتیاز : {item.score}{" "}
            {place == "1" ? (
              <GiTrophyCup style={{ color: "#f3dc80", fontSize: "18px" }} />
            ) : place == "2" ? (
              <GiTrophyCup style={{ color: "#3abef9", fontSize: "18px" }} />
            ) : place == "3" ? (
              <GiTrophyCup style={{ color: "#e4c49e", fontSize: "18px" }} />
            ) : (
              ""
            )}
          </Typography>
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
            sx={{ color: "#000", fontSize: "22px", fontWeight: "bold" }}
          >
            {item.name}
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

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="40px"
          mt={3}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="start"
          >
            <Typography
              sx={{ color: "#000", fontSize: "22px", fontWeight: "bold" }}
            >
              {item.news}
            </Typography>
            <Typography
              sx={{
                color: "#000",
                color: "#bbb",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              اخبار
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="start"
          >
            <Typography
              sx={{ color: "#000", fontSize: "22px", fontWeight: "bold" }}
            >
              {item.tool}
            </Typography>
            <Typography
              sx={{
                color: "#000",
                color: "#bbb",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              ابزار
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="start"
          >
            <Typography
              sx={{ color: "#000", fontSize: "22px", fontWeight: "bold" }}
            >
              {item.article}
            </Typography>
            <Typography
              sx={{
                color: "#000",
                color: "#bbb",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              مقاله
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* <span className={styles.top}></span>
      <span className={styles.right}></span>
      <span className={styles.bottom}></span>
      <span className={styles.left}></span> */}
    </Box>
  );
}
