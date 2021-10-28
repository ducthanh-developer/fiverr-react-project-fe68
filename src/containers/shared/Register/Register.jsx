import React from 'react'
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { useDispatch,useSelector  } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { actRegister } from './modules/action,';

export default function Register() {
    const dispatch = useDispatch();
    const { registerUser } = useSelector(
        state => state.registerReducer
      );
      console.log("useSelector",registerUser )
    const onFinish = values => {
        console.log('Received values of form: ', values);
        dispatch(actRegister(values))
    };
    return (
        <div>
            <Form
                name="normal_login"
                className="login-form"
                onFinish={onFinish}
                style={{ width: '500px' }}
                validateTrigger="onBlur"
            >
                <Form.Item
                    name="first_name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="first_name"
                    />
                </Form.Item>
                <Form.Item
                    name="last_name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="last_name"
                        placeholder="last_name"
                    />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="email"
                        placeholder="email"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item
                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]} >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="phone"
                        placeholder="phone"/>
                </Form.Item>
                {/* <Form.Item
                    name="skill"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]} >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="skill"
                        placeholder="skill"/>
                </Form.Item>
                <Form.Item
                    name="certification"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]} >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="certification"
                        placeholder="certification"/>
                </Form.Item>
                <Form.Item
                    name="birthday"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]} >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="birthday"
                        placeholder="birthday"/>
                </Form.Item> */}
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        Register
                    </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
            </Form>

        </div>
    )
}
