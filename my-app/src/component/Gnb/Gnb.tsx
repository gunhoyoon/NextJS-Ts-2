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
    } else if (data.name === "admin") {
      router.push("/admin");
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
      <Menu.Item
        name="admin" //
        active={activeItem === "admin"}
        onClick={() => {
          router.push("/admin ");
        }}
        // a태그로 이동하는게 아니라 onClickd 이벤트로 이동하는 경우임
      />
    </Menu>
  );
};

// next router 사용해서  gnb 활성화 시키기 페이지 이동

export default Gnb;
