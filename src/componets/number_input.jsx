const NumberInput = ({ label, value, miFuncion }) => {
  return (
    <label>
      <span>{label}</span>
      <input type="number" onChange={miFuncion} placeholder="Ingresar numero" />
    </label>
  );
};

export default NumberInput;


