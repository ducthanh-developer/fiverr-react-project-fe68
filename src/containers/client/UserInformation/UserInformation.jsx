import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchAddUserInformation, actGetUserListJobs, actHistoryJobsUser, actUploadImg, } from "./modules/action";
import { useFormik } from 'formik';
import "../UserInformation/UserInformation.scss"
import { Form, Input, Card } from 'antd';
import { useState } from "react";

export default function UserInformation(props) {
    const { Meta } = Card;
    const dispatch = useDispatch();
    const { userJobs, historyJobs } = useSelector((state) => state.userListJobsReducer);

    const idUser = props.match.params.id;
    useEffect(() => {
        dispatch(actGetUserListJobs(idUser));
        dispatch(actHistoryJobsUser(idUser));
    }, [dispatch, idUser]);

    const [isShow, setIsShow] = React.useState(true);

    const [show, setShow] = React.useState(true);

    const handleClick = () => {
        setIsShow(!isShow);
    };

    const handleClick1 = () => {
        setShow(!show);
    };
    const Typography = (props) => {
        return <p>{props.children}</p>;
    }
    const formik = useFormik({
        initialValues: {
            skill: '',
            certification: '',
        },
        onSubmit: (values) => {
            console.log("values", values);
            dispatch(actFetchAddUserInformation(props.match.params.id, values));
        }
    })
    return (
        <div className="user__information">
            <div className="container-fluid user__information__content ">
                <div className="row">
                    <div className="col-6 col-md-5 col-lg-5">
                        <div className=" card card-1 ">
                            {/* <LoadImg /> */}
                            <AddSkil path={props} />
                            {/* <img src={userJobs.avatar} alt="" /> */}
                            <h6 className="name__profile text-center">{userJobs.email}</h6>
                            <button className="btn btn__profile">Preview Public Model</button>
                            <hr></hr>
                            <div>
                                <ul className="flex from__item ">
                                    <li className="flex-item-from">From</li>
                                    <li className="flex-item-vietnam">Vietnam</li>
                                </ul>
                                <ul className="flex from__item ">
                                    <li className="flex-item-from">Member since</li>
                                    <li className="flex-item-time">Vietnam</li>
                                </ul>
                            </div>
                        </div>
                        <div className="">
                            <div className=" card card-2">
                                <ul className="flex Description ">
                                    <li className="flex-item-1">Description</li>
                                    <li className="flex-item-2">  Edit Description </li>
                                </ul>
                                <hr></hr>
                                <ul className="flex Description ">
                                    <li className="flex-item-1">Skill</li>
                                    <li className="flex-item-2" >
                                        <>
                                            <div onClick={handleClick} className="add__skill">AddSkill</div>
                                            {isShow ?
                                                <>
                                                </>
                                                : <div className="AddFormSkill card">
                                                    <Typography>
                                                        <Form
                                                            layout="horizontal"
                                                            onSubmitCapture={formik.handleSubmit}
                                                            labelCol={{ span: 4 }}
                                                            wrapperCol={{ span: 14 }}>
                                                            <Form.Item label="" >
                                                                <Input name="skill"
                                                                    onChange={formik.handleChange}
                                                                    value={formik.values.skill} />
                                                            </Form.Item>

                                                            <div className="row add__skill__button">
                                                                <hr></hr>

                                                                <div className="col-6">
                                                                    <button className="btn btn__cancle__skkil">Cancel</button>
                                                                </div>
                                                                <div className="col-6">
                                                                    <button type="submit" className="btn btn-success" value=""> Thêm</button>
                                                                </div>

                                                            </div>
                                                        </Form>
                                                    </Typography>
                                                </div>
                                            }
                                        </>
                                    </li>
                                </ul>

                                <hr></hr>
                                <ul className="flex Description ">
                                    <li className="flex-item-1">certification</li>
                                    <li className="flex-item-2" onClick={handleClick1} >certification</li>
                                    <div>
                                        {show ?
                                            <>
                                            </>
                                            :
                                            <div className="addform__certification card">
                                                <Typography>
                                                    <Form
                                                        onSubmitCapture={formik.handleSubmit}
                                                        labelCol={{ span: 4 }}
                                                        wrapperCol={{ span: 14 }}
                                                        layout="horizontal" >
                                                        <Form.Item label="">
                                                            <Input name="certification"
                                                                onChange={formik.handleChange}
                                                                value={formik.values.certification} />
                                                        </Form.Item>

                                                        <div className="row add__skill__button">
                                                            <hr></hr>

                                                            <div className="col-6">
                                                                <button className="btn btn__cancle__skkil">Cancel</button>
                                                            </div>
                                                            <div className="col-6">
                                                                <button className="btn btn-success btn__add__skkil" type="submit">Add</button>
                                                            </div>
                                                        </div>
                                                    </Form>
                                                </Typography>
                                            </div>
                                        }
                                    </div>
                                    <div className="done__add__skill">
                                        {userJobs.certification?.map((skill, index) => {
                                            return (
                                                <div key={index} className="skill">{skill}</div>
                                            )
                                        })}
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-7 col-md-6 col-lg-7 user__information__right">
                        <div className="card car__done__create">
                            <div className="Buying">
                                <img src="https://npm-assets.fiverrcdn.com/assets/@fiverr-private/business_blocks/office-building.7ac5061.gif" alt="" />
                                <b>Buying services for work? </b>  Get the best experience for your business
                            </div>
                            <div className="questions">with 3 quick questions.</div>
                            <div className="industry">What’s your industry
                            </div>
                        </div>
                        <div className="card create__new__gif">
                            <div className="row">
                                <div className="col-9 Gigs">

                                    It seems that you don't have any active Gigs. Get selling!
                                </div>
                                <div className="col-3 button__gif">
                                    <button type="submit" className="btn btn-success">Create  a new gif</button>
                                </div>
                            </div>
                        </div>

                        <div className=" history__job__booking">
                            <div className="row">
                                <div className="  col-9 bookingName" >
                                    {historyJobs.bookingJob?.map((booking, index) => {
                                        return (
                                            <div key={index} className="h-full flex items-center p-4 rounded-lg">
                                                <Card
                                                    hoverable

                                                >
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <img alt="example" src={booking.image} style={{ width: 150 }} />
                                                        </div>
                                                        <div className="col-9">
                                                            <Meta title={booking.name} description="www.instagram.com" />
                                                        </div>
                                                    </div>

                                                </Card>,
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className=" ">
                <ul className="flex container">
                    <li className="flex-item">1</li>
                    <li className="flex-item">2</li>

                </ul>
            </div>

        </div>
    )
}



export function AddSkil(props) {
    const dispatch = useDispatch();

    const { userJobs } = useSelector((state) => state.userListJobsReducer);
    // const { currentUser } = useSelector(state => state.authReduce);
    // console.log("current", currentUser);
    const idJOb = props.path.match.params.id;
    useEffect(() => {
        dispatch(actGetUserListJobs(idJOb));
    }, [dispatch, idJOb]);

    const [imgSrc, setImgSrc] = useState("");

    const formik = useFormik({
        initialValues: {
            avatar: null,
        },
        onSubmit: (values) => {
            let formData = new FormData();
            formData.append("avatar", formik.avatar.name);
            console.log("formDatafdfdfgf", formData.get("avatar"));
            for (let key in values) {
                if (key !== 'avatar') {
                    formData.append(key, values[key]);
                } else {
                    formData.append('avatar', values.avatar, values.avatar.name)
                }
            }
            console.log("alo ");
            dispatch(actUploadImg(formData));

        }
    })
    const handleChangeFile = (e) => {
        let file = e.target.files[0];
        if (
            file.type === "image/jpg" ||
            file.type === "image/jpeg" ||
            file.type === "image/gif" ||
            file.type === "image/png"
        ) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                console.log(e.target.result);
                setImgSrc(e.target.result);
                formik.setFieldValue("avatar", file);
            };
            console.log("file", file);
        }
    };

    console.log("propsAdd", props);
    return (
        <div className="upload__avatar">
            <Form
                onSubmitCapture={formik.handleSubmit}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}

                initialValues={{}} >
                <div className="select">
                    <Form.Item >
                        <img
                            className="img_select"
                            src={imgSrc === "" ? userJobs.avatar : imgSrc}
                            alt=""
                            width={150}
                            height={150} />
                        <Input type="file" onChange={handleChangeFile} />

                    </Form.Item>
                    <Form.Item label="Tac vụ">
                        <button type="submit" className="btn btn-default tacvu" value="">
                            updtae
                        </button>
                    </Form.Item>
                </div>

            </Form>
        </div>

    )
}
