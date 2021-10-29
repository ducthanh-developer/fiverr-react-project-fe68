import React from 'react'
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { actRegister } from './modules/action,';

export default function Register(props) {
    const dispatch = useDispatch();
    const { registerUser } = useSelector(
        state => state.registerReducer
    );
    console.log("registerUser", registerUser)

    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            phone: '',
            skill: '',
            certification: '',
            birthday: '',
            gender: '',
            type: '',
        },
        onSubmit: (values) => {
            console.log("values", values);
            dispatch(actRegister(values));
        }
    })
    return (
        <div>
            <div className="login-wrapper my-auto">
                <h1 className="login-title">Đăng Ký</h1>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <label>first_name</label>
                        <input
                            type="text"
                            name="first_name"
                            onChange={formik.handleChange}
                            className="form-control"
                            placeholder="Nhập vào first_name"
                            required
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label>last_name</label>
                        <input
                            type="text"
                            name="last_name"
                            className="form-control"
                            placeholder="Nhập vào last_name"
                            onChange={formik.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label>email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Nhập vào email"
                            onChange={formik.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label>password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Nhập vào password"
                            onChange={formik.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label>Số điện thoại</label>
                        <input
                            type="text"
                            name="phone"
                            className="form-control"
                            placeholder="Nhập vào số điện thoại"
                            onChange={formik.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label>skill</label>
                        <input
                            type="text"
                            name="skill"
                            className="form-control"
                            placeholder="Nhập skill"
                            onChange={formik.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label>certification</label>
                        <input
                            type="text"
                            name="certification"
                            className="form-control"
                            placeholder="Nhập certification"
                            onChange={formik.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label>birthday</label>
                        <input
                            type="text"
                            name="birthday"
                            className="form-control"
                            placeholder="Nhập birthday"
                            onChange={formik.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label>gender</label>
                        <input
                            type="text"
                            name="gender"
                            className="form-control"
                            placeholder="Nhập gender"
                            onChange={formik.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label>type</label>
                        <input
                            type="text"
                            name="type"
                            className="form-control"
                            placeholder="Nhập type"
                            onChange={formik.handleChange}
                            required
                        />
                    </div>
                    <input
                        name="login"
                        id="login"
                        className="btn btn-block login-btn"
                        type="submit"
                        value="Đăng ký"
                    />
                </form>
            </div>
        </div>
    )
}
