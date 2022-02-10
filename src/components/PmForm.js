import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, child, push } from "firebase/database";
import { useLocation, useNavigate } from "react-router-dom";
import Form from "./Form";
import { ButtonPrimary, ButtonSecondary, StyledPMForm } from "../styles";
import { PREFIX_PATH } from "../helper/constants";

//################################# START Firebase Settings ####################################

const firebaseConfig = {
  apiKey:
    "AAAAplipsUI:APA91bGQbCDPCuHA-XQRVNJRvYysIqzPqJ4JXk4d9iowYwHgCel81VZCQYqgdqEQaVX2qGWmwyLjGrnkpKtAs56LhlFZaCdRHZMpn9XVLcxtEc7c5GeiD-uMuibIkDFAQVpfV7mtFduP",
  authDomain: "summerjob-9c9bf.firebaseapp.com",
  databaseURL: "https://summerjob-9c9bf-default-rtdb.firebaseio.com/",
};
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

//################################# END Firebase Settings ####################################

const initialState = {
  ativo: "",
  ativo_description: "",
  id_alpha: "",
  serial: "",
  fabricante: "",
  site: "",
  posicao: "",
  status: "",
  tombamento: "",
  condicao: "",
  problemDescription: "",
  unidadeOperacional: "",
  operatorName: "Jose Santiago Pereira",
  operatorPhone: "(81) 988657433",
  nature: null,
  natureForm: null,
};

//################################# APP ####################################
function PmForm() {
  const [form, setForm] = useState(initialState);
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setForm(state);
  }, [state]);

  const submitOrder = () => {
    // documentação para tempo real do firebase https://firebase.google.com/docs/database/web/start?authuser=0
    const newPostKey = push(child(ref(database), "ativos")).key;

    // const parsedData = JSON.parse(JSON.parse(scanResultWebCam));

    set(ref(database, `ativos/${newPostKey}`), form);
    navigate(`${PREFIX_PATH}/success`);
  };

  const handleHome = () => {
    navigate(`${PREFIX_PATH}/`);
  };

  return (
    <StyledPMForm>
      <Form form={form} setForm={setForm} />
      <div className="action-buttons">
        <ButtonSecondary onClick={handleHome}>cancelar</ButtonSecondary>
        <ButtonPrimary onClick={submitOrder}>Enviar PM</ButtonPrimary>
      </div>
      {/* END Parte do codigo HTML responsavel por Ler o QR CODE */}
    </StyledPMForm>
  );
}

export default PmForm;
