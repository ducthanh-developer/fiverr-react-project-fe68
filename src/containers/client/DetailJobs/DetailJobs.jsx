import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetJobTittle } from "./modules/action"
import { Card } from 'antd';
import { GithubFilled, StarFilled } from '@ant-design/icons';
import "../DetailJobs/DetailJobs.scss"
import { Checkbox, Button } from 'antd';
import { actDatCongViec } from "./BookingJob/modules/action";
import { ThongTinDat } from "_core/models/ThongTinDat";

export default function DetailJobs(props) {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  console.log("props", props)
  const dispatch = useDispatch();
  const { tittleJob, _id } = useSelector((state) => state.tittleJobReducer);
  console.log("gg", tittleJob);
  useEffect(() => {
    dispatch(actGetJobTittle(props.match.params.id));
  }, []);


  return (
    <div className="container detailjob">
      <div className="row">
        <div className="col-12 col-lg-8 detailjob__right">
          <div>
            <div className="minimalist">
              I will design 3 flat minimalist logo design
            </div>
            <div className="infor">
              <i><GithubFilled /></i>
              <span className="Seller">
                Top Rated Seller
              </span>
              <span className="Level">
                Level 2 Seller |
              </span>

              <span className="Star">
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
              </span>
            </div>
            <hr></hr>
            <div className="exceptional">
              <img src="../../images/market/1.png" alt="" />
              <span className="People ">People keep coming back?</span>
              <span> afzaal1721 has an exceptional number of repeat buyers.</span>
            </div>
          </div>
          <hr></hr>
          {tittleJob?.map((Detial, index) => {
            return (
              <div key={index}>
                <img alt="example" src={Detial.image} style={{ width: 590 }} />
              </div>
            )
          })}
        </div>


        <div className=" col-12 col-lg-4  detailjob__left">
          <Card
            hoverable
            style={{ width: 437, height: 500 }}

          >
            <div className="detailjob__tabs">
              <div className=" mia">
                <input id="tab-1" type="radio" name="tabs" defaultChecked />
                <label htmlFor="tab-1" className="tabs1">Basic</label>
                <input id="tab-2" type="radio" name="tabs" />
                <label htmlFor="tab-2" className="tabs1">Standard</label>
                <input id="tab-3" type="radio" name="tabs" />
                <label htmlFor="tab-3" className="tabs1">Premium
                </label>
                <div className="content">
                  <div id="content-1">
                    <div className="container">
                      <div className="row">
                        <div className="col-8 Standard ">
                          Basic
                        </div>
                        <div className="col-2 ">
                          {tittleJob?.map((Detial, index) => {
                            return (
                              <div key={index} className="price">
                                {Detial.price}$
                              </div>
                            )
                          })}
                        </div>
                      </div>
                      <div className="application">
                        Create a simple web application for your business.
                      </div>
                    </div>
                    <div className="container detailjobs__check">
                      <div className="row">
                        <div className="col-5">
                          30 Day dellverry
                        </div>
                        <div className="col-7">
                          1 revisions
                        </div>
                      </div>
                      {tittleJob?.map((job, index) => {
                        return (
                          <div className="checked__jobs" key={index}>
                            <nav className="">
                              <Checkbox onChange={onChange} checked={job.proServices} >proServices</Checkbox>
                            </nav>
                            <nav>
                              <Checkbox onChange={onChange} checked={job.onlineSellers} >onlineSellers</Checkbox>
                            </nav>
                            <nav>
                              <Checkbox onChange={onChange} checked={job.localSellers}>localSellers</Checkbox>
                            </nav>
                            <nav>
                              <Checkbox onChange={onChange} checked={job.deliveryTime}>deliveryTime</Checkbox>
                            </nav>
                            <nav>
                              <Checkbox onChange={onChange} checked={job.status}>status</Checkbox>
                            </nav>
                            <Button onClick={() => {
                              const thongTinDat = new ThongTinDat();
                              thongTinDat._id = props.match.params.id;

                              console.log("thongtindat",thongTinDat );
                              dispatch(actDatCongViec( thongTinDat));



                            }} type="primary" block>
                              {job.price}$
                            </Button>
                          </div>
                        )
                      })}

                    </div>
                  </div>
                  <div id="content-2">
                    <h2>Tab-2</h2>
                    <p>
                      This is tab2
                    </p>
                  </div>
                  <div id="content-3">
                    <h2>Tab-3</h2>
                    <p>
                      This is tab3
                    </p>
                  </div>
                </div>
              </div>


            </div>
          </Card>,

        </div>
      </div>
    </div>
  )
}
