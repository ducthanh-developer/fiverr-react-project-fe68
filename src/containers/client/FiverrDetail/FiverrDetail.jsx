import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetJobDetail } from "../FiverrDetail/module/actions";
import { Card } from "antd";
import "./FiverrDetail.scss";
import { Link } from "react-router-dom";

export default function FiverrDetail(props) {
  const { Meta } = Card;
  const dispatch = useDispatch();
  const { jobDetail } = useSelector((state) => state.fiverrDetailJobReducer);
  useEffect(() => {
    dispatch(actGetJobDetail("617a9c6d07fe01001cabca35"));  // props.match.params.id
  }, []);
  const { image, name, _id } = jobDetail;
  return (
    <div className="container">
      <div className="row">
        <div className="col-3  fiverr__item">
          <Link to={`/fiverr/${_id}`}>
            <Card
              hoverable
              style={{ width: 340 }}
              cover={<img alt="example" src={image} />}
            >
              <Meta title={name} description="www.instagram.com" />
            </Card>
            ,
          </Link>
        </div>
      </div>
    </div>
  );
}

// <button className="btn btn-dark">
// <Link to={`/movie-detail/${movie.maPhim}`}>
//   View detail
// </Link>
// </button>
