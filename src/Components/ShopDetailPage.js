import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./detail1.css";
import "./Start.css";
import { Link } from "react-router-dom";

const ShopDetailPage = () => {
  const { shop_id } = useParams();
  const [product, setProduct] = useState(null);
  const [combos, setCombos] = useState(null);
  const [services, setServices] = useState(null);
  const [stylists, setStylists] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch shop details
        const shopResponse = await axios.get(
          `http://127.0.0.1:8000/api/shops/${shop_id}`
        );
        setProduct(shopResponse.data);

        // Fetch combo list
        const combosResponse = await axios.get(
          `http://127.0.0.1:8000/api/combo/${shop_id}`
        );
        setCombos(combosResponse.data.combo);

        // Fetch services for the shop
        const servicesResponse = await axios.get(
          `http://127.0.0.1:8000/api/service_shop_id/${shop_id}`
        );
        setServices(servicesResponse.data.services);

        // Fetch stylists for the shop
        const stylistsResponse = await axios.get(
          `http://127.0.0.1:8000/api/style/${shop_id}`
        );
        setStylists(stylistsResponse.data.stylist);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [shop_id]);

  const handleLoginClick = (event) => {
    if (!isLoggedIn) {
      event.preventDefault();
      alert("Vui lòng đăng nhập để tiếp tục");
    }
  };

  return (
    <>
    {product && (
      <section className="header container" id="header">
        <div
          className="banner"
          id="banner"
          style={{
            height: 500,
            width: 700,
            margin: 30,
            backgroundImage: `url('../assets/img/shops/${product.shop_image}')`,
          }}
        ></div>
        <div className="content_shop1" id="content_shop1">
          <h3 className="h3content">{product.shop_name}</h3>
          <span className="phone">Số điện thoại: {product.shop_phone}</span>
          <div className="star" id="star">
            {isLoggedIn ? (
              <Link to={`/Rating/${shop_id}`} className="fas fa-star s1">
                <p>Đánh giá: 5.0</p>
              </Link>
            ) : (
              <Link
                to={"/login"}
                className="fas fa-star s1"
                onClick={handleLoginClick}
              >
                <p>Đánh giá: 5.0</p>
              </Link>
            )}
          </div>
        </div>
      </section>
    )}
  
    {combos && combos.length > 0 && (
      <section className="body container" id="combo-section">
        <h2>Combo</h2>
        <br></br>
        <div className="" id="combo-cards">
          <div
            className="row"
            style={{ marginLeft: "30px", marginRight: "30px" }}
          >
            {combos.map((combo) => (
              <div className="col-md-4 " key={combo.combo_id}>
                <div className="card" id={`combo-${combo.combo_id}`}>
                  <img
                    className="card-img-top"
                    src={`../assets/img/combo/${combo.combo_image}`}
                    alt=""
                  />
                  <div className="card-overlay">
                    <h5 className="card-title" style={{marginTop:10}}>{combo.combo_name}</h5>
                    <p className="card-description" style={{fontSize:13}}>{combo.combo_description}</p>
                    <p>
                      <strong style={{color:"#d2691e"}}><b style={{color:"#d2691e"}}>{combo.combo_price}.00VNĐ</b></strong>
                    </p>
                    <button className="button">Order Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )}
  
    {services && services.length > 0 && (
      <section className="body container" id="services-section">
        <div className="">
          <h2>Services</h2> <br></br>
          <div
            className="row"
            style={{ marginLeft: "30px", marginRight: "30px" }}
          >
            {services.map((service) => (
              <div className="col-md-4" key={service.service_id}>
                <div className="card" id={`service-${service.service_id}`}>
                  <img
                    src={`../assets/img/service/${service.service_image}`}
                    alt={service.service_name}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{service.service_name}</h5>
                    <p className="card-text" > <b style={{color:"#d2691e"}}>{service.service_price}VNĐ</b></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )}
  
    {stylists && stylists.length > 0 && (
      <section className="body container" id="stylists-section">
        <div className="">
          <h2>Stylists</h2> <br></br>
          <div
            className="row"
            style={{ marginLeft: "30px", marginRight: "30px" }}
          >
            {stylists.map((stylist) => (
              <div className="col-md-4" key={stylist.stylist_id}>
                <div className="card" id={`stylist-${stylist.stylist_id}`}>
                  <img
                    src={`../assets/img/stylist/${stylist.stylist_image}`}
                    alt={stylist.stylist_name}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontSize: 15 }}>
                      {stylist.stylist_name}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )}
  </>
  
  );
};

export default ShopDetailPage;
