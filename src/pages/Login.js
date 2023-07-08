import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
    }
    await axios
      .post(`./${process.env.REACT_APP_BASEURL}/login`, {
        email,
        password,
      })
      .then((resp) => {
        toast.success("با موفقیت وارد شدید");
        navigate("/");
        localStorage.setItem("token", resp.data.data.token);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };

  return (
    <Box maxWidth="xl" sx={{ margin: "0 auto !important" }}>
      <Box
        sx={{
          width: { xs: "300px", md: "700px" },
          margin: "250px auto !important",
          background: "#21214a",
          padding: "20px",
          borderRadius: "20px",
        }}
        component="form"
        method="post"
      >
        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: "22px",
              textAlign: "center !important",
              width: "100%",
              marginBottom: "50px",
            }}
          >
            ورود به حساب
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "22px",
              textAlign: "center !important",
              width: "100%",
              marginBottom: "50px",
              textDecoration: "underline"
            }}
          >
            <Link style={{ color: "#fff" }} to="/">صفحه اصلی</Link>
          </Typography>
        </Box>
        <TextField
          required
          id="standard-required"
          label="ایمیل"
          placeholder="ایمیل"
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            textAlign: "left !important",
            width: "100%",
            color: "#fff !important",
            marginBottom: "40px",
          }}
        />
        <TextField
          required
          id="standard-required"
          label="گذرواژه"
          placeholder="گذرواژه"
          variant="standard"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            textAlign: "left !important",
            width: "100%",
            color: "#fff !important",
          }}
        />
        <Box>
          <Button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            sx={{
              border: "1px solid #ccc",
              color: "#ccc",
              width: "100%",
              marginTop: "60px",
            }}
          >
            ورود
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
