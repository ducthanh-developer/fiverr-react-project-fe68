import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetJobDetail } from "../FiverrDetail/module/actions"
import { Card } from 'antd';
import "./FiverrDetail.scss"
import {Link} from "react-router-dom"

export default function FiverrDetail(props) {
  const { Meta } = Card;
  console.log(props);
  const dispatch = useDispatch();
  const { jobDetail } = useSelector((state) => state.fiverrDetailJobReducer);
  console.log("object", jobDetail);
  useEffect(() => {
    dispatch(actGetJobDetail());
  }, []);

  return (
    <div className="container">
      <div className="row">
      {jobDetail?.map((job, index) => {
        return (
          <div key={index} className="col-3  fiverr__item"> 

            <Link to={`/fiverr/${job._id}`}  >


            <Card
              hoverable
              style={{ width: 340 }}
              cover={<img alt="example" src={job.image} />}
            >
              <Meta title={job.name} description="www.instagram.com" />
            </Card>,
            </Link>
           
           
          </div>
        )
      })}
      </div>
    </div>
  )
}




// <button className="btn btn-dark">
// <Link to={`/movie-detail/${movie.maPhim}`}>
//   View detail
// </Link>
// </button>