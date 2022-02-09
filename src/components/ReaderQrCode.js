import TextField from "@material-ui/core/TextField/TextField";
import React from "react";
import QrReader from "react-qr-reader";
import { useNavigate } from "react-router-dom";
import { ButtonPrimary, ButtonSecondary, StyledScanQr } from "../styles";

//################################# APP ####################################
function ReaderQrCode() {
  const navigate = useNavigate();
  // carregando estilo customizado
  // const classes = useStyles();

  // função responsavel por gerenciar os erros da leitura do QR CODE
  const handleErrorWebCam = (error) => {
    console.log(error);
  };

  // função executada quando há uma leitura do QR code pela camera do notebook
  const handleScanWebCam = (result) => {
    if (result) {
      const parsed = JSON.parse(JSON.parse(result));
      navigate("/reader-qrcode/form", { state: parsed });
    }
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <StyledScanQr>
      <h1>Aponte a câmera do celular em direção ao QR Code</h1>

      <div className="scan-qr">
        <QrReader
          delay={300}
          style={{ width: "100%" }}
          onError={handleErrorWebCam}
          onScan={handleScanWebCam}
        />
      </div>

      <p className="details">
        Certifique-se que o QR Code esteja bem centralizado no quadrado verde
      </p>

      <div className="code-content">
        <TextField
          id="outlined-helperText"
          label="ID Alpha"
          helperText="Código do Ativo"
          variant="outlined"
        />
      </div>

      <div className="action-buttons">
        <ButtonSecondary onClick={handleHome}>cancelar</ButtonSecondary>
        <ButtonPrimary>Buscar Ativo</ButtonPrimary>
      </div>
    </StyledScanQr>
  );
}

export default ReaderQrCode;
