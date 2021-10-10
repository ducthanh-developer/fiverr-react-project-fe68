import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {actGetJobDetail} from "../FiverrDetail/module/actions"
export default function FiverrDetail(props) {
  console.log(props);
    const dispatch= useDispatch();
    const { jobDetail } = useSelector((state) => state.fiverrDetailJobReducer);
    console.log("object", jobDetail);
  useEffect(() => {
    dispatch(actGetJobDetail());
  }, []);

    return (
        <div>
            jjjjjkkkkkkkkkkkkkkkkkkk
            lorem*30
        </div>
    )
}
