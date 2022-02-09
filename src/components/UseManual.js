import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonPrimary, StyledManual } from "../styles";

function UseManual() {
  const navigate = useNavigate();
  const PREFIX_PATH = process.env.REACT_APP_PREFIX_PATH
    ? process.env.REACT_APP_PREFIX_PATH
    : "";
  const srcImage = `${PREFIX_PATH}/assets/qrcode.png`;

  console.log(process.env.PREFIX_PATH);
  const handleButton = () => {
    navigate("/reader-qrcode");
  };

  return (
    <StyledManual>
      <h1>Seja bem-vindo(a) ao Delta!</h1>

      <p>
        O Sistema Delta permite a fácil identificação de ativos através de QR
        Code, além do prático preenchimento e envio de Pedidos de Manutenção
        (PM) para o Centro de Controle e Operação (CCO).
      </p>

      <div className="image-qr">
        <img src={srcImage} alt="qrCode" />
      </div>

      <div className="instructions">
        <h1>Siga as intruções:</h1>

        <div>
          <span>1.</span>
          <p>
            Aponte a câmera do celular para o QR Code para que ocorra a leitura
            da imagem
          </p>
        </div>
        <div>
          <span>2.</span>
          <p>Após a leitura, receba os dados e informações sobre o ativo</p>
        </div>
        <div>
          <span>3.</span>
          <p>
            Preencha o formulário do PM com todas as informações necessárias
            Envie o PM para o CCO
          </p>
        </div>
      </div>

      <div className="action-button">
        <ButtonPrimary onClick={handleButton}>Ler QR Code</ButtonPrimary>
      </div>
    </StyledManual>
  );
}

export default UseManual;
