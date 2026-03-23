import type { MouseEventHandler } from "react";

type ButtonProps = {
  buttonText: string;
  click?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ buttonText, click }: ButtonProps) => {
  return (
    <button type="button" onClick={click}>
      {buttonText}
    </button>
  );
};

export default Button;

