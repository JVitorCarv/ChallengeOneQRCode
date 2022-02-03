import React from "react";
import {
  Box,
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  Checkbox,
} from "@material-ui/core";

function Electric() {
  const [state, setState] = React.useState({
    faltaEnergia: false,
    chaveFusivel: false,
    tensaoNormal: false,
    cheiroQueimado: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { faltaEnergia, chaveFusivel, tensaoNormal, cheiroQueimado } = state;

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel component="legend">Marque as caixas</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={faltaEnergia}
                  onChange={handleChange}
                  name="faltaEnergia"
                />
              }
              label="Há falta de energia na vizinhança?"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={chaveFusivel}
                  onChange={handleChange}
                  name="chaveFusivel"
                />
              }
              label="Chave fusível (canela, banana) aberta?"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={tensaoNormal}
                  onChange={handleChange}
                  name="tensaoNormal"
                />
              }
              label="Tensão da unidade normal?"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={cheiroQueimado}
                  onChange={handleChange}
                  name="cheiroQueimado"
                />
              }
              label="Cheiro de queimado?"
            />
          </FormGroup>
          <FormHelperText>
            Marque as caixas de acordo com os problemas identificados
          </FormHelperText>
        </FormControl>
      </Box>
    </div>
  );
}

export default Electric;
