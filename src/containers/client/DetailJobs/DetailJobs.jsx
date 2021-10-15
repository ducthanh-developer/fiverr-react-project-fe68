import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetJobTittle } from "./modules/action"
import { Card } from 'antd';

export default function DetailJobs(props) {
  const { Meta } = Card;

  console.log("props", props)
  const dispatch = useDispatch();
  const { tittleJob } = useSelector((state) => state.tittleJobReducer);
  console.log("gg", tittleJob);
  useEffect(() => {
    dispatch(actGetJobTittle(props.match.params.id));
  }, []);
  return (
    <div>
      {tittleJob?.map((Detial, index) => {
        return (
          <div key={index} className="col-3  fiverr__item">

            <Card
              hoverable
              style={{ width: 340 }}
              cover={<img alt="example" src={Detial.image} />}
            >
              <Meta title={Detial.name} description="www.instagram.com" />
            </Card>,


          </div>
        )
      })}
    </div>
  )
}
