import React from "react";
import { TextField, MenuItem } from "@material-ui/core";
import Electric from "./Electric";
import Mechanical from "./Mechanical";
import Unidentified from "./Unidentified";
import { StyledForm } from "../styles";

function Form({ form, setForm }) {
  const naturezas = [
    {
      value: 1,
      label: "Elétrico",
    },
    {
      value: 2,
      label: "Mecânico",
    },
    {
      value: 3,
      label: "Não identificada",
    },
  ];

  const handleChange = (event, attr) => {
    setForm({ ...form, [attr]: event.target.value });
  };

  const handleNature = () => {
    switch (form.nature) {
      case 1:
        return <Electric setForm={setForm} form={form} />;
      case 2:
        return <Mechanical setForm={setForm} form={form} />;
      default:
        return <Unidentified setForm={setForm} form={form} />;
    }
  };

  return (
    <StyledForm>
      <TextField
        required
        id="outlined-textarea"
        label="ID Alpha"
        name="id_alpha"
        value={form.id_alpha}
        variant="outlined"
        disabled
      />
      <h1>Preencha os dados para solicitar o PM:</h1>

      <TextField
        required
        id="outlined-textarea"
        label="Unidade Operacional"
        value={form.unidadeOperacional}
        onChange={(e) => handleChange(e, "unidadeOperacional")}
        variant="outlined"
      />
      <TextField
        required
        id="outlined-textarea"
        label="Descrição do problema"
        multiline
        maxRows={4}
        value={form.problemDescription}
        onChange={(e) => handleChange(e, "problemDescription")}
        variant="outlined"
      />

      <TextField
        id="outlined-select-natureza"
        select
        label="Natureza do problema"
        value={form.nature}
        onChange={(e) => handleChange(e, "nature")}
        helperText="Selecione a natureza do problema"
        variant="outlined"
      >
        {naturezas.map((tipo) => (
          <MenuItem key={tipo.value} value={tipo.value}>
            {tipo.label}
          </MenuItem>
        ))}
      </TextField>

      {form.nature && handleNature()}
    </StyledForm>
  );
}

export default Form;
