import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import styles from "./HomePage.module.css";
import RowTable from "../components/RowTable";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import AddUserDialog from "../components/AddUserDialog";
import FunctionsIcon from "@mui/icons-material/Functions";
import AddFormulaDialog from "../components/AddFormulaDialog";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../components/Loading";

export default function HomePage() {
  const [open, setOpen] = React.useState(false);
  const [openFormula, setOpenFormula] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    await axios
      .get(`${process.env.REACT_APP_BASEURL}/leaderboard`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((resp) => {
        setLoading(false);
        setData(resp.data.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        toast.error(error.response.data.message);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box maxWidth="xl" margin="50px auto">
      {localStorage.getItem("token") && (
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              border: "1px solid #ccc",
              color: "#ccc",
            }}
            onClick={() => setOpen(true)}
          >
            افزودن کاربر <PersonAddAltIcon />
          </Button>

          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              border: "1px solid #ccc",
              color: "#ccc",
            }}
            onClick={() => setOpenFormula(true)}
          >
            افزودن فرمول <FunctionsIcon />
          </Button>
        </Box>
      )}
      <Box mt={4}>
        <Grid container maxWidth="md" columnGap={2} rowGap={2} margin="0 auto">
          {data.map((item, index) => (
            <Grid item xs={12} sm={3.8} md={3.8}>
              <Card place={index + 1} item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        sx={{
          maxWidth: { sm: "700px", md: "md", lg: "lg", xl: "none" },
          margin: "0 auto",
        }}
      >
        {data.map((item, index) => (
          <RowTable place={index + 1} item={item} getData={getData} />
        ))}
      </Box>

      <AddUserDialog open={open} setOpen={setOpen} getData={getData} />
      <AddFormulaDialog open={openFormula} setOpen={setOpenFormula} />
    </Box>
  );
}
