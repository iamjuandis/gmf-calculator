import Button from "./button";

const Resultado = ({ valorResultado, label }) => {
  return (
    <div>
      <Button buttonText="Copiar" />
      <span>{valorResultado}</span>
      <p>
        <span>{label}</span>
      </p>
    </div>
  );
};

export default Resultado;
