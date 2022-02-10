import React from "react";
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";

function Electric({ form, setForm }) {
  const [state, setState] = React.useState({
    faltaEnergia: false,
    chaveFusivel: false,
    tensaoNormal: false,
    cheiroQueimado: false,
  });

  const handleChange = (event) => {
    const obj = { ...state, [event.target.name]: event.target.checked };

    setState(obj);
    setForm({ ...form, natureForm: obj });
  };

  const { faltaEnergia, chaveFusivel, tensaoNormal, cheiroQueimado } = state;

  return (
    <div>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Selecione o que for Verdadeiro</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={faltaEnergia}
                onChange={handleChange}
                name="faltaEnergia"
              />
            }
            label="Há falta de energia na vizinhança"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={chaveFusivel}
                onChange={handleChange}
                name="chaveFusivel"
              />
            }
            label="Chave fusível (canela, banana) aberta"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={tensaoNormal}
                onChange={handleChange}
                name="tensaoNormal"
              />
            }
            label="Tensão da unidade normal"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={cheiroQueimado}
                onChange={handleChange}
                name="cheiroQueimado"
              />
            }
            label="Cheiro de queimado"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default Electric;
