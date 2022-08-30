import Axios from "axios";
import router from "next/router";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";

export default function Admin() {
  const [isLogin, setIsLogin] = useState(false);
  function checkLogin() {
    Axios.get("/api/isLogin").then((res) => {
      // axios.get으로 아까 만든 api로 로그인 됐는지 판단해서 state가 200이고 data에 name이 있다면 으로 로그인 상태 확인
      if (res.status === 200 && res.data.name) {
        // 로그인
        setIsLogin(true);
      } else {
        //  로그인 안됨 로그인창으로 보내줌
        router.push("/login");
        // Admin(관리페이지)에 들어오면 useEffect 통헤서 checkLogin 실행하고 api가져와서 if문 조건 비교해서 false나오면
        // router.push로 로그인 페이지로 보내주는거임
      }
    });
  }
  function logout() {
    Axios.get("/api/logout").then((res) => {
      // 이번엔 로그아웃 api를 가져와서 상태가 200이라면 홈페이지로 보내준다
      if (res.status === 200) {
        router.push("/");
      }
    });
  }
  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <>
      admin
      {isLogin && <Button onClick={logout}>Logout</Button>}
    </>
  );
  //실제 admin 페이지가 보여주는건 얘뿐임
}

// admin 으로 들어오면 최초 처음 그려질때 useEffect에 의해서 checkLogin > isLogin으로 로그인 여부를 판별함 a_nameCookie가 있는지 확인함
// 확인해서 로그인이 안됐다면 login페이지로 보내줌
// login페이지에서는 login Api쪽으로 POST(생성) 콜을 날림
// login Api에서 a_name Cookie 생성함
// 할게 다 끝나면 admin에 만들어놓은 logout버튼 클릭해서 쿠키 삭제함 , 삭제 성공 응답이 오면 첫 화면으로 다시 보내줌

// 로그인이 안돼있으면 로그인 페이지로 보내줌
