import { Row, Form, Input, Button } from 'antd';
import { useState } from 'react';

import 'antd/dist/antd.css';
import './sign-in.css';

import logo from '../../assets/img/logo.svg';
import { useAuth } from '../../hooks/useAuth';

const { Item } = Form;

export const SignIn = () => {
  const [setToken] = useAuth(true);
  const [error, setError] = useState(null);

  const handleLogin = async (evt) => {
    const res = await fetch(process.env.REACT_APP_API + '/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(evt),
    });

    if (res.ok) {
      const token = await res.json();

      return setToken(token);
    }

    setError(true);
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{ flexDirection: 'column', height: '100vh' }}
    >
      <a className="sing-in__logo-link" href="/">
        <img
          className="sing-in__logo-img"
          src={logo}
          alt="site logo"
          width={209}
          height={58}
        />
      </a>

      <h1 className="sing-in__login-title">Login</h1>

      <Form onFinish={handleLogin}>
        <Item
          name="email"
          rules={[
            { type: 'email', message: 'The input is not valid E-mail!' },
            { required: true, message: 'Please input your E-mail!' },
          ]}
        >
          <Input
            status={error && 'error'}
            className="input-place sing-in__input-email"
            placeholder="Login"
          />
        </Item>
        <Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password
            status={error && 'error'}
            className="input-place sing-in__input-password"
            placeholder="Password"
          />
        </Item>
        <Item
          wrapperCol={{
            offset: 0,
            span: 16,
          }}
        >
          <Button
            className="sing-in__login-btn"
            block
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Item>
      </Form>
    </Row>
  );
};
