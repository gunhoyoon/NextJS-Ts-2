import React, { FC } from "react";

interface Props {
  onChange: Function;
}

const Input: FC<Props> = ({ onChange }) => {
  const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange(value);
  };

  return <input></input>;
};

// export default Input;

// import React, { FC, useRef } from "react";

// interface Props {
//   style: object;
//   isFocus: boolean;
//   isFocusFuction: Function;
//   isNotFocusFuction: Function;
//   placeholder: string;
//   value: string;
//   onChange: Function;
//   text: string;
// }

// //인풋 커스터마이징
// //focus
// //focusOut
// //inputValue
// //placeholder
// //style

// const input: FC<Props> = ({
//   style,
//   isFocus,
//   isFocusFuction,
//   isNotFocusFuction,
//   placeholder,
//   value,
//   onChange,
//   text,
// }) => {
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     onChange(e.target.value);
//   };

//   return (
//     <>
//       <form>
//         {isFocus ? isFocusFuction() : isNotFocusFuction()}
//         <input
//           type={text}
//           style={style}
//           value={value}
//           placeholder={placeholder}
//           onChange={handleInputChange}
//         ></input>
//       </form>
//     </>
//   );
// };

// export default input;
