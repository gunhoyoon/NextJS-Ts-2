import Axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { Button, Divider, Form } from "semantic-ui-react";

const Login = () => {
  const router = useRouter();
  function login() {
    Axios.post("/api/login").then((res) => {
      if (res.status === 200) {
        // 로그인 성공임 admin페이지로 보내주겠음
        router.push("/admin");
      }
    });
  }
  return (
    <div style={{ padding: "100px 0", textAlign: "center" }}>
      <Form>
        <Form.Field inline>
          <input placeholder="ID" />
        </Form.Field>
        <Form.Field inline>
          <input type="password" placeholder="Password" />
        </Form.Field>
        <Button style={{ color: "blue", marginTop: 30 }} onClick={login}>
          Login
        </Button>
      </Form>

      <Divider />
    </div>
  );
};

export default Login;
