import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetJobDetail } from "../FiverrDetail/module/actions"
import { Card } from 'antd';

export default function FiverrDetail(props) {
  const { Meta } = Card;
  console.log(props);
  const dispatch = useDispatch();
  const { jobDetail } = useSelector((state) => state.fiverrDetailJobReducer);
  console.log("object", jobDetail);
  useEffect(() => {
    dispatch(actGetJobDetail());
  }, []);

  // const renderListJob = () => {
  //   return jobDetail.data?.map((job, index) => {
  //     <div key={index} >
  //       {job.name}

  //     </div>
  //   })
  // }
  return (
    <div>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>,
      {/* {jobDetail?.map((job, index) => {
        return (
          <div>
            {job.name}
          </div>
        )
      })} */}

    </div>
  )
}
