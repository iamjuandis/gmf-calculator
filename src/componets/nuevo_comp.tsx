type ComponenteNombreProps = {
  urban: string;
};

const ComponenteNombre = ({ urban }: ComponenteNombreProps) => {
  return <h1>¨{urban}</h1>;
};

export default ComponenteNombre;

