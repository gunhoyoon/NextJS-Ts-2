import React from "react";
import { Header } from "semantic-ui-react";
import Gnb from "../Gnb/Gnb";

const Top = () => {
  return (
    <div>
      <div style={{ display: "flex", paddingTop: 20 }}>
        <div style={{ flex: "100px 0 0" }}>
          {/* 3개 쓸 경우 : 상 100px 좌우 0 하 0  */}
          <img
            src="./images/ably_img.jpeg"
            alt="logo"
            style={{ display: "block", width: 80 }}
          />
        </div>
        <Header as="h1">Home | 코딩건호</Header>
      </div>
      <Gnb />
    </div>
  );
};

export default Top;
