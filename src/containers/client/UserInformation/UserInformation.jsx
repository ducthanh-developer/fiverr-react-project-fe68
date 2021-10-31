import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchAddUserInformation, actGetUserListJobs, actHistoryJobsUser,  } from "./modules/action";
import { useFormik } from 'formik';
import "../UserInformation/UserInformation.scss"
import { Form, Input, Card } from 'antd';
// import React, { useState } from 'react';
export default function UserInformation(props) {
    const { Meta } = Card;
    console.log("props", props);
    const dispatch = useDispatch();
    const { userJobs, historyJobs } = useSelector((state) => state.userListJobsReducer);
    console.log("gg", userJobs);
    console.log("historyJobs", historyJobs);
    const id = props.match.params.id;
    useEffect(() => {
        // const jobId = props.match.params.id;
        // const jobUserId = props.match.params.id;;
        dispatch(actGetUserListJobs(id));
        dispatch(actHistoryJobsUser(id));
    }, [dispatch]);

    // const [fileList, setFileList] = useState([
    //     {
    //         uid: '-1',
    //         name: 'image.png',
    //         status: 'done',
    //         // url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    //     },
    // ]);

    // const onChange = ({ fileList: newFileList }) => {
    //     setFileList(newFileList);
    //     console.log("object,", newFileList);
    //     dispatch(actUploadImg(newFileList))
    // };


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
            <div className="container user__information__content ">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-5">
                        <div className=" card card-1 ">
                            {/* <LoadImg /> */}
                            {/* <LoadImg/> */}
                            {/* <ImgCrop rotate>
                                <Upload
                                    listType="picture-card"
                                    fileList={fileList}
                                    onChange={onChange}
                                    >

                                    {fileList.length < 1 && '+ Upload'}
                                </Upload>
                            </ImgCrop> */}
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
                                                            wrapperCol={{ span: 14 }}
                                                        >
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
                                {/* <div className="done__add__skill">
                                    {userJobs.certification?.map((certification, index) => {
                                        return (
                                            <div key={index} className="skill">{certification}</div>
                                        )
                                    })}
                                </div> */}
                                <hr></hr>
                                <ul className="flex Description ">
                                    <li className="flex-item-1">certification</li>
                                    <li className="flex-item-2"onClick={handleClick1} >certification</li>                              

                                        <div>
                                            {/* <div className="add__certification" onClick={handleClick}>certification</div> */}
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
                                                            {/* <Form.Item label="" >
                                                            <Select>
                                                                <Select.Option value="demo">Demo</Select.Option>
                                                            </Select>
                                                        </Form.Item> */}
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
                    <div className="col-12 col-md-12 col-lg-6 user__information__right">
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
                                <div className="col-3">
                                    <button type="submit" className="btn btn-success">Create  a new gif</button>
                                </div>
                            </div>
                        </div>

                        <div className=" history__job__booking">
                            <div className="row">
                                <div className="  col-9 bookingName" >
                                    {/* {historyJobs.bookingJob?.map((booking, index) => {
                                        return (
                                            <div className="h-full flex items-center p-4 rounded-lg">
                                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://npm-assets.fiverrcdn.com/assets/@fiverr-private/business_blocks/office-building.7ac5061.gif" />
                                                <div className="flex-grow">
                                                    <h2 className="text-pink-500 title-font font-medium text-2xl">{booking.name}</h2>
                                                    \                                                    <p><span className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis laudantium deleniti in adipisci! Blanditiis rerum est alias architecto ipsum incidunt necessitatibus iure doloremque fuga nostrum, officiis culpa commodi quidem.
                                                        Illo officia neque repudiandae fugit sed ullam voluptatibus? Laborum et tempore explicabo quisquam assumenda officiis odit laudantium. Soluta consequuntur praesentium, quia, eius labore ipsa repudiandae, architecto officiis quas corporis doloribus?</span> fdfd  </p>
                                                    <p>
                                                        <span className="font-bold">Tên rạp:</span>  dfd - <span className="font-bold">Ghế:</span>
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })} */}


                                    {historyJobs.bookingJob?.map((booking, index) => {
                                        return (
                                            <div key={index} className="h-full flex items-center p-4 rounded-lg">
                                                <Card
                                                    hoverable
                                                    style={{ width: 740 }}

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
        </div>
    )
}











