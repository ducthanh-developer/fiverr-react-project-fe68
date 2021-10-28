import React, { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchAddUserInformation, actGetUserListJobs, actHistoryJobsUser } from "./modules/action";
// import actHistoryJobsUser from 'containers/client/UserInformation/HistoryJobs/modules/action'
import { useFormik } from 'formik';
import "../UserInformation/AddFormSkill.scss"
import LoadImg from './LoadImg'
import "../UserInformation/UserInformation.scss"
import { Form, Input, } from 'antd';
import { map } from "jquery";

export default function UserInformation(props) {
    console.log("props", props);
    const dispatch = useDispatch();
    const { userJobs, historyJobs } = useSelector((state) => state.userListJobsReducer);
    // const { historyJobs } = useSelector((state) => state.historyBokingJobReducer);

    console.log("gg", userJobs);

    console.log("historyJobs", historyJobs);
    useEffect(() => {
        dispatch(actGetUserListJobs(props.match.params.id));
        dispatch(actHistoryJobsUser(props.match.params.id));
    }, []);
    const [isShow, setIsShow] = React.useState(true);
    const handleClick = () => {
        setIsShow(!isShow);
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
            // let formData = new FormData();
            // formData.append("skill", formik.values.skill)
            // console.log("formData", formData.get('skill'))
            dispatch(actFetchAddUserInformation(props.match.params.id, values));
        }
    })
    return (
        <div className="user__information">
            <div className="container user__information__content ">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-5">
                        <div className=" card card-1 ">
                            <LoadImg />
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
                                    <li className="flex-item-2">
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
                                                            layout="horizontal" >
                                                            <Form.Item label="" >
                                                                <Input name="skill"
                                                                    onChange={formik.handleChange}
                                                                    value={formik.values.skill} />
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
                                                                <Form.Item label="Tac vụ"  >
                                                                    <button type="submit" className="btn btn-default" value=""> Thêm</button>
                                                                </Form.Item>
                                                            </div>
                                                        </Form>
                                                    </Typography>
                                                </div>
                                            }
                                        </>
                                    </li>
                                </ul>
                                <div className="done__add__skill">
                                    {userJobs.skill?.map((skill, index) => {
                                        return (
                                            <div key={index} className="skill">{skill}</div>
                                        )
                                    })}
                                </div>
                                <hr></hr>
                                <ul className="flex Description ">
                                    <li className="flex-item-1">Skill</li>
                                    <li className="flex-item-2">
                                        <>
                                            <div className="add__skill" onClick={handleClick}>Toggle</div>
                                            {isShow ?
                                                <>
                                                </>
                                                :
                                                <div className="AddFormSkill card">
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
                                        </>
                                    </li>
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
                                
                                <div className="col-9" bookingName>
                                    {historyJobs.bookingJob?.map((booking, index) => {
                                        return (
                                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://npm-assets.fiverrcdn.com/assets/@fiverr-private/business_blocks/office-building.7ac5061.gif"  />
                                                <div className="flex-grow">
                                                    <h2 className="text-pink-500 title-font font-medium text-2xl">{booking.name}</h2>
                                                    {/* <p className="text-gray-500"><span className="font-bold">Giờ chiếu:</span> {moment(ticket.ngayDat).format('hh:mm A')} - <span className="font-bold">Ngày chiếu:</span>  {moment(ticket.ngayDat).format('DD-MM-YYYY')} .</p> */}
                                                    <p><span className="font-bold">Địa điểm:</span> fdfd  </p>
                                                    <p>
                                                        <span className="font-bold">Tên rạp:</span>  dfd - <span className="font-bold">Ghế:</span>  
                                                    </p>
                                                </div>
                                            </div>
                                            // <h2 className="text-pink-500 title-font font-medium text-2xl">{booking.name}</h2>
                                            // <div className="name" key={index}>{booking.name.slice(0, 100)}</div>
                                        )
                                    })}

                                    {/* <div>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat voluptates dolor, doloremque nihil nulla doloribus, vel ratione eaque dignissimos ea aperiam dolore alias libero. Atque dolor recusandae laborum modi.
                                        Nobis repellat accusamus impedit laboriosam, illo excepturi voluptatibus aliquam iste incidunt cumque quas officia autem dolorem a libero corrupti rem ullam quis eum? Dolorem neque optio fugiat aliquam nobis facilis.

                                    </div> */}
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* getlistjobbooking */}

                </div>
            </div>
        </div>

    )
}











