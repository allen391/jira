import React, { FormEvent, useEffect } from "react";
import { useAuth } from "context/auth-context";
import { Button, Form, Input } from "antd";
import { LongButton } from "./index";

const RegisterScreen = () => {
  const { register } = useAuth();
  const handleSubmit = (values: { username: string; password: string }) => {
    register(values);
  };
  return (
    // onFinish相等于onClick
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
          Register
        </LongButton>
      </Form.Item>
    </Form>
  );
};

export default RegisterScreen;
