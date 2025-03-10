import React from "react";
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  Checkbox,
} from "@material-ui/core";

function Mechanical({ form, setForm }) {
  const [state, setState] = React.useState({
    nivelSuccao: false,
    valvulaSuccao: false,
    valvulaRecalque: false,
    vibracaoAnormal: false,
    bombaTravada: false,
    barulhoAnormal: false,
    gaxetaVazamento: false,
  });

  const handleChange = (event) => {
    const obj = { ...state, [event.target.name]: event.target.checked };

    setState(obj);
    setForm({ ...form, natureForm: obj });
  };

  const {
    nivelSuccao,
    valvulaSuccao,
    valvulaRecalque,
    vibracaoAnormal,
    bombaTravada,
    barulhoAnormal,
    gaxetaVazamento,
  } = state;

  return (
    <div>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Selecione o que for verdadeiro</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={nivelSuccao}
                onChange={handleChange}
                name="nivelSuccao"
              />
            }
            label="O nível de succção está normal"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={valvulaSuccao}
                onChange={handleChange}
                name="valvulaSuccao"
              />
            }
            label="A válvula de sucção está aberta"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={valvulaRecalque}
                onChange={handleChange}
                name="valvulaRecalque"
              />
            }
            label="A válvula de recalque está aberta"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={vibracaoAnormal}
                onChange={handleChange}
                name="vibracaoAnormal"
              />
            }
            label="A vibração está anormal"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={bombaTravada}
                onChange={handleChange}
                name="bombaTravada"
              />
            }
            label="A bomba está travada"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={barulhoAnormal}
                onChange={handleChange}
                name="barulhoAnormal"
              />
            }
            label="Há um barulho anormal"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={gaxetaVazamento}
                onChange={handleChange}
                name="gaxetaVazamento"
              />
            }
            label="A gaxeta está com vazamento"
          />
        </FormGroup>
        <FormHelperText>Selecione o que for verdadeiro</FormHelperText>
      </FormControl>
    </div>
  );
}

export default Mechanical;
