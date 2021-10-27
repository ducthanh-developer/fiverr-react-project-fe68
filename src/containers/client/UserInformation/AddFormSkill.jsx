// import React, { Component } from 'react'
// import {
//     Form,
//     Input,
//     Button,
//     Select,

// } from 'antd';
// import "../../client/UserInformation/AddFormSkill.scss"

// function AddFormSkill() {
//     const [isShow, setIsShow] = React.useState(true);
//     const handleClick = () => {
//         setIsShow(!isShow);
//     };
//     const Typography = (props) => {
//         return <p>{props.children}</p>;
//     }
//     if (isShow) {
//         return (
//             <>
//                 <div onClick={handleClick}>AddSkill</div>
//                 <div className=" AddFormSkill card">
//                     <Typography>
//                         <Form

//                             labelCol={{ span: 4 }}
//                             wrapperCol={{ span: 14 }}
//                             layout="horizontal" >
//                             <Form.Item label="">
//                                 <Input />
//                             </Form.Item>
//                             <Form.Item label="" >
//                                 <Select>
//                                     <Select.Option value="demo">Demo</Select.Option>
//                                 </Select>
//                             </Form.Item>
//                         </Form>
//                         <div className="row add__skill__button">
//                             <hr></hr>

//                             <div className="col-6">
//                                 <button className="btn btn__cancle__skkil">Cancel</button>
//                             </div>
//                             <div className="col-6">
//                                 <button className="btn btn-success btn__add__skkil">Add</button>
//                             </div>
//                         </div>

//                     </Typography>


//                 </div>
//             </>
//         );
//     } else {
//         return <div className="unAddSkill" onClick={handleClick}>AddSkill111</div>
//     }
// }
// export default AddFormSkill;