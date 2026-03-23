import type { ChangeEventHandler } from "react";

type NumberInputProps = {
  label: string;
  value: number | string;
  miFuncion: ChangeEventHandler<HTMLInputElement>;
};

const NumberInput = ({ label, value: _value, miFuncion }: NumberInputProps) => {
  return (
    <label>
      <span>{label}</span>
      <input
        type="number"
        onChange={miFuncion}
        placeholder="Ingresar numero"
        max={99999999999}
      />
    </label>
  );
};

export default NumberInput;

