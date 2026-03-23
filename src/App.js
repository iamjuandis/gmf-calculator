import "./App.css";
import NumberInput from "./componets/number_input";
import Button from "./componets/button";
import { useState } from "react";
import Resultado from "./componets/resultado";

function App() {
  const [value, setValue] = useState(0);

  const cambiarValor = (parametros) => {
    setValue(parametros.target.value);
  };

  return (
    <div className="App">
      <NumberInput
        label="Valor a transferir"
        value={value}
        miFuncion={cambiarValor}
      />

      <Resultado valorResultado={value * 0.004} label="Resultado" />
    </div>
  );
}

export default App;
