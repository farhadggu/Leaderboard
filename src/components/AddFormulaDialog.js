import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./AddUserDialog.module.css";
import axios from "axios";
import { toast } from "react-toastify";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddFormulaDialog({ open, setOpen }) {
  const [firstState, setFirstState] = React.useState("");
  const [secondState, setSecondState] = React.useState("");
  const [thirdtState, setThirdState] = React.useState("");
  const [data, setData] = useState([])

  const getData = async () => {
    await axios.get(`${process.env.REACT_APP_BASEURL}/weight`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((resp) => {
      setData(resp.data.data[0])
    }).catch((error) => {
      console.log(error)
    })
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    await axios.post(`${process.env.REACT_APP_BASEURL}/weight`, {
      article: firstState,
      news: secondState,
      tool: thirdtState,
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then((resp) => {
      toast.success("فرمول تغییر یافت")
      getData()
    }).catch((error) => {
      console.log(error)
      toast.error(error.response.data.message)
    })
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      className={styles.dialogBox}
    >
      <DialogTitle sx={{ background: "#12123a", color: "#fff" }}>
        افزودن فرمول
      </DialogTitle>
      <DialogContent
        sx={{ background: "#12123a", color: "#fff", paddingTop: "60px" }}
      >
        <Box sx={{ marginTop: "20px" }}></Box>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            border: "1px solid #ccc",
            borderRadius: "10px",
            marginBottom: "40px",
          }}
        >
          <Box
            sx={{
              margin: "-20px auto 0",
              width: "fit-content",
              border: "1px solid #ccc",
              padding: "10px",
              background: "#12123a",
              borderRadius: "5px",
            }}
          >
            <Typography sx={{ textAlign: "center" }}>فرمول فعلی</Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            padding="20px"
          >
            <Typography sx={{ fontWeight: "bold" }}>مقاله : </Typography>
            <Typography>{data.article}</Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            padding="20px"
          >
            <Typography sx={{ fontWeight: "bold" }}>اخبار : </Typography>
            <Typography>{data.news}</Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            padding="20px"
          >
            <Typography sx={{ fontWeight: "bold" }}>ابزار : </Typography>
            <Typography>{data.tool}</Typography>
          </Box>
        </Box>
        <Box>
          <TextField
            required
            id="standard-required"
            label="َمقاله (Article)"
            placeholder="مقاله (Article)"
            variant="standard"
            value={firstState}
            onChange={(e) => setFirstState(e.target.value)}
            style={{
              textAlign: "left !important",
              width: "100%",
              color: "#fff !important",
              marginBottom: "20px",
            }}
          />
          <TextField
            required
            id="standard-required"
            label="اخبار (News)"
            placeholder="اخبار (News)"
            variant="standard"
            value={secondState}
            onChange={(e) => setSecondState(e.target.value)}
            style={{
              textAlign: "left !important",
              width: "100%",
              color: "#fff !important",
              marginBottom: "20px",
            }}
          />
          <TextField
            required
            id="standard-required"
            label="ابزار (Tool)"
            placeholder="ابزار (Tool)"
            variant="standard"
            value={thirdtState}
            onChange={(e) => setThirdState(e.target.value)}
            style={{
              textAlign: "left !important",
              width: "100%",
              color: "#fff !important",
            }}
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ background: "#12123a" }}>
        <Button onClick={handleClose} sx={{ color: "#fff" }}>
          لغو
        </Button>
        <Button onClick={() => handleSubmit()} sx={{ color: "#fff" }}>
          افزودن
        </Button>
      </DialogActions>
    </Dialog>
  );
}
