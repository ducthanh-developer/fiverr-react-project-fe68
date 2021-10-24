import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetUserListJobs } from "./modules/action";
import { Upload } from 'antd';
import LoadImg from './LoadImg'
import ImgCrop from 'antd-img-crop';
import "../UserInformation/UserInformation.scss"
export default function UserInformation() {
    const dispatch = useDispatch();
    const { userJobs, } = useSelector((state) => state.userListJobsReducer);
    console.log("gg", userJobs);
    useEffect(() => {
        dispatch(actGetUserListJobs('614600386a0800001c187e11'));
    }, []);


    const [fileList, setFileList] = useState([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
    ]);

    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const onPreview = async file => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        // const image = new Image();
        // image.src = src;
        // const imgWindow = window.open(src);
        // imgWindow.document.write(image.outerHTML);
    };
    return (
        <div className="container user__informational">
            <div className="upload__images">
                <ImgCrop >
                    <div className="img">
                        <div className="Container">
                            <Upload
                                style={{ margin: '100' }}
                                // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                listType="picture-card"
                                fileList={fileList}
                                onChange={onChange}
                                onPreview={onPreview}>
                                {fileList.length < 1 && '+ Upload'}
                            </Upload>
                        </div>

                    </div>

                </ImgCrop>
            </div>
            <div className="row">
                <div className="col-3 ">
                    <div className=" card card-1 ">
                        <LoadImg />
                        <div className="name__profile text-center ">{userJobs.name}</div>
                        <hr></hr>
                        <div className="row">
                            <div className="col-6">

                                From
                            </div>
                            <div className="col-6">
                                Vietnam
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                Member since
                            </div>
                            <div className="col-6">
                                Vietnam
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" card card-2">
                            <img src="../../images/market/learn.png"  alt="" />
                            {userJobs.name}
                            <hr></hr>
                            <div className="row">
                                <div className="col-6">
                                    From
                                </div>
                                <div className="col-6">
                                    Vietnam
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    Member since
                                </div>
                                <div className="col-6">
                                    Vietnam
                                </div>
                            </div>
                        </div></div>
                </div>
                <div className="col-9">

                </div>
            </div>
        </div>
    )
}
