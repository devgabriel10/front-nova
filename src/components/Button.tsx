import { ButtonHTMLAttributes } from 'react';


function Input({ ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...rest}>
    </button>
  );
}

export default Input;
