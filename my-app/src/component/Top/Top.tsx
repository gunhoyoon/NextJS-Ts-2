import Link from "next/link";
import React from "react";

import { Header } from "semantic-ui-react";
import Gnb from "../Gnb/Gnb";

const Top = () => {
  return (
    <div>
      <Link href="/">
        <a>
          <div style={{ display: "flex", paddingTop: 10 }}>
            <div style={{ flex: "100px 0 0" }}>
              {/* 3개 쓸 경우 : 상 100px 좌우 0 하 0  */}
              <img
                src="/images/ably_img.jpeg"
                //이미지는 슬레시 이미지는 바로 접근 /로 바로접근
                alt="logo"
                style={{ display: "block", width: 80 }}
              />
            </div>
            <Header as="h1">Home | 코딩건호</Header>
          </div>
        </a>
      </Link>
      <Gnb />
    </div>
  );
};

export default Top;
