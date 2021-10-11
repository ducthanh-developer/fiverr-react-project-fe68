import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetJobDetail } from "../FiverrDetail/module/actions";
export default function FiverrDetail(props) {
  const dispatch = useDispatch();
  const { jobDetail } = useSelector((state) => state.fiverrDetailJobReducer);
  useEffect(() => {
    dispatch(actGetJobDetail());
  }, []);
  console.log(jobDetail);
  const renderDemo = () => {
    return jobDetail?.map((item, index)=>{
      return <h1>ewrwer</h1>
    })
  }
  return <div>{renderDemo()}</div>;
}
