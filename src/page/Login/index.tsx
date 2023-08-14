import React, { FunctionComponent, useCallback } from "react";
import { Form, Input, Button } from 'antd';
import './index.css';
import { submitUser } from "../../service";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../store/user";
import { useDispatch } from "react-redux";

const { Item } = Form;

interface LoginPrpos { }

const Login: FunctionComponent<LoginPrpos> = () => {
  const navigete = useNavigate();
  const dispatch = useDispatch();
  const onFinish = useCallback((e: { user: string }) => {
    dispatch(setUser(e.user))
    submitUser(e)
      .then(res => {
        navigete('/home')
      })
  }, [navigete, dispatch])
  return (
    <div className="login-wrap">
      <Form onFinish={onFinish}>
        <Item name="user" label="user">
          <Input />
        </Item>
        <Button htmlType="submit" type="primary">提交</Button>
      </Form>
    </div>
  )
};

export { Login };