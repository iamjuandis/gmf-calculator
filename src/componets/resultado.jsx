import Button from "./button";

const Resultado = ({ valorResultado, label }) => {
  return (
    <div>
      <Button buttonText="Copiar" />
      <p>
        <span>{label}</span>
      </p>
      <span>${valorResultado}</span>
    </div>
  );
};

export default Resultado;
