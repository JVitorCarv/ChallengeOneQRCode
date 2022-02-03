import React from "react";
import { TextField, Button } from "@material-ui/core";

function Unidentified() {
  return (
    <div>
      <TextField
        id="outlined-textarea"
        label="Descrição adicional"
        placeholder="Escreva aqui..."
        multiline
      />
      <p>Caso sinta necessidade, entre em contato com um CCO:</p>
      <Button
        variant="contained"
        href="https://servicos.compesa.com.br"
        target="_blank"
      >
        Entrar em contato com CCO
      </Button>
    </div>
  );
}

export default Unidentified;
