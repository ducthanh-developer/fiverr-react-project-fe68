import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetUserListJobs } from "./modules/action";
export default function UserInformation() {
    const dispatch = useDispatch();
    const { userjobs, } = useSelector((state) => state.userListJobsReducer);
    console.log("gg", userjobs);
    useEffect(() => {
      dispatch(actGetUserListJobs('614600386a0800001c187e11'));
    }, []);
    return (
        <div>
            mya đây
        </div>
    )
}
