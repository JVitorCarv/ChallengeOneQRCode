import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, makeStyles } from "@material-ui/core";
import CreateQrCode from "./components/CreateQrcode";
import ReaderQrCode from "./components/ReaderQrCode";
import PmForm from "./components/PmForm";
import SuccesForm from "./components/SuccesForm";

//################################# APP ####################################
function App() {
  const classes = useStyles();

  return (
    <Container className={classes.conatiner}>
      <Router>
        <Link to="/create-qrcode">Criar um QR Code</Link>
        <Link to="/reader-qrcode">Leitor de QrCode</Link>

        <Routes>
          <Route exact path="/create-qrcode" element={<CreateQrCode />} />
          <Route exact path="/reader-qrcode" element={<ReaderQrCode />} />
          <Route exact path="/reader-qrcode/form" element={<PmForm />} />
          <Route exact path="/success" element={<SuccesForm />} />
        </Routes>
      </Router>
    </Container>
  );
}

// Criação de um estilo customizado
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 10,
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#3f51b5",
    color: "#fff",
    padding: 20,
  },
  btn: {
    marginTop: 10,
    marginBottom: 20,
  },
}));
export default App;
