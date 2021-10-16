import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetComment, actGetJobTittle } from "../modules/action";
export default function CommentJob(props) {
    console.log(props)
    const dispatch = useDispatch();
  const { tittleJob, commentJob } = useSelector((state) => state.tittleJobReducer);
 
  useEffect(() => {
    dispatch(actGetComment())

  }, []);

    return (
        <div>
            hhhhhhh
        </div>
    )
}
