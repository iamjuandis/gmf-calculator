const NumberInput = ({ label, value, miFuncion }) => {
  return (
    <div>
      {label}-
      <input type="text" onChange={miFuncion} />
    </div>
  );
};


export default NumberInput;