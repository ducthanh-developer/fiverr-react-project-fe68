import React, { useState } from 'react';
import { useFormik } from 'formik';
import moment from 'moment'; import { useDispatch } from 'react-redux';
import { actRegister } from './modules/action,';
import {
    Form,
    Input,
    DatePicker,
    Switch,
} from 'antd';

export default function Register(props) {
    const dispatch = useDispatch();
    // const { registerUser } = useSelector(
    //     state => state.registerReducer
    // );
    // console.log("registerUser", registerUser)
    const [componentSize, setComponentSize] = useState('default');

    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            phone: '',
            skill: [],
            certification: [],
            birthday: '',
            gender: true,
            type: '',
        },
        onSubmit: (value) => {
            console.log("values", value);
            dispatch(actRegister(value));
        }
    })

    const handleChangeDatePicker = (value) => {
        let birthday = moment(value).format('YYYY/MM/DD')
        console.log(birthday);
        formik.setFieldValue('birthday', birthday)
    }

    const handleChangeSwitch = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        }
    }

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    return (
        <div>
            
            <Form
                onSubmitCapture={formik.handleSubmit}
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
                onValuesChange={onFormLayoutChange}
                size={componentSize}>
                <Form.Item label=" first_name" style={{ marginTop: "80px" }} >
                    <Input name="first_name" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label=" last_name" >
                    <Input name="last_name" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="email">
                    <Input name="email" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="password" >
                    <Input name="password" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="phone" >
                    <Input name="phone" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="skill" >
                    <Input name="skill" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="type" >
                    <Input name="type" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="certification" >
                    <Input name="certification" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="birthday">
                    <DatePicker format="DD/MM/YYYY" onChange={handleChangeDatePicker} />
                </Form.Item>
                <Form.Item label=" gender ">
                    <Switch name="gender" onChange={handleChangeSwitch('gender')} />
                </Form.Item>
                <Form.Item label="Tac vụ">
                    <button type="submit" className="btn btn-default" value=""> Thêm</button>
                </Form.Item>
            </Form>
        </div>
    )
}
