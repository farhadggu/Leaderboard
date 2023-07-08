import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "./RowTable.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { GiTrophyCup } from "react-icons/gi";
import CancelIcon from "@mui/icons-material/Cancel";
import DoneIcon from "@mui/icons-material/Done";
import axios from "axios";
import { toast } from "react-toastify";

export default function RowTable({ place, item, getData }) {
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState({
    name: "",
    tools: "",
    news: "",
    article: "",
    score: "",
  });
  console.log(item);

  const handleEdit = ({ name, tools, news, article }) => {
    setEdit(true);
    setData({
      name: name,
      tools: tools,
      news: news,
      article: article,
    });
  };

  const handleSubmit = async (id) => {
    await axios
      .put(
        `./${process.env.REACT_APP_BASEURL}/leaderboard/${id}`,
        {
          news: data.news,
          article: data.article,
          tool: data.tools,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((resp) => {
        toast.success("اطلاعات با موفقیت ویرایش یافت");
        getData();
        setEdit(false);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const handleDelete = async (id) => {
    await axios
      .delete(`./${process.env.REACT_APP_BASEURL}/leaderboard/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((resp) => {
        toast.success("کاربر مورد نظر حذف شد");
        getData();
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <Box
      className={`parallelogram ${
        place == 1
          ? "border-animation-gold"
          : place == 2
          ? "border-animation-sliver"
          : place == 3
          ? "border-animation-bronze"
          : ""
      }`}
      mt={4}
    >
      <Box
        className="nonParallelogram"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
          padding: "0 20px",
          transform: "skew(20deg)",
        }}
      >
        {edit ? (
          <>
            <Box
              sx={{
                alignItems: "center",
                justifyContent: "center",
                display: { xs: "none", sm: "flex" },
              }}
            >
              {place == "1" ? (
                <img src={"/rank1.webp"} width="50px" />
              ) : place == "2" ? (
                <img src={"/immortal.webp"} width="50px" />
              ) : place == "3" ? (
                <img src={"/archon.png"} width="50px" />
              ) : (
                <img src={"/heralddot.webp"} width="50px" />
              )}
            </Box>

            <Typography
              sx={{
                fontSize: "22px",
                color:
                  place == 1
                    ? "#e5ff00"
                    : place == 2
                    ? "#6fd2f5"
                    : place == 3
                    ? "#a76d30"
                    : "#fff",
                fontWeight: "bold",
              }}
            >
              {place}
            </Typography>

            <Box
              display="flex"
              alignItems="center"
              gap="10px"
              justifyContent="center"
            >
              <Typography sx={{ fontWeight: "bold", color: "#fff" }}>
                نام :{" "}
              </Typography>
              <input
                className="inputForm"
                type="text"
                value={data.name}
                onChange={(e) => setData({ ...data, ["name"]: e.target.value })}
                placeholder="نام"
              />
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap="10px"
              justifyContent="center"
              sx={{
                flexDirection: { xs: "direction", md: "row" },
              }}
            >
              <Typography sx={{ fontWeight: "bold", color: "#fff" }}>
                اخبار :{" "}
              </Typography>
              <input
                className="inputForm"
                type="text"
                value={data.news}
                onChange={(e) => setData({ ...data, ["news"]: e.target.value })}
                placeholder="اخبار"
              />
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap="10px"
              justifyContent="center"
              sx={{
                flexDirection: { xs: "direction", md: "row" },
              }}
            >
              <Typography sx={{ fontWeight: "bold", color: "#fff" }}>
                ابزار :{" "}
              </Typography>
              <input
                className="inputForm"
                type="text"
                value={data.tools}
                onChange={(e) =>
                  setData({ ...data, ["tools"]: e.target.value })
                }
                placeholder="ابزار"
              />
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap="10px"
              justifyContent="center"
              sx={{
                flexDirection: { sm: "column", md: "row" },
              }}
            >
              <Typography sx={{ fontWeight: "bold", color: "#fff" }}>
                مقاله :{" "}
              </Typography>
              <input
                className="inputForm"
                type="text"
                value={data.article}
                onChange={(e) =>
                  setData({ ...data, ["article"]: e.target.value })
                }
                placeholder="مقاله"
              />
            </Box>

            <Typography
              sx={{
                color: "#fff",
                border: `1px solid ${
                  place == 1
                    ? "#e5ff00"
                    : place == 2
                    ? "#6fd2f5"
                    : place == 3
                    ? "#a76d30"
                    : "#ccc"
                }`,
                padding: "5px 20px",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              امتیاز : 48 <GiTrophyCup />
            </Typography>
          </>
        ) : (
          <>
            <Box
              sx={{
                alignItems: "center",
                justifyContent: "center",
                display: { xs: "none", sm: "flex" },
              }}
            >
              {place == "1" ? (
                <img src={"/rank1.webp"} width="50px" />
              ) : place == "2" ? (
                <img src={"/immortal.webp"} width="50px" />
              ) : place == "3" ? (
                <img src={"/archon.png"} width="50px" />
              ) : (
                <img src={"/heralddot.webp"} width="50px" />
              )}
            </Box>

            <Typography
              sx={{
                fontSize: "22px",
                color:
                  place == 1
                    ? "#e5ff00"
                    : place == 2
                    ? "#6fd2f5"
                    : place == 3
                    ? "#a76d30"
                    : "#fff",
                fontWeight: "bold",
              }}
            >
              {place}
            </Typography>

            <Box
              display="flex"
              alignItems="center"
              gap="10px"
              justifyContent="center"
              sx={{ flexDirection: { xs: "column", sm: "row" } }}
            >
              <Typography sx={{ fontWeight: "bold", color: "#fff" }}>
                نام :{" "}
              </Typography>
              <Typography sx={{ color: "#fff" }}>{item.name}</Typography>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap="10px"
              justifyContent="center"
              sx={{ flexDirection: { xs: "column", sm: "row" } }}
            >
              <Typography sx={{ fontWeight: "bold", color: "#fff" }}>
                اخبار :{" "}
              </Typography>
              <Typography sx={{ color: "#fff" }}>{item.news}</Typography>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap="10px"
              justifyContent="center"
              sx={{ flexDirection: { xs: "column", sm: "row" } }}
            >
              <Typography sx={{ fontWeight: "bold", color: "#fff" }}>
                ابزار :{" "}
              </Typography>
              <Typography sx={{ color: "#fff" }}>{item.tool}</Typography>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap="10px"
              justifyContent="center"
              sx={{ flexDirection: { xs: "column", sm: "row" } }}
            >
              <Typography sx={{ fontWeight: "bold", color: "#fff" }}>
                مقاله :{" "}
              </Typography>
              <Typography sx={{ color: "#fff" }}>{item.article}</Typography>
            </Box>

            <Typography
              sx={{
                color: "#fff",
                border: `1px solid ${
                  place == 1
                    ? "#e5ff00"
                    : place == 2
                    ? "#6fd2f5"
                    : place == 3
                    ? "#a76d30"
                    : "#ccc"
                }`,
                padding: "5px 20px",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                flexDirection: { xs: "column", md: "row" },
                gap: "10px",
              }}
            >
              امتیاز : {item.score} <GiTrophyCup />
            </Typography>
          </>
        )}
        {localStorage.getItem("token") && (
          <Box display="flex" alignItems="center" gap="20px">
            {edit ? (
              <>
                <Typography
                  onClick={() => handleSubmit(item.id)}
                  sx={{
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    borderBottom: "1px solid #ccc",
                    gap: "10px",
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                >
                  <DoneIcon sx={{ fontSize: "16px" }} /> ثبت
                </Typography>
                <Typography
                  onClick={() => setEdit(false)}
                  sx={{
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    borderBottom: "1px solid #ccc",
                    gap: "10px",
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                >
                  <CancelIcon sx={{ fontSize: "16px" }} /> لغو
                </Typography>
              </>
            ) : (
              <Box
                display="flex"
                alignItems="center"
                gap="10px"
                sx={{ flexDirection: { xs: "column", md: "row" } }}
              >
                <Typography
                  onClick={() =>
                    handleEdit({
                      name: item.name,
                      tools: item.tool,
                      news: item.news,
                      article: item.article,
                    })
                  }
                  sx={{
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    borderBottom: "1px solid #ccc",
                    gap: "10px",
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                >
                  <EditIcon sx={{ fontSize: "16px" }} /> ویرایش
                </Typography>
                <Typography
                  sx={{
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    borderBottom: "1px solid #ccc",
                    gap: "10px",
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleDelete(item.id)}
                >
                  <DeleteIcon sx={{ fontSize: "16px" }} /> حذف
                </Typography>
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}
