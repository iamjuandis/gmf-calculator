const NumberInput = ({ label, value, miFuncion }) => {
  return (
    <label>
      <span>{label}</span>
      <input type="text" onChange={miFuncion} placeholder="Ingresar valor" />
    </label>
  );
};

export default NumberInput;
