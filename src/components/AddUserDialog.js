import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Box, TextField } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import styles from "./AddUserDialog.module.css";
import axios from "axios";
import { toast } from "react-toastify";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddUserDialog({ open, setOpen, getData }) {
  const [name, setName] = React.useState("");
  const [imageAddress, setImageAddress] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    setLoading(true);
    await axios
      .post(
        `${process.env.REACT_APP_BASEURL}/leaderboard`,
        {
          name: name,
          image: imageAddress,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((resp) => {
        toast.success("کاربر با موفقیت افزوده شد");
        getData();
        handleClose();
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
        setLoading(false);
      });
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      className={styles.dialogBox}
    >
      <DialogTitle sx={{ background: "#fafcfe", color: "#000" }}>
        افزودن کاربر
      </DialogTitle>
      <DialogContent sx={{ background: "#fafcfe", color: "#000" }}>
        <Box>
          <TextField
            required
            id="standard-required"
            label="نام فرد"
            placeholder="نام فرد"
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              textAlign: "left !important",
              width: "100%",
              color: "#000 !important",
              marginBottom: "40px",
            }}
          />
          <TextField
            required
            id="standard-required"
            label="آدرس عکس"
            placeholder="آدرس عکس"
            variant="standard"
            value={imageAddress}
            onChange={(e) => setImageAddress(e.target.value)}
            style={{
              textAlign: "left !important",
              width: "100%",
              color: "#000 !important",
            }}
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ background: "#fafcfe" }}>
        <Button onClick={handleClose} sx={{ color: "#000" }}>
          لغو
        </Button>
        <Button onClick={() => handleSubmit()} sx={{ color: "#000" }} disabled={!name}>
          افزودن
        </Button>
      </DialogActions>
    </Dialog>
  );
}
