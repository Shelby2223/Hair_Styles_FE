import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ShopDetailPage = () => {
  const { shop_id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/shops/${shop_id}`);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [shop_id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
      <br />
      <div className='row'>
        <div className='col-md-4'>
          <div className='image'>
            <img src={product.shop_image} alt={product.shop_name} className="card-img-top" />
          </div>
        </div>
        <div className='col-md-8'>
          <div className='content'>
            <h2 className="card-title">{product.shop_name}</h2><br />
            <p className="card-text">{product.shop_phone}</p>
            <p className="card_price">{product.shop_rating}</p>
          </div>
          <div className='function'>
            <button className='button'>Đặt hàng</button>
            <p>{product.price}</p>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default ShopDetailPage;