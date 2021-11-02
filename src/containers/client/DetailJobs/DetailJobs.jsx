import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetJobTittle, actGetComment } from "./modules/action"
import { Card } from 'antd';
import { GithubFilled, StarFilled } from '@ant-design/icons';
import "../DetailJobs/DetailJobs.scss"
import { Checkbox, Button } from 'antd';
import Slider from "react-slick";
import { actDatCongViec } from "./BookingJob/modules/action";
import { ThongTinDat, } from "_core/models/ThongTinDat";

export default function DetailJobs(props) {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  const dispatch = useDispatch();
  const { tittleJob, commentJob } = useSelector((state) => state.tittleJobReducer);
  console.log("tittleJob", tittleJob);
  console.log("commentJob", commentJob);

  const { jobId } = props.match.params
  console.log("jobId", jobId);
  useEffect(() => {
    dispatch(actGetJobTittle(jobId));
    dispatch(actGetComment(jobId));
  }, [dispatch, jobId]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="Detailjob__checkout">
      <div className=" detailjob container ">
        <div className="row">
          <div className="col-12 col-lg-7 detailjob__right container">
            <div>
              <div className="minimalist"> I will design 3 flat minimalist logo design </div>
              <div className="infor">
                <i><GithubFilled /></i>
                <span className="Seller">Top Rated Seller</span>
                <span className="Level">Level 2 Seller  </span>|
                <span className="Star">
                  <span className="">
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />/
                    <span className="rating">{tittleJob.rating}</span>
                    <span className="name">{tittleJob.name}</span>
                  </span>

                </span>
              </div>
              <hr className="hr"></hr>
              <div className="exceptional">
                <img src="../../images/market/1.png" alt="" />
                <span className="People ">People keep coming back?</span>
                <span> afzaal1721 has an exceptional number of repeat buyers.</span>
              </div>
            </div>
            <hr></hr>
            <div >
              <Slider {...settings}>
                <div>
                  <img alt="example" src={tittleJob.image} style={{ width: 590 }} />
                </div>
              </Slider>
            </div>
          </div>
          <div className=" col-12 col-lg-4  detailjob__left container">
            <Card
              hoverable
              style={{ width: 437, height: 550 }} >
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
                            <div className="price">
                              {tittleJob.price}$
                            </div>
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
                       
                        <div className="checked__jobs" >
                          <nav className="">
                            <Checkbox onChange={onChange} checked={tittleJob.proServices} >proServices</Checkbox>
                          </nav>
                          <nav>
                            <Checkbox onChange={onChange} checked={tittleJob.onlineSellers} >onlineSellers</Checkbox>
                          </nav>
                          <nav>
                            <Checkbox onChange={onChange} checked={tittleJob.localSellers}>localSellers</Checkbox>
                          </nav>
                          <nav>
                            <Checkbox onChange={onChange} checked={tittleJob.deliveryTime}>deliveryTime</Checkbox>
                          </nav>
                          <nav>
                            <Checkbox onChange={onChange} checked={tittleJob.status}>status</Checkbox>
                          </nav>
                          <Button onClick={() => {
                            const thongTinDat = new ThongTinDat();
                            thongTinDat._id = props.match.params.id;
                            thongTinDat.price = tittleJob.price;
                            console.log("Id", thongTinDat._id)
                            thongTinDat.name = tittleJob.name;
                            thongTinDat.image = tittleJob.image;
                            thongTinDat.localSellers = tittleJob.localSellers;
                            thongTinDat.proServices = tittleJob.proServices;
                            thongTinDat.onlineSellers = tittleJob.onlineSellers;
                            thongTinDat.deliveryTime = tittleJob.deliveryTime;
                            thongTinDat.status = tittleJob.status;
                            thongTinDat.taiKhoanNguoiDat = tittleJob.usersBooking;
                            console.log("thongtindat", thongTinDat);
                            dispatch(actDatCongViec(props.match.params.jobId));

                          }}
                            block >
                            <span className="mr-10">Continue (${tittleJob.price})</span>
                          </Button>
                          <div className="Compare__package">Compare package</div>
                        </div>
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
        <div className="comment">
          <h5>About This Gig </h5>
          <h6>Top Rated Seller with all positive reviews</h6>
          <div className="hello">Hello,</div>
          <div className="content">Want a custom website built for your business? Or Having trouble in recognizing or fixing</div>
          <div className="content">Want a custom website built for your business? Or Having trouble in recognizing  </div>
          <div className="content">or fixing any issues in HTML, CSS,   Bootstrap jquery, javascript, PHP or database(Mysql/Oracle). </div>
          <h5 className="offer">Things I offer:</h5>
          <div className="information_detailjob">
            <ul>
              <li>CRM development</li>
              <li>E-commerce&nbsp;Development</li>
              <li>Custom website development (both front-end and back-end) with Laravel, PHP and MySQL</li>
              <li>Vue.js, HTML, CSS, Boostrap, Javascript/Jquery, PHP single/multi web page,</li>
              <li>Complete website creation from scratch using Laravel Rest Api and vue.js</li>
              <li>Web Application with proper exception handling</li>
              <li>Can work with APIs, integrate API's in your applications.</li>
              <li>Responsive - Mobile Friendly sites.</li><li>Great UI/UX for&nbsp;your site.</li>
              <li>PSD to HTML, XD to HTML&nbsp;or any other design to HTML with best quality and pixel perfect design</li>
              <li>Fix issues in&nbsp;front-end or add some changes to it.</li>
              <li>Bug Investigation and Bug fixing.</li>
              <li>MySQL database design and integration in websites.</li>
              <li>MySQL database bugs fixing and integration issues fixing.&nbsp;</li>
            </ul>
          </div>
          <div className="satisfied">I will do the work until you are satisfied with fast and responsive communication. </div>
          <hr></hr>
          <div className="row comment__bottom">
            <div className="col-4">
              <div className="Programming">Programming Language</div>
              <div className="php">PHP</div>
            </div>
            <div className="col-8">
              <div className="Expertise">Expertise </div>
              <div className="Cross__Browser">Cross Browser</div>
              <div className="Cross__Browser">Cross Browser</div>
              <div className="Cross__Browser">Cross Browser</div>
            </div>
          </div>
          <div className="About">About The Seller</div>
          <div className="row contact__user">
            <div className="col-1 ">
              <img src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/a094e2f0e126604aaaef8b8cefe2b077-1580057123471/8863736e-6ad6-4a99-8c37-d300e714b164.png" alt="" style={{ width: 100 }} />
            </div>
            <div className="col-10">
              <div className="nofilrazzaq">nofilrazzaq
              </div>
              <div className="Web__Developer">Web Developer
              </div>
              <span className="Star__comment">
                {/* {tittleJob?.map((job, index) => {
                  return (
                    <span key={index} className="">
                      <StarFilled />
                      <StarFilled />
                      <StarFilled />
                      <StarFilled />
                      <StarFilled />
                      <StarFilled />
                      <span className="rating">{job.rating}</span>
                    </span>
                  )
                })} */}
              </span>
              <div className="contact"> <button>Contact me</button>
              </div>
            </div>
            <hr></hr>

          </div>

        </div>
        <div className="user__comment">
          <div className="comment__user__name">
            <div><img src="../../images/Market/3.png" alt="..." />
              <span>cmtranslation</span>
            </div>
            <div className="comment__item">Very easy to communicate with and delivered the project early.
            </div>
            <div className="comment__item">
              The job was a custom modification of an existing JavaScript discord bot using youtube APIs.
            </div>
            <div className="comment__item">
              The bot is now working with the specified modifications.</div>
            <div className="Published">Published 2 months ago</div>
          </div>
          {commentJob?.map((item, index) => {
            return (
              <div key={index}>{item.user.name}</div>
            )
          })}

          <div>{commentJob?.map((item, index) => {
            return (
              <div key={index}>{item.user.skill?.map((kynang, index) => {
                return (
                  <div>{kynang}</div>
                )
              })}</div>
            )
          })}</div>
        </div>
      </div>
    </div>

  )
}
