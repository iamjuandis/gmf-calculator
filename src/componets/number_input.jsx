const NumberInput = ({ label, value }) => {
  return (
    <div>
      {label}-
      <input type="text" value={value} />
    </div>
  );
};
