import React from "react";
import { Icon } from "semantic-ui-react";

const Error404 = () => {
  return (
    <div style={{ padding: "200px 0 ", textAlign: "center", fontSize: 30 }}>
      <Icon name="warning circle" color="red" />
      404 : 페이지를 찾을 수 없습니다.
    </div>
  );
};

export default Error404;

// error페이지를 서버에서 제공하게되면 그만큼 비용도 많이 들고 사용자 입장에서 느리다고 느낄 수 있기때무넹
// next js에선 error 페이지를 스태틱하게 제공한다

// 404는 스태틱하게 보여주는거 더 좋기때문에 404tsx와 _error.tsx를 각각 만들어주는게 좋다
