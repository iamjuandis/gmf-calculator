import "./App.css";
import NumberInput from "./componets/number_input";

function App() {
  var inputUsuario = 200000;

  // Función que se ejecuta cuando cambia el valor en el input de NumberInput
  const cambiarValor = (parametros) => {
    console.log(parametros.target.value);
  };

  return (
    <div className="App">
      <NumberInput
        label="Valor a transferir"
        value={inputUsuario}
        miFuncion={cambiarValor}
      />
      <p>GMF:{inputUsuario * 0.04}</p>
    </div>
  );
}

export default App;

/*
RETO PRÓXIMA SESIÓN:
1. Aprender sobre React Hooks: 
  - Cómo funciona y cómo usar useState: https://react.dev/reference/react/useEffect
  - Cómo funciona y cómo usar useEffect

2. Aplicar useState y useEffect en este ejercicio.

*/
