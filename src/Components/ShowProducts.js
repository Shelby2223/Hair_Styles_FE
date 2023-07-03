import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const ShowProducts = () => {
    const [data, setData] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/shops');
            setData(response.data);
            setSearchResults(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
            <div className='showproduct'>
                <br />
                <h3 className="colection">DANH SÁCH SẢN PHẨM PHỤC VỤ</h3>
                <br /><br />
                <div className="row">
                    {data.map((e) => (
                        <div className="col-md-3" key={e.id}>
                            <div className="card">
                                <img src={e.shop_image} alt={e.shop_name} className="card-img-top" />
                                <div className="card-body">
                                    <h4 className="card-title">{e.shop_name}</h4>
                                    <p className="card-text">{e.shop_rating}</p>
                                    <p className="card_price"> {e.user}</p>
                                    <div className="function">
                                        <Link className='button' to={`/ShopDetailPage/${e.shop_id}`} >Chi tiết Shop</Link>
                                        <button className='button'>Đặt ngay</button>
                                        {console.log(e.shop_id)};
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ShowProducts;