import { NextApiRequest, NextApiResponse } from "next";
import React from "react";

export default (req: NextApiRequest, res: NextApiResponse) => {
  {
    res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=0;HttpOnly,Secure");
    // Max-Age=0 이므로 쿠키가 즉시 소멸된다

    res.statusCode === 200;
    res.json({ message: "ok" });
  }
};
