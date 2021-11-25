import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actRegister } from './modules/action,';
import {
    Form,
    Input,
    DatePicker,
    Switch,
} from 'antd';
import "../Register/Register.scss"
export default function Register(props) {
    const dispatch = useDispatch();
    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const onFinish = values => {
        console.log('Received values of form: ', values);
        dispatch(actRegister(values));

    };
    return (
        <div className="register" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div className="register__content">
                <Form
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    layout="horizontal"
                    initialValues={{
                        size: componentSize,
                    }}
                    onFinish={onFinish}

                    scrollToFirstError
                    onValuesChange={onFormLayoutChange}
                    size={componentSize}
                    validateTrigger="onBlur">
                    <Form.Item label=" first_name" style={{ marginTop: "80px" }} name="first_name"
                        rules={[{ required: true, message: 'Please input your fist-name', whitespace: true }]}>
                        <Input name="first_name" />
                    </Form.Item >
                    <Form.Item label=" last_name" name="last-name" rules={[{ required: true, message: 'Please input your last-name', whitespace: true }]} >
                        <Input name="last_name" />
                    </Form.Item>
                    <Form.Item label="email" name="email" rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}>
                        <Input name="email" />
                    </Form.Item>
                    <Form.Item label="password" name="password" rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                        hasFeedback >
                        <Input.Password name="password" />
                    </Form.Item>
                    <Form.Item label="phone" name="phone" rules={[{ required: true, message: 'Please input your phone number!' }]} >
                        <Input name="phone" />
                    </Form.Item>
                    <Form.Item label="skill" name="skill" rules={[{ required: true, message: 'Please input your skill', whitespace: true }]}>
                        <Input name="skill" />
                    </Form.Item>
                    <Form.Item label="type" name="type" rules={[{ required: true, message: 'Please input your type', whitespace: true }]}  >
                        <Input name="type" />
                    </Form.Item>
                    <Form.Item label="certification" name="certification" rules={[{ required: true, message: 'Please input your skill', whitespace: true }]} >
                        <Input name="certification" />
                    </Form.Item>
                    <Form.Item label="birthday" name="birthday" >
                        <DatePicker format="DD/MM/YYYY" />
                    </Form.Item>
                    <Form.Item label=" gender " name=" gender">
                        <Switch name="gender" />
                    </Form.Item>
                    <Form.Item >
                        <button type="submit" className="btn btn-default btn-register" zvalue=""> Register</button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
