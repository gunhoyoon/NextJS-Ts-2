import { NextApiRequest, NextApiResponse } from "next";
import React from "react";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json({ name: req.cookies.a_name });
  // a_name=Mike;Max-Age=3600;HttpOnly,Secure 쿠키 설정 a_name 에 Mike가 들어와야됨
  // 로그인 버튼 누르니까 admin 페이지로 보내짐 무조건 성공하게 만들었고, 성공시에 name : Mike까지 넣어서 나와야되는데
  // 잘 들어감
};
