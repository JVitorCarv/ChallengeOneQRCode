import {
    TextField,
    Box,
  } from "@material-ui/core";

function Form () {
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
          label="Password"
          type="number"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </div>
    </Box>
    )
}

export default Form