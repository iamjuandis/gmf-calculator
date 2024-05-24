import "./App.css";
import NumberInput from "./componets/number_input";
import Button from "./componets/button";
import { useState } from "react";
import Resultado from "./componets/resultado";

function App() {
  const userValue = 50000;
  const [value, setValue] = useState(0);
  const cambiarValor = (parametros) => {
    setValue(parametros.target.value);
  };
  const actionClicks = () => {
    console.log("click");
  };

  return (
    <div className="App">
      <Resultado valorResultado={userValue * 0.004} />
      <NumberInput
        label="Valor a transferir"
        value={userValue}
        miFuncion={cambiarValor}
      />

      <Button buttonText="Copiar" click={actionClicks} />

      <p>Valor GMF:{userValue * 0.004}</p>
    </div>
  );
}

export default App;
