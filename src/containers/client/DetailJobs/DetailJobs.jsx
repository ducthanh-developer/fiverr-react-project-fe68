import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetJobTittle, actGetComment } from "./modules/action"
import { Card } from 'antd';
import { GithubFilled, StarFilled } from '@ant-design/icons';
import "../DetailJobs/DetailJobs.scss"
import { Checkbox, Button } from 'antd';
import Slider from "react-slick";
import fiverrApi from "apis/fiverrApi";
import { actDatCongViec } from "./BookingJob/modules/action";
import { ThongTinDat } from "_core/models/ThongTinDat";

export default function DetailJobs(props) {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  const dispatch = useDispatch();
  const { tittleJob, commentJob } = useSelector((state) => state.tittleJobReducer);

  console.log("object", commentJob);
  useEffect(() => {
    dispatch(actGetJobTittle(props.match.params.id));
    dispatch(actGetComment(props.match.params.id))
  }, []);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <div className="container detailjob">
      <div className="row">
        <div className="col-12 col-lg-7 detailjob__right">
          <div>
            <div className="minimalist"> I will design 3 flat minimalist logo design </div>
            <div className="infor">
              <i><GithubFilled /></i>
              <span className="Seller">Top Rated Seller</span>
              <span className="Level">Level 2 Seller | </span>
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
                <Slider {...settings}>
                  <div>
                    <img alt="example" src={Detial.image} style={{ width: 590 }} />
                  </div>

                </Slider>
              </div>
            )
          })}

          <div className="container comment">
            <h3>About This Gig </h3>
            <h6>Top Rated Seller with all positive reviews</h6>
            <h5>Hello,</h5>
            <div>Want a custom website built for your business? Or Having trouble in recognizing or fixing
            </div>
            <div>
              the issues/bugs in your existing website/blog. It is not a problem because I'm here to fix any
            </div>
            <div>issues in HTML, CSS,   Bootstrap jquery, javascript, PHP or database(Mysql/Oracle). </div>
            <h5>Things I offer:</h5>
            <div className="row">

            </div>
          </div>
        </div>
        <div className=" col-12 col-lg-5  detailjob__left">
          <Card
            hoverable
            style={{ width: 437, height: 500 }} >
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
                              thongTinDat.price = job.price;
                              console.log("Id", thongTinDat._id)
                              thongTinDat.name = job.name;
                              thongTinDat.image = job.image;
                              thongTinDat.localSellers = job.localSellers;
                              thongTinDat.proServices = job.proServices;
                              thongTinDat.onlineSellers = job.onlineSellers;
                              thongTinDat.deliveryTime = job.deliveryTime;
                              thongTinDat.status = job.status;

                              thongTinDat.taiKhoanNguoiDat = job.usersBooking;
                              console.log("thongtindat", thongTinDat);
                              dispatch(actDatCongViec(props.match.params.id));
                              // fiverrApi.fetchBookingJob(props.match.params.id)
                              // .then((res) => {
                              //   console.log(res)
                              //   alert("Booking")
                              // })
                              // .catch(err => console.log(err));
                            }}
                              block>
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

      {/* //comment */}
      {/* <div className="container comment">
        <h3>About This Gig </h3>
        <h6>Top Rated Seller with all positive reviews</h6>
        <h5>Hello,</h5>
        <div>Want a custom website built for your business? Or Having trouble in recognizing or fixing
        </div>
        <div>
          the issues/bugs in your existing website/blog. It is not a problem because I'm here to fix any
        </div>
        <div>issues in HTML, CSS,   Bootstrap jquery, javascript, PHP or database(Mysql/Oracle). </div>
        <h5>Things I offer:</h5>
        <div className="row">

        </div>
      </div> */}
    </div>
    </div>
    
  )
}
