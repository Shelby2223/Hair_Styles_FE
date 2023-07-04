import '../css/material-dashboard.css';
import '../css/nucleo-icons.css';
import '../css/nucleo-svg.css';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as SolidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as RegularStar } from '@fortawesome/free-regular-svg-icons';

import axios from 'axios';


const BarberShop = () => {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    // Gọi API để lấy dữ liệu ratings
    fetch('http://127.0.0.1:8000/api/get-ratings')
      .then(response => response.json())
      .then(data => setRatings(data));
  }, []);

  const renderStars = (numStars) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= numStars) {
        stars.push(<FontAwesomeIcon icon={SolidStar} className="rating-star solid-star" />);
      } else {
        stars.push(<FontAwesomeIcon icon={RegularStar} className="rating-star regular-star" />);
      }
    }
    return stars;
  };

  const handleDelete = async (id, name) => {
    if (window.confirm(`Bạn có muốn xóa ${name}`)) {
      try {
        await axios.get(`http://127.0.0.1:8000/api/delete-ratings/${id}`, {});
        alert("Xóa thành công");
        fetch('http://127.0.0.1:8000/api/get-ratings')
          .then(response => response.json())
          .then(data => {
            setRatings(data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
      } catch (error) {
        console.log(error);
        alert("Xóa không thành công");
      }

    } else {
      alert("Xóa không thành công");
    }
  };



  return (

    <div className="g-sidenav-show bg-gray-200">
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">

        <div className="container-fluid py-4">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card">
                <div className="card-header">
                  <h6>Rating</h6>
                </div>
                <div className="card-body">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Rating ID</th>
                        <th>User ID</th>
                        <th>Shop ID</th>
                        <th>Rating Star</th>
                        <th>Shop Name</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ratings.map(rating => (
                        <tr key={rating.rating_id}>
                          <td>{rating.rating_id}</td>
                          <td>{rating.user_id}</td>
                          <td>{rating.shop_id}</td>
                          <td>{renderStars(rating.rating_star)}</td>
                          <td>{rating.shop_name}</td>
                          <td>
                            <button className="btn btn-danger" onClick={() => handleDelete(rating.rating_id, rating.shop_name)}>Xóa</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>


  );
};

export default BarberShop;
