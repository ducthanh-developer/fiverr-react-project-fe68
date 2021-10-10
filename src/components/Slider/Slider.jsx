



import React from 'react'
import "./Sliders.scss"
import { Input, Space } from 'antd';

function Slider() {
    const { Search } = Input;
    const onSearch = value => console.log(value);
    return (
        <div>
            <div id="carouselExampleControls" className="carousel carousel__content  " data-ride="carousel">
                <div className="carousel-inner carousel__images">
                    <div className="carousel-item active images__item">
                        <img src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/d14871e2d118f46db2c18ad882619ea8-1599835783966/bg-hero-3-1792-x1.png" alt="" />
                    </div>
                    <div className="carousel-item images__item">
                        <img src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/93085acc959671e9e9e77f3ca8147f82-1599427734108/bg-hero-4-1792-x1.png" alt="" />
                    </div>
                    <div className="carousel-item images__item">
                        <img src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/93085acc959671e9e9e77f3ca8147f82-1599427734108/bg-hero-4-1792-x1.png" alt="" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className="Sliders__search ">
                <div className="Sliders__search__item">
                    <h1>Find the perfect <span>freelance</span></h1>
                    <h1>services for your business</h1>               </div>
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
        </div>
    )
}
export default Slider;