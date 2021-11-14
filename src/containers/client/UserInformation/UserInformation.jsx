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
    const { detailUser, historyJobs } = useSelector((state) => state.userListJobsReducer);
    const { currentUser } = useSelector((state) => state.authReducer);

    const idUser = props.match.params.id;
    useEffect(() => {
        dispatch(actGetUserListJobs(idUser));
        dispatch(actHistoryJobsUser(currentUser.token));
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
            skill: detailUser?.skill,
            certification: detailUser?.certification,
            token: currentUser?.token,

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
                            <UploadImgUser path={props} />
                            <h6 className="name__profile text-center">{detailUser.email}</h6>
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
                                    <li className="flex-item-3">Skill</li>
                                    <li className="flex-item-4 add__skill" onClick={handleClick} >Add Skill</li>
                                    <div>
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
                                                                <button type="submit" className="btn btn-success btn__add__skill"> Thêm</button>
                                                            </div>

                                                        </div>
                                                    </Form>
                                                </Typography>
                                            </div>
                                        }
                                    </div>

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
                                                                <button className="btn btn-success btn__add__certification
                                                                " type="submit">Add certification</button>
                                                            </div>
                                                        </div>
                                                    </Form>
                                                </Typography>
                                            </div>}
                                    </div>
                                    <div className="done__add__skill">
                                        {detailUser.certification?.map((skill, index) => {
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
                                                    hoverable>
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
        </div>
    )
}

//day ne

export function UploadImgUser(props) {
    const dispatch = useDispatch();

    const { detailUser } = useSelector((state) => state.userListJobsReducer);
    console.log("object,", detailUser);
    console.log("ava", detailUser.avatar);

    const { currentUser } = useSelector((state) => state.authReducer);
    console.log("current", currentUser);
    const idJOb = props.path.match.params.id;
    useEffect(() => {
        dispatch(actGetUserListJobs(idJOb));
    }, [dispatch, idJOb]);

    const [imgSrc, setImgSrc] = useState("");

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            avatar: null,
            token: currentUser?.token,
        },
        onSubmit: (values) => {
            let formData = new FormData();
            formData.append("avatar", values.avatar, values.avatar.name);
            console.log("formDatafdfdfgf", formData.get("avatar"));
            console.log("alo ");
            dispatch(actUploadImg(formData, currentUser?.token));
        }
    })

    
    const handleChangeFile = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          setImgSrc(e.target.result);
        };
        formik.setFieldValue("avatar", file);
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
                }} >
                <div className="select">
                    <div className="">
                        <img
                            className="img_select"
                            src={imgSrc === "" ? detailUser.avatar : imgSrc}
                            alt="..." />
                        <input type="file" onChange={handleChangeFile} className="file" />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-default tacvu" value="">
                            Upload Img
                        </button>
                    </div>
                </div>
            </Form>
        </div>

    )
}
