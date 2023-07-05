import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ShowProducts = () => {
    const [searchResults, setSearchResults] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/shops');
            setSearchResults(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div className='showproduct'>
                <br />
                <h2>Sản phẩm</h2>
              
                <br /><br />
                
                <div className="row">
                    {searchResults.map((e) => (
                        <div className="col-md-4" key={e.shop_id}>
                            <div className="card">
                                <img
                                    src={`../assets/img/shops/${e.shop_image}`}
                                    alt=""
                                    className="card-img-top"
                                />
                                <div className="card-body">
                                    <h4 className="card-title">{e.shop_name}</h4>
                                    <p className="card-text"> Phone: {e.shop_phone}</p>
                                    <p className="card_price">{e.user}</p>
                                    <div className="function">
                                        <Link className="button" to={`/ShopDetailPage/${e.shop_id}`}>
                                            Chi tiết Shop
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShowProducts;
