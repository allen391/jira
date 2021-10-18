import React, { FormEvent, useEffect, useState } from "react";
import { useAuth } from "context/auth-context";
import { Form, Input, Button } from "antd";
import { LongButton } from "./index";

const LoginScreen = () => {
  const { login } = useAuth();
  const handleSubmit = (values: { username: string; password: string }) => {
    login(values);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder={"username"} type="text" id={"username"} />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input placeholder={"password"} type="password" id={"password"} />
      </Form.Item>
      <Form.Item>
        <LongButton htmlType={"submit"} type={"primary"}>
          Login
        </LongButton>
      </Form.Item>
    </Form>
  );
};

export default LoginScreen;
