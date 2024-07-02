import * as S from "./style";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  width: number;
  height: number;
  click: () => void;
}

const Button = ({ children, width, height, click }: ButtonProps) => {
  return (
    <>
      <S.Button
        style={{ width: `${width}%`, height: `${height}%` }}
        onClick={() => `${click()}`}
      >
        {children}
      </S.Button>
    </>
  );
};

export default Button;
