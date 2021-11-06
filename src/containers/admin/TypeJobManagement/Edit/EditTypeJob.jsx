import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
    Form,
    Input,
    Switch,
} from 'antd';
import { useFormik } from 'formik';
import { actDetailTypeJob, actEditTypeJob } from '../modules/action';

export default function EditTypeJob(props) {
    console.log("props", props);
    const dispatch = useDispatch();
    const { detailTypeJob } = useSelector(state => state.typeJobsReducer)
    console.log("detailTypeJob, ", detailTypeJob);
    useEffect(() => {
      dispatch(actDetailTypeJob(props.match.params.typeId));
    }, [dispatch]);    
    const [componentSize, setComponentSize] = useState('default');
    console.log('hello ');
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            _id: detailTypeJob?._id,
            name: detailTypeJob?.name,
            subTypeJobs: detailTypeJob?.subTypeJobs,
            status: detailTypeJob?.status,
        },
        onSubmit: (values) => {
            console.log(values);
            dispatch(actEditTypeJob(values))
        }
    })

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
            <div className="">
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
                    <Form.Item label=" name" style={{ marginTop: "80px" }} value={formik.values.name} >
                        <Input name="name" onChange={formik.handleChange} />
                    </Form.Item>
                    <Form.Item label=" subTypeJobs" >
                        <Input name="subTypeJobs" onChange={formik.handleChange} value={formik.values.subTypeJobs} />
                    </Form.Item>
                    <Form.Item label=" status ">
                        <Switch name="status" onChange={handleChangeSwitch('status')} value={formik.values.status}  />
                    </Form.Item>
                    <Form.Item label="Tac vụ">
                        <button type="submit" className="btn btn-default" value=""> Thêm</button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
