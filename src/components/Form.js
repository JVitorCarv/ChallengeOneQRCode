import React, { useState } from "react";

import {
    TextField,
    Box,
    MenuItem,
  } from "@material-ui/core";

function Form () {
    
    const naturezas = [
        {
          value: 'Electric',
          label: 'Elétrico',
        },
        {
          value: 'Mechanical',
          label: 'Mecânico',
        },
        {
          value: 'Unidentified',
          label: 'Não identificado',
        },
      ];

    const [natureza, setNatureza] = useState('');
      
    const handleChange = (event) => {
        setNatureza(event.target.value);
    };
    
    
    return (
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
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
        />
        <TextField
          required
          id="outlined-required"
          label="Seu nome"
          placeholder="Insira seu nome..."
        />
        <TextField
          required
          id="outlined-password-input"
          label="Escreva seu número"
          type="number"
        />
        <TextField
          id="outlined-select-natureza"
          select
          label="Natureza do problema"
          value={natureza}
          onChange={handleChange}
          helperText="Selecione a natureza do problema"
        >
          {naturezas.map((tipo) => (
            <MenuItem key={tipo.value} value={tipo.value}>
              {tipo.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
    )
}

export default Form