import React from "react";
import { TextField, Button } from "@material-ui/core";

function Unidentified({ form, setForm }) {
  const [state, setState] = React.useState({
    description: "",
  });

  const handleChange = (event) => {
    const obj = { ...state, description: event.target.value };

    setState(obj);
    setForm({ ...form, natureForm: obj });
  };

  return (
    <div>
      <TextField
        id="outlined-textarea"
        label="Descrição adicional"
        placeholder="Escreva aqui..."
        multiline
        value={state.description}
        onChange={handleChange}
      />
      <p>Caso sinta necessidade, entre em contato com o CCO:</p>
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
