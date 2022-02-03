import React, { useState } from "react";
import { TextField, Box, MenuItem } from "@material-ui/core";
import Electric from "./Electric";
import Mechanical from "./Mechanical";
import Unidentified from "./Unidentified";

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
        return <Electric />;
      case 2:
        return <Mechanical />;
      default:
        return <Unidentified />;
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-textarea"
          label="Descrição do problema"
          placeholder="Escreva aqui..."
          multiline
          value={form.problemDescription}
          onChange={(e) => handleChange(e, "problemDescription")}
        />
        <TextField
          required
          id="outlined-required"
          label="Seu nome"
          placeholder="Insira seu nome..."
          value={form.operatorName}
          onChange={(e) => handleChange(e, "operatorName")}
        />
        <TextField
          required
          id="outlined-password-input"
          label="Escreva seu telefone"
          value={form.operatorPhone}
          onChange={(e) => handleChange(e, "operatorPhone")}
        />
        <TextField
          id="outlined-select-natureza"
          select
          label="Natureza do problema"
          value={form.nature}
          onChange={(e) => handleChange(e, "nature")}
          helperText="Selecione a natureza do problema"
        >
          {naturezas.map((tipo) => (
            <MenuItem key={tipo.value} value={tipo.value}>
              {tipo.label}
            </MenuItem>
          ))}
        </TextField>

        {form.nature && handleNature()}
      </div>
    </Box>
  );
}

export default Form;
