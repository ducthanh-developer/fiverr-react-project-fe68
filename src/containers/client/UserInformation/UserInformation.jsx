import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetUserListJobs } from "./modules/action";


export default function UserInformation() {
    const dispatch = useDispatch();
    const { userJobs, } = useSelector((state) => state.userListJobsReducer);
    console.log("gg", userJobs);
    useEffect(() => {
        dispatch(actGetUserListJobs('614600386a0800001c187e11'));
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
               {userJobs.name}
                </div>
                <div className="col-9">

                </div>
            </div>
        </div>
    )
}
