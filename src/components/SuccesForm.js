import React from "react";
import { ButtonPrimary, ButtonSecondary, StyledSuccesForm } from "../styles";
import { PREFIX_PATH } from "../helper/constants";
import { useNavigate } from "react-router-dom";

//################################# APP ####################################
function SuccesForm() {
  const navigate = useNavigate();
  const srcImage = `${PREFIX_PATH}/assets/email.png`;

  const handleHome = () => {
    navigate(`${PREFIX_PATH}/`);
  };

  const scanQr = () => {
    navigate(`${PREFIX_PATH}/reader-qrcode`);
  }

  return (
    <StyledSuccesForm>
      <div className="image-email">
        <img src={srcImage} alt="email" />
      </div>

      <h1>O Pedido de Manutenção foi enviado e recebido pelo CCO</h1>

      <p>
        Em breve o PM será registrado e entrará em análise para a realização da
        manutenção
      </p>

      <div className="action-buttons">
        <ButtonSecondary onClick={handleHome}>Voltar</ButtonSecondary>
        <ButtonPrimary onClick={scanQr}>Ler Novo QR COde</ButtonPrimary>
      </div>
    </StyledSuccesForm>
  );
}

export default SuccesForm;
