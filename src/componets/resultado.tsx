import Button from "./button";

type ResultadoProps = {
  valorResultado: number | string;
  label: string;
};

const Resultado = ({ valorResultado, label }: ResultadoProps) => {
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

