import React from "react";
import { Container, makeStyles, Card, CardContent } from "@material-ui/core";

//################################# APP ####################################
function App() {
  const classes = useStyles();

  return (
    <Container className={classes.conatiner}>
      <Card>
        <CardContent>
          <h3>Pedido de Manutenção enviado com sucesso!</h3>
        </CardContent>
      </Card>
    </Container>
  );
}

// Criação de um estilo customizado
const useStyles = makeStyles((theme) => ({
  container: {
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
export default App;
