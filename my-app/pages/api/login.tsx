import { NextApiRequest, NextApiResponse } from "next";
import React from "react";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=3600;HttpOnly,Secure");
    // res.setHeader('content-type', 'application/json') (single field is set 단일 필드설정) ?? nodejs에서 그렇다는데 여기선 잘 모르겠음
    // Max-Age=3600 은 쿠키 소멸 시간정도 되는거 같음 얼마나 이 로그인 상태와 데이터를 기억하고 있나 정도?

    res.statusCode === 200;
    res.json({ message: "ok" });
  }
};
