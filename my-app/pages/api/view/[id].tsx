import { NextApiRequest, NextApiResponse } from "next";
import { type } from "os";
import React from "react";

// 전에 isLogin 같은 정적인 페이지를 만들었다면 이번엔 api > view > [id].tsx 처럼 다이나믹하게 api를 만드는것도 가능함
// id는 request.query.id 로 들어가있음
// http://localhost:3000/api/view/[id] id에 내가 임의로 id값을 넣어주면 다 글로 이동하는거임 다이나믹 api니까

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode === 200, res.json({ id: req.query.id });
};
