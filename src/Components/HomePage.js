import React, { Component } from 'react';
import ShowProducts from './ShowProducts';

const HomePage = () => {

    return (
        <>
            <div className="slider-area position-relative fix">
                <div className="slider-active">
                    {/* Single Slider */}
                    <div className="single-slider slider-height d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-9 col-md-11 col-sm-10">
                                    <div className="hero__caption">
                                        <span data-animation="fadeInUp" data-delay="0.2s">
                                            with patrick potter
                                        </span>
                                        <h1 data-animation="fadeInUp" data-delay="0.5s">
                                            Our Hair Style make your look elegance
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Single Slider */}

                </div>
                {/* stroke Text */}
                <div className="stock-text">
                    <h2>Get More confident</h2>
                    <h2>Get More confident</h2>
                </div>
                {/* Arrow */}
                <div className="thumb-content-box">
                    <div className="thumb-content">
                        <h3>make an appointment now</h3>
                        <a href="#">
                            {" "}
                            <i className="fas fa-long-arrow-alt-right" />
                        </a>
                    </div>
                </div>
            </div>
            <ShowProducts></ShowProducts>



        </>
    );
}

export default HomePage;