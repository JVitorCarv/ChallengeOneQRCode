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
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const classes = useStyles();

  // codigo responsavel por gerar o QR code a partir do dado passado para o input
  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(text);
      setImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card>
      <CardContent>
        <TextField
          label="Enter Text Here"
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          className={classes.btn}
          variant="contained"
          color="primary"
          onClick={() => generateQrCode()}
        >
          Generate
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
