import React, { Component } from 'react';

const ModelServiceUser = () => {
    return (
        <>
            <div className='model'>
                <div className='overlay'>
                    <>
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="card-title">shop: Shop ABC</h2>
                
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="card-title">dịch vụ: Dịch vụ XYZ</h3>
                                <p className="card-text">Giá: 100.000 VND</p>
                            </div>
                            <div className="col-md-6">
                                <h3 className="card-title">combo: Combo 123</h3>
                                <p className="card-text">Giá: 200.000 VND</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="card-title">stylist: Stylist XYZ</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="card-title">Tổng tiền: 300.000 VND</h3>
                            </div>
                        </div>
                    </>
                </div>
            </div>
        </>
    );
}

export default ModelServiceUser;