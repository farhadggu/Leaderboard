import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from '@mui/material/styles';
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme({
  direction: 'rtl',
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route index path="/login" element={<Login />} />
      </Routes>
      <ToastContainer position="bottom-left" />
    </ThemeProvider>
  );
}

export default App;
