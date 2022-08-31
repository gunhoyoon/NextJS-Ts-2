import React, { FC } from "react";

interface Props {
  onChange: Function;
  text?: string;
  placeholder?: string;
  style?: string;
  // type :
}

const Input: FC<Props> = ({ onChange }) => {
  const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //  const { isFocus,placeholder,value,text, onChange } = e.target;
    // onChange(value);
  };

  return <input></input>;
};
// Input을 사용한다면 필요한것도 있고, 그 Input을 구성하는 애들의 타입, 함수, 그런걸 생각하면서 구조적으로 접근해보자.
export default Input;
