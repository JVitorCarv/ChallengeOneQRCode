import React from "react";
import { ButtonPrimary, StyledDetailsAtivo } from "../styles";
import { PREFIX_PATH } from "../helper/constants";
import { useLocation, useNavigate } from "react-router-dom";

const ContentLine = ({ label, content }) => {
  return (
    <div className="content-line">
      <span>{label}:</span>
      <p>{content}</p>
    </div>
  );
};

function AtivoDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const generatePm = () => {
    navigate(`${PREFIX_PATH}/reader-qrcode/form`, { state });
  };

  return (
    <StyledDetailsAtivo>
      <h1>{state.ativo}</h1>

      <p>{state.ativo_description}</p>

      <div className="content-group">
        <ContentLine label="Id Alpha" content={state.id_alpha}></ContentLine>
        <ContentLine label="N Serial" content={state.serial}></ContentLine>
        <ContentLine
          label="Fabricante"
          content={state.fabricante}
        ></ContentLine>
      </div>

      <div className="content-group">
        <ContentLine label="Site" content={state.site}></ContentLine>
        <ContentLine label="Posição" content={state.posicao}></ContentLine>
        <ContentLine
          label="Tombamento"
          content={state.tombamento}
        ></ContentLine>
      </div>

      <div className="content-group">
        <ContentLine label="Status" content={state.status}></ContentLine>
        <ContentLine label="Condição" content={state.condicao}></ContentLine>
      </div>

      <ButtonPrimary onClick={generatePm}>GERAR PM</ButtonPrimary>
    </StyledDetailsAtivo>
  );
}

export default AtivoDetails;
