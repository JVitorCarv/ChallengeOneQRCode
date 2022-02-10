import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import QRCode from "qrcode";
import { ButtonPrimary, CreateQRForm } from "../styles";

const initialState = {
  ativo: "Bomba Centrífuga Bipartida",
  ativo_description:
    "Bomba que permite a passagem de água pelos canos do sistema de abastecimento de água.",
  id_alpha: "CMB-01/45543000",
  serial: "13324567",
  fabricante: "Aquamec",
  site: "3224",
  posicao: "Instalado no objeto CMB-45/678378900",
  status: "Em Operação",
  tombamento: "1862739898239012398",
  condicao: "Operacional",
};

function CreateQrCode() {
  // States do app
  const [imageUrl, setImageUrl] = useState("");
  const [form, setForm] = useState(initialState);

  // codigo responsavel por gerar o QR code a partir do dado passado para o input
  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(JSON.stringify(form));
      setImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleForm = (data, name) => {
    const { value } = data.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <CreateQRForm>
      <div className="container-imageqr">
        {imageUrl ? (
          <a href={imageUrl} download>
            <img src={imageUrl} alt="img" />
          </a>
        ) : null}
      </div>

      <TextField
        required
        id="outlined-textarea"
        label="Ativo"
        name="ativo"
        value={form.ativo}
        onChange={(e) => handleForm(e, "ativo")}
        variant="outlined"
      />
      <TextField
        required
        id="outlined-required"
        multiline
        label="Descrição do Ativo"
        nome="ativo_description"
        value={form.ativo_description}
        onChange={(e) => handleForm(e, "ativo_description")}
        variant="outlined"
      />
      <TextField
        required
        id="outlined-required"
        label="ID Alpha"
        nome="id_alpha"
        value={form.id_alpha}
        onChange={(e) => handleForm(e, "id_alpha")}
        variant="outlined"
      />
      <TextField
        required
        id="outlined-required"
        label="Serial"
        nome="serial"
        value={form.serial}
        onChange={(e) => handleForm(e, "serial")}
        variant="outlined"
      />
      <TextField
        required
        id="outlined-required"
        label="Fabricante"
        nome="fabricante"
        value={form.fabricante}
        onChange={(e) => handleForm(e, "fabricante")}
        variant="outlined"
      />
      <TextField
        required
        id="outlined-required"
        label="Site"
        nome="site"
        value={form.site}
        onChange={(e) => handleForm(e, "site")}
        variant="outlined"
      />
      <TextField
        required
        id="outlined-required"
        label="Posicao"
        nome="posicao"
        value={form.posicao}
        onChange={(e) => handleForm(e, "posicao")}
        variant="outlined"
      />
      <TextField
        required
        id="outlined-required"
        label="Status"
        nome="status"
        value={form.status}
        onChange={(e) => handleForm(e, "status")}
        variant="outlined"
      />
      <TextField
        required
        id="outlined-required"
        label="Tombamento"
        nome="tombamento"
        value={form.tombamento}
        onChange={(e) => handleForm(e, "tombamento")}
        variant="outlined"
      />
      <TextField
        required
        id="outlined-required"
        label="Condicao"
        nome="condicao"
        value={form.condicao}
        onChange={(e) => handleForm(e, "condicao")}
        variant="outlined"
      />

      <ButtonPrimary onClick={() => generateQrCode()}>
        Gerar QR CODE
      </ButtonPrimary>
    </CreateQRForm>
  );
}

export default CreateQrCode;
