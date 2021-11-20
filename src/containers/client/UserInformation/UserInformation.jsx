// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { actDetailUserInformation, actFetchAddUserInformation, actHistoryJobsUser, actUploadImg, } from "./modules/action";
// import { useFormik } from 'formik';
// import "../UserInformation/UserInformation.scss"
// import { Form, Input, Card } from 'antd';
// import { useState } from "react";

// export default function UserInformation(props) {
//     const { Meta } = Card;
//     const dispatch = useDispatch();
//     const { detailUser, historyJobs } = useSelector((state) => state.userListJobsReducer);
//     const { currentUser } = useSelector((state) => state.authReducer);

//     const userId = props.match.params.id;
//     useEffect(() => {
//         dispatch(actDetailUserInformation(userId));
//         dispatch(actHistoryJobsUser(currentUser?.token));
//     }, [dispatch, userId]);
//     const onFormLayoutChange = ({ size }) => {
//         setComponentSize(size);
//     };
//     const [isShow, setIsShow] = React.useState(true);

//     const [show, setShow] = React.useState(true);

//     const handleClick = () => {
//         setIsShow(!isShow);
//     };

//     const handleClick1 = () => {
//         setShow(!show);
//     };
//     const Typography = (props) => {
//         return <p>{props.children}</p>;
//     }
//     const [setComponentSize] = useState('default');

//     const formik = useFormik({
//         enableReinitialize: true,
//         initialValues: {
//             _id: detailUser?._id,
//             name: detailUser.name,
//             email: detailUser?.email,
//             password: detailUser?.password,
//             phone: detailUser?.phone,
//             birthday: detailUser.birthday,
//             gender: detailUser.gender,
//             role: detailUser.role,
//             skill: detailUser.skill,
//             certification: detailUser.certification,
//             bookingJob: detailUser.bookingJob
//         },
//         onSubmit: (values) => {
//             console.log("values", values);
//             console.log("idgggggggggggggg ", userId);
//             dispatch(actFetchAddUserInformation(userId, values));
//         }
//     })


//     return (
//         <div className="user__information">
//             <div className=" container user__information__content">
//                 <div className="row">
//                     <div className=" col-md-5 col-lg-4 userInformation__item1">
//                         <div className=" card card-1 ">
//                             <UploadImgUser path={props} />
//                             <h6 className="name__profile text-center">{detailUser.email}</h6>
//                             <button className="btn btn__profile">Preview Public Model</button>
//                             <hr></hr>
//                             <div className="home__town">
//                                 <ul className="  row">
//                                     <li className="flex-item-from col-6 col-sm-7 col-md-8 col-lg-8 col-xl-9">From</li>
//                                     <li className="flex-item-vietnam  col-6 col-sm-5 col-md-4  col-lg-4 col-xl-3">Vietnam</li>
//                                 </ul>
//                                 <ul className="row">
//                                     <li className="flex-item-member col-6 col-sm-7 col-md-8 col-lg-8 col-xl-10">Member since</li>
//                                     <li className="flex-item-vietname col-6 col-sm-5 col-md-4  col-lg-4 col-xl-2 ">2000</li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="">
//                             <div className=" card card-2">
//                                 <ul className="row description">
//                                     <li className="description__one col-6 col-sm-7 col-md-8 col-lg-8 col-xl-8">Description</li>
//                                     <li className=" description__two col-6 col-sm-5 col-md-4  col-lg-4 col-xl-4"> Edit Description </li>
//                                 </ul>
//                                 <hr></hr>
//                                 <ul className=" row flex add__skill_content ">
//                                     <li className="flex-item-3 col-7 col-sm-7 col-md-8 col-lg-9 col-xl-9">Skill</li>
//                                     <li className="flex-item-4 col-5 col-sm-5 col-md-4  col-lg-3 col-xl-3" onClick={handleClick} >Add Skill</li>
//                                     <div>
//                                         {isShow ?
//                                             <>
//                                             </>
//                                             : <div className="add__form__Skill card">
//                                                 <Typography>
//                                                     <Form
//                                                         layout="horizontal"
//                                                         onSubmitCapture={formik.handleSubmit}
//                                                         labelCol={{ span: 4 }}
//                                                         wrapperCol={{ span: 14 }}
//                                                         onValuesChange={onFormLayoutChange}>
//                                                         <Form.Item  >
//                                                             <Input name="skill" onChange={formik.handleChange}
//                                                                 value={formik.values.skill} />
//                                                         </Form.Item>
//                                                         <div className="row add__skill__button">
//                                                             <hr></hr>

//                                                             <div className="col-6">
//                                                                 <button className="btn btn__cancle__skkil">Cancel</button>
//                                                             </div>
//                                                             <div className="col-6">
//                                                                 <button type="submit" className="btn btn-success btn__add__skill"> Thêm</button>
//                                                             </div>
//                                                         </div>
//                                                     </Form>
//                                                 </Typography>
//                                             </div>}
//                                     </div>
//                                 </ul>
//                                 <hr></hr>
//                                 <ul className="flex description__add__certification row">
//                                     <li className="flex-item-1 col-6 col-sm-7 col-md-8 col-lg-8 col-xl-8">certification</li>
//                                     <li className="flex-item-2 col-6 col-sm-5 col-md-4  col-lg-4 col-xl-4" onClick={handleClick1} >Add certificate</li>
//                                     <div>
//                                         {show ?
//                                             <>
//                                             </>
//                                             :
//                                             <div className="addform__certification card">
//                                                 <Typography>
//                                                     <Form
//                                                         onSubmitCapture={formik.handleSubmit}
//                                                         labelCol={{ span: 4 }}
//                                                         wrapperCol={{ span: 14 }}
//                                                         layout="horizontal" >
//                                                         <Form.Item label="">
//                                                             <Input name="certification"
//                                                                 onChange={formik.handleChange}
//                                                                 value={formik.values.certification} />
//                                                         </Form.Item>

//                                                         <div className="row add__skill__button">
//                                                             <hr></hr>
//                                                             <div className="col-6">
//                                                                 <button className="btn btn__cancle__skkil">Cancel</button>
//                                                             </div>
//                                                             <div className="col-6">
//                                                                 <button className="btn btn-success btn__add__certification" type="submit">Add certification</button>
//                                                             </div>
//                                                         </div>
//                                                     </Form>
//                                                 </Typography>
//                                             </div>}
//                                     </div>

//                                 </ul>
//                                 <div className="done__add__skill">
//                                     {detailUser.certification?.map((skill, index) => {
//                                         return (
//                                             <div key={index} className="skill">{skill}</div>
//                                         )
//                                     })}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className=" col-md-7 col-lg-8 user__information__right  userInformation__item2">
//                         <div className="card car__done__create">
//                             <div className="Buying">
//                                 <div className="row ">
//                                     <div className="col-2 col-lg-2">
//                                         <img src="https://npm-assets.fiverrcdn.com/assets/@fiverr-private/business_blocks/office-building.7ac5061.gif" alt="" />
//                                     </div>
//                                     <div className="col-10 col-lg-10">
//                                         <b>Buying services for work? </b>
//                                         <span>Get the best experience for your business</span>
//                                         <div className="questions">with 3 quick questions.</div>
//                                         <div className="industry">What’s your industry
//                                         </div>
//                                     </div>
//                                 </div>
//                                 {/* <img src="https://npm-assets.fiverrcdn.com/assets/@fiverr-private/business_blocks/office-building.7ac5061.gif" alt="" />
//                                 <b>Buying services for work? </b>
//                                 <span>Get the best experience for your business</span> */}
//                             </div>
//                             {/* <div className="questions">with 3 quick questions.</div>
//                             <div className="industry">What’s your industry
//                             </div> */}
//                         </div>
//                         <div className="card create__new__gif">
//                             <div className="row">
//                                 <div className="col-9 Gigs">
//                                     It seems that you don't have any active Gigs. Get selling!
//                                 </div>
//                                 <div className="col-3 button__gif">
//                                     <button type="submit" className="btn btn-success">Create  a new gif</button>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className=" history__job__booking">
//                             <div className="row">
//                                 <div className=" col-9 bookingName" >
//                                     {historyJobs.bookingJob?.map((booking, index) => {
//                                         return (
//                                             <div key={index} className="h-full flex items-center p-4 rounded-lg">
//                                                 <Card
//                                                     hoverable>
//                                                     <div className="row">
//                                                         <div className="col-3 col-lg-3 ">
//                                                             <img alt="example" src={booking.image} />
//                                                         </div>
//                                                         <div className="col-9 col-lg-9">
//                                                             <div className="name">{booking.name}</div>
//                                                         </div>
//                                                     </div>
//                                                 </Card>,
//                                             </div>
//                                         )
//                                     })}
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// //day ne

// export function UploadImgUser(props) {
//     const dispatch = useDispatch();

//     const { detailUser } = useSelector((state) => state.userListJobsReducer);
//     console.log("object,", detailUser);
//     console.log("ava", detailUser.avatar);

//     const { currentUser } = useSelector((state) => state.authReducer);
//     console.log("current", currentUser);
//     const idJOb = props.path.match.params.id;
//     useEffect(() => {
//         dispatch(actDetailUserInformation(idJOb));
//     }, [dispatch, idJOb]);

//     const [imgSrc, setImgSrc] = useState("");

//     const formik = useFormik({
//         enableReinitialize: true,
//         initialValues: {
//             avatar: null,
//             token: currentUser?.token,
//         },
//         onSubmit: (values) => {
//             let formData = new FormData();
//             formData.append("avatar", values.avatar, values.avatar.name);
//             console.log("formDatafdfdfgf", formData.get("avatar"));
//             console.log("alo ");
//             dispatch(actUploadImg(formData, currentUser?.token));

//         }
//     })


//     const handleChangeFile = (e) => {
//         let file = e.target.files[0];
//         let reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onload = (e) => {
//             setImgSrc(e.target.result);
//         };
//         formik.setFieldValue("avatar", file);
//     };
//     return (
//         <div className="upload__avatar">
//             <Form
//                 onSubmitCapture={formik.handleSubmit}
//                 labelCol={{
//                     span: 4,
//                 }}
//                 wrapperCol={{
//                     span: 14,
//                 }} >
//                 <div className="select">
//                     <div className="">
//                         <img
//                         type="submit" 
//                             className="img_select"
//                             src={imgSrc === "" ? detailUser.avatar : imgSrc}
//                             alt="..." />
//                         <input type="file"  onChange={handleChangeFile} className="file" />
//                     </div>
//                     <div>
//                         <button type="submit" className="btn btn-default tacvu" value="">
//                             Upload Img
//                         </button>
//                     </div>
//                 </div>
//             </Form>
//         </div>

//     )
// }



import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actDetailUserInformation, actFetchAddUserInformation, actHistoryJobsUser, actUploadImg, } from "./modules/action";
import { useFormik } from 'formik';
import "../UserInformation/UserInformation.scss"
import { Form, Input, Card } from 'antd';
import { useState } from "react";

export default function UserInformation(props) {
    const { Meta } = Card;
    const dispatch = useDispatch();
    const { detailUser, historyJobs } = useSelector((state) => state.userListJobsReducer);
    const { currentUser } = useSelector((state) => state.authReducer);

    const userId = props.match.params.id;
    useEffect(() => {
        dispatch(actDetailUserInformation(userId));
        dispatch(actHistoryJobsUser(currentUser?.token));
    }, [dispatch, userId]);
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
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
    const [setComponentSize] = useState('default');

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            _id: detailUser?._id,
            name: detailUser.name,
            email: detailUser?.email,
            password: detailUser?.password,
            phone: detailUser?.phone,
            birthday: detailUser.birthday,
            gender: detailUser.gender,
            role: detailUser.role,
            skill: detailUser.skill,
            certification: detailUser.certification,
            bookingJob: detailUser.bookingJob
        },
        onSubmit: async (values) => {
            console.log("values", values);
            console.log("idgggggggggggggg ", userId);
            await dispatch(actFetchAddUserInformation(userId, values));
        }
    })


    return (
        <div className="user__information">
            <div className=" container user__information__content">
                <div className="row">
                    <div className=" col-md-5 col-lg-4 userInformation__item1">
                        <div className=" card card-1 ">
                            <UploadImgUser path={props} />
                            <h6 className="name__profile text-center">{detailUser.email}</h6>
                            <button className="btn btn__profile">Preview Public Model</button>
                            <hr></hr>
                            <div className="home__town">
                                <ul className="  row">
                                    <li className="flex-item-from col-6 col-sm-7 col-md-8 col-lg-8 col-xl-9">From</li>
                                    <li className="flex-item-vietnam  col-6 col-sm-5 col-md-4  col-lg-4 col-xl-3">Vietnam</li>
                                </ul>
                                <ul className="row">
                                    <li className="flex-item-member col-6 col-sm-7 col-md-8 col-lg-8 col-xl-10">Member since</li>
                                    <li className="flex-item-vietname col-6 col-sm-5 col-md-4  col-lg-4 col-xl-2 ">2000</li>
                                </ul>
                            </div>
                        </div>
                        <div className="">
                            <div className=" card card-2">
                                <ul className="row description">
                                    <li className="description__one col-6 col-sm-7 col-md-8 col-lg-8 col-xl-8">Description</li>
                                    <li className=" description__two col-6 col-sm-5 col-md-4  col-lg-4 col-xl-4"> Edit Description </li>
                                </ul>
                                <hr></hr>
                                <ul className=" row flex add__skill_content ">
                                    <li className="flex-item-3 col-4 col-sm-4 col-md-4 col-lg-4 col-xl-3">Skill</li>
                                    <li className="flex-item- col-4 col-sm-4 col-md-4 col-lg-4 col-xl-5"></li>
                                    <li className="flex-item-4 col-4 col-sm-4 col-md-4  col-lg-4 col-xl-4" onClick={handleClick} >Add Skill</li>
                                    <div>
                                        {isShow ?
                                            <>
                                            </>
                                            : <div className="add__form__Skill card">
                                                <Typography>
                                                    <Form
                                                        layout="horizontal"
                                                        onSubmitCapture={formik.handleSubmit}
                                                        labelCol={{ span: 4 }}
                                                        wrapperCol={{ span: 14 }}
                                                        onValuesChange={onFormLayoutChange}>
                                                        <Form.Item  >
                                                            <Input name="skill" onChange={formik.handleChange}
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
                                            </div>}
                                    </div>
                                </ul>
                                <hr></hr>
                                <ul className="flex description__add__certification row">
                                    <li className="flex-item-1 col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">Certification</li>
                                    <li className="flex-item- col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4"></li>
                                    <li className="flex-item-2 col-4 col-sm-4 col-md-4  col-lg-4 col-xl-4" onClick={handleClick1} >Add certificate</li>
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
                                                                <button className="btn btn-success btn__add__certification" type="submit">Add certification</button>
                                                            </div>
                                                        </div>
                                                    </Form>
                                                </Typography>
                                            </div>}
                                    </div>

                                </ul>
                                <div className="done__add__skill">
                                    {detailUser.certification?.map((skill, index) => {
                                        return (
                                            <div key={index} className="skill">{skill}</div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-md-7 col-lg-8 user__information__right  userInformation__item2">
                        <div className="card car__done__create">
                            <div className="Buying">
                                <div className="row ">
                                    <div className="col-2 col-lg-2">
                                        <img src="https://npm-assets.fiverrcdn.com/assets/@fiverr-private/business_blocks/office-building.7ac5061.gif" alt="" />
                                    </div>
                                    <div className="col-10 col-lg-10">
                                        <b>Buying services for work? </b>
                                        <span>Get the best experience for your business</span>
                                        <div className="questions">with 3 quick questions.</div>
                                        <div className="industry">What’s your industry
                                        </div>
                                    </div>
                                </div>

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
                                <div className=" col-9 bookingName" >
                                    {historyJobs.bookingJob?.map((booking, index) => {
                                        return (
                                            <div key={index} className="h-full flex items-center p-4 rounded-lg">
                                                <Card
                                                    hoverable>
                                                    <div className="row">
                                                        <div className="col-3 col-lg-3 ">
                                                            <img alt="example" src={booking.image} />
                                                        </div>
                                                        <div className="col-9 col-lg-9">
                                                            <div className="name">{booking.name}</div>
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
        dispatch(actDetailUserInformation(idJOb));
    }, [dispatch, idJOb]);

    const [imgSrc, setImgSrc] = useState(detailUser && detailUser.avatar ? detailUser.avatar : "");


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            avatar: null,
            token: currentUser?.token,
        },

    })


    const handleChangeFile = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            setImgSrc(e.target.result);
        };
        formik.setFieldValue("avatar", file);

        let formData = new FormData();
        formData.append("avatar", file, file.name);
        dispatch(actUploadImg(formData, currentUser?.token));
        dispatch(actFetchAddUserInformation(formData, currentUser?.token))
    };

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
                <div className="select row">
                    <div className="col-3 col-sm-2 col-lg-3">
                    </div>
                    <div className="col-9 col-sm-10 col-lg-9">
                        <img
                            type="submit"
                            className="img_select"
                            src={imgSrc === "" ? detailUser.avatar : imgSrc}
                            alt="..." />
                        <input type="file" onChange={handleChangeFile} className="file" />
                    </div>
                </div>
            </Form>
        </div>

    )
}


