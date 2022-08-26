import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { Menu, MenuItemProps } from "semantic-ui-react";

const Gnb: FC = () => {
  let activeItem;
  const router = useRouter();

  function goLink(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    data: MenuItemProps
  ) {
    // 2번째 인자로 받는 데이터는 name="home"
    /*active={activeItem === "home"}
    onClick = { goLink };*/ // 그래서 data.name으로 접근이 가능한거임 데이터의 네임을 가지고 각각의 위치로 router.push를 시켜줄거임
    // 참고로 router.push는 히스토리 스택에 url 쌓아감

    // 그럼 궁금한게 여기서 data의 타입도 정의를 해줘야하는걸로 알고 있는데
    if (data.name === "home") {
      router.push("/");
    } else if (data.name === "about") {
      router.push("/about");
      // next Link 나 a 태그를 사용하면 페이지가 그대로 있는 상태에서 안에 내용물만 바뀜
      // location 으로 이동할시에 페이지 전체가 새로고침되면서 화면을 다시 그림 그러면 요청이 늘어나게됨 자동으로
    }
  }

  return (
    <Menu inverted>
      <Menu.Item
        name="home" //
        active={activeItem === "home"}
        onClick={goLink}
        // a태그로 이동하는게 아니라 onClickd 이벤트로 이동하는 경우임
      />
      <Menu.Item
        name="about" //
        active={activeItem === "about"}
        onClick={goLink}
        // a태그로 이동하는게 아니라 onClickd 이벤트로 이동하는 경우임
      />
    </Menu>
  );
};

// next router 사용해서  gnb 활성화 시키기 페이지 이동

export default Gnb;
