import React from 'react'
import Slider from "react-slick";
import "../Slider/Sliders.scss";
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons'

// import Slider 
export default function Sliderr() {
    const settings = {
        // dots: true,
        // infinite: true,
        // speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const { Search } = Input;
   
    const onSearch = value => console.log(value);
    return (
        <div>
            <div className="Sliders ">
                <Slider {...settings}>
                    <div className="">
                        <img src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/d14871e2d118f46db2c18ad882619ea8-1599835783966/bg-hero-3-1792-x1.png" alt="" />
                        
                    </div>
                    <div className="">
                        <img src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/93085acc959671e9e9e77f3ca8147f82-1599427734108/bg-hero-4-1792-x1.png" alt="" />
                    </div>
                </Slider>
            </div>


            <div className="Sliders__search ">
                <div>
                    <h1>Find the perfect</h1>
                    <h1> freelance</h1>
                </div>
                <Space direction="vertical">
                    <div className="">
                        <Search
                            className="Search"
                            placeholder="input search text"
                            allowClear
                            enterButton="Search"
                            size="large"
                            onSearch={onSearch}

                        />
                    </div>
                </Space>,
            </div>

            <div className="Sliders__bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-2 Sliders__bottom__item">
                            Trusted by:
                        </div>
                        <div className="col-2 Sliders__bottom__item">
                            facebook
                        </div>
                        <div className="col-2 Sliders__bottom__item">
                            Google

                        </div>
                        <div className="col-2 Sliders__bottom__item">
                            Google

                        </div>
                        <div className="col-2 Sliders__bottom__item">
                            Google

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
