import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
//  nextjs에서 제공하는 document를 커스터 마이징 할 수 있음
// document vs app
// app : app은 글로벌 css를 담당함, 레아이웃 잡음
//
// document : nextjs는 마크업 정의를 건너뛰기때문에 html head body 등의 태그를 만들어야될때는 이 파일을 필수적으로 사용해야함 수정시에도 필요
// document : 서버에서만 렌더링되고 onclick같은 이벤트 핸들러는 작동하지 않음 css도 사용안함
