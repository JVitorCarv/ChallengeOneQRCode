import React, { useState } from "react";
import {
  Card,
  CardContent,
  makeStyles,
  TextField,
  Button,
} from "@material-ui/core";
import QRCode from "qrcode";

function CreateQrCode() {
  // States do app
  const [imageUrl, setImageUrl] = useState("");

  const [nomeAtivo, setNomeAtivo] = useState("");
  const [tombamento, setTombamento] = useState("");
  const [unidade, setUnidade] = useState("");
  const [setor, setSetor] = useState("");

  const classes = useStyles();

  // codigo responsavel por gerar o QR code a partir do dado passado para o input
  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL('"{\\"tombamento\\":' + parseInt(tombamento) + ',\\"unidade\\":\\"' + unidade + '\\",\\"setor\\":\\"' + setor + '\\",\\"ativo\\":\\"' + nomeAtivo + '\\"}"');
      setImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card>
      <CardContent>

{/****************************************************************************************************/}

        <TextField
          required
          id="outlined-textarea"
          label="Descrição do ativo"
          placeholder="Escreva aqui..."
          multiline
          // value={form.problemDescription}
          onChange={(e) => setNomeAtivo(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="ID Alpha"
          placeholder="Escreva aqui..."
          // value={form.operatorName}
          onChange={(e) => setTombamento(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Unidade do ativo"
          placeholder="Escreva aqui..."
          // value={form.operatorPhone}
          onChange={(e) => setUnidade(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Setor do ativo"
          placeholder="Escreva aqui..."
          // value={form.nature}
          onChange={(e) => setSetor(e.target.value)}
        ></TextField>

{/****************************************************************************************************/}

        <Button
          className={classes.btn}
          variant="contained"
          color="primary"
          onClick={() => generateQrCode()}
        >
          Gerar
        </Button>
        <br />
        <br />
        <br />
        {imageUrl ? (
          <a href={imageUrl} download>
            <img src={imageUrl} alt="img" />
          </a>
        ) : null}
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
export default CreateQrCode;
