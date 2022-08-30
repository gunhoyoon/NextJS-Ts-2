import React, { FC } from "react";

//외부함수

// <app>
//     const text ="더보기"
//     function onClick (){
//         console.log("clicked!")
//     }
//     < Button text={text} onClick={onClick}>< Button/>
// </app>

interface Props {
  text: string;
  onClick: Function; //안녕하세요 저는 프롭스로 넘겨진 외부함수입니다
  style: object;
}

//내부함수
const Button: FC<Props> = ({ onClick, text }) => {
  // 안녕하세요 저는 clickHandler라고합니다 저는 Button컴포넌트 안에있는 내부함수예요
  const clickHandler = () => {
    onClick();
  };
  return (
    <div>
      <button onClick={clickHandler}>{text}</button>
    </div>
  );
};

export default Button;

// import Link from "next/link";
// import React, { FC } from "react";

// interface Props {
//   text: string; //버튼 텍스트
//   style: object; //스타일 오브젝트
//   clickFunction?: React.MouseEventHandler<HTMLButtonElement>;
//   children?: React.ReactNode; // 자식노드 옵셔널

//   className?: string; //css
//   href: string; // 이동할주소 next/link
//   isLoginCheck?: boolean;
//   isLoginFuction: Function;
//   isNotLoginFuction: Function; //
// }

// const button: FC<Props> = ({
//   text,
//   style,
//   clickFunction,
//   href = "/", //기본 base URl
//   className,
//   children,
//   isLoginCheck, //불리언값
//   isLoginFuction, //조건부 호출도 가능한듯?
//   isNotLoginFuction,
// }) => {
//   const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//     if (clickFunction) {
//       clickFunction(e);
//     }
//   };
//   return (
//     <Link href={href}>
//       <a>
//         <button
//           style={style ? style : {}}
//           onClick={clickHandler}
//           className={className}
//         >
//           {text}
//         </button>
//         {isLoginCheck ? isLoginFuction() : isNotLoginFuction()}
//       </a>
//     </Link>
//   );
// };

// export default button;
