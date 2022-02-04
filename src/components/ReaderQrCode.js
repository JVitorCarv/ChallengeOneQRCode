import React from "react";
import { Card, CardContent, makeStyles } from "@material-ui/core";
import QrReader from "react-qr-reader";
import { useNavigate } from "react-router-dom";

//################################# APP ####################################
function ReaderQrCode() {
  const navigate = useNavigate();
  // carregando estilo customizado
  const classes = useStyles();

  // função responsavel por gerenciar os erros da leitura do QR CODE
  const handleErrorWebCam = (error) => {
    console.log(error);
  };

  // função executada quando há uma leitura do QR code pela camera do notebook
  const handleScanWebCam = (result) => {
    console.log(result);
    if (result) {
      const parsed = JSON.parse(JSON.parse(result));
      navigate("/reader-qrcode/form", { state: parsed });
    }
  };

  return (
    <Card>
      <h2 className={classes.title}>Scan QR Code</h2>
      <CardContent>
        <h3>Qr Code Scan by Web Cam</h3>
        <QrReader
          delay={300}
          style={{ width: "50%" }}
          onError={handleErrorWebCam}
          onScan={handleScanWebCam}
        />
      </CardContent>
    </Card>
  );
}

// Criação de um estilo customizado
const useStyles = makeStyles((theme) => ({
  conatiner: {
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
export default ReaderQrCode;
