import React, { Component } from 'react';

const HomePage = () => {
    return (
        <div>
            <div className="hero">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="hero-text">
                                <h1>HTML5 Template for Salon Website</h1>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasell nec pretum mi. Curabi ornare velit non. Aliqua metus tortor auctor quis sem.
                                </p>
                                <a className="btn" href="https://htmlcodex.com/barber-shop-template">Download Now</a>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 d-none d-md-block">
                            <div className="hero-image">
                                <img src="img/hero.png" alt="Hero Image" />
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btn-play" data-toggle="modal" data-src="https://www.youtube.com/watch?v=zHDECJy0p7k" data-target="#videoModal">
                        <span />
                    </button>
                </div>
            </div>
            <div className="modal fade" id="videoModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            {/* 16:9 aspect ratio */}
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src id="video" allowscriptaccess="always" allow="autoplay" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;