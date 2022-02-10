import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, child, push } from "firebase/database";
import { useLocation, useNavigate } from "react-router-dom";
import Form from "./Form";

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
  tombamento: "",
  unidade: "",
  setor: "",
  problemDescription: "",
  operatorName: "",
  operatorPhone: "",
  nature: null,
  natureForm: null,
};

//################################# APP ####################################
function PmForm() {
  const [form, setForm] = useState(initialState);
  const navigate = useNavigate();
  // const { state } = useLocation();

  // useEffect(() => {
  //   setForm(state);
  // }, [state]);

  const submitOrder = () => {
    console.log(form);

    // documentação para tempo real do firebase https://firebase.google.com/docs/database/web/start?authuser=0
    const newPostKey = push(child(ref(database), "ativos")).key;

    // const parsedData = JSON.parse(JSON.parse(scanResultWebCam));

    set(ref(database, `ativos/${newPostKey}`), form);

    navigate("/success");
  };

  return (
    <div>
      <Form form={form} setForm={setForm} />
      <Button
        className={classes.btn}
        variant="contained"
        color="primary"
        onClick={submitOrder}
      >
        Enviar PM
      </Button>
      {/* END Parte do codigo HTML responsavel por Ler o QR CODE */}
    </div>
  );
}

export default PmForm;
