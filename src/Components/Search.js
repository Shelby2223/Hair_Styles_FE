import React, { useEffect, useState } from "react";
import axios from "axios";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
mapboxgl.accessToken =
  "pk.eyJ1IjoiaG9hbmIyNCIsImEiOiJjbGpnamV4bXowNmFtM2xxaWZnYnEwaWQ4In0.aSnV4rCTGUxjMMEXOnA9iQ";

const Search = () => {
  const [shops, setShops] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [distanceData, setDistanceData] = useState([]);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [filter, setFilter] = useState("");
  const [ratingData, setRatingData] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error(error);
        }
      );
      console.log([latitude, longitude]);
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/shops?search=${searchTerm}`
        );
        setShops(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [searchTerm]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/getdistance",
          {
            latitude: latitude,
            longitude: longitude,
          }
        );
        setDistanceData(response.data.result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [latitude, longitude]);

  useEffect(() => {
    const fetchRatingData = async () => {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/getratingstar"
        );
        setRatingData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (filter === "1") {
      fetchRatingData();
    }
  }, [filter]);

  useEffect(() => {
    if (latitude && longitude && distanceData.length > 0) {
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [longitude, latitude],
        zoom: 12,
      });

      // Add marker for your location
      new mapboxgl.Marker({ color: "blue" })
        .setLngLat([longitude, latitude])
        .addTo(map);

      distanceData.forEach((item) => {
        const {
          latitude: shopLatitude,
          longitude: shopLongitude,
          shop_name,
          shop_phone,
        } = item;

        if (shopLatitude && shopLongitude) {
          new mapboxgl.Marker()
            .setLngLat([shopLongitude, shopLatitude])
            .setPopup(
              new mapboxgl.Popup({ className: 'custom-popup' }).setHTML(
                `<div style="display: flex; flex-direction: column; align-items: center;">
                <img src="https://toplisthanoi.com/wp-content/uploads/2021/05/Thanh-cong.jpg" style="width: 70px; height: 70px;" />
                <div style="font-size:15px;">${shop_name}</div>
                <ul>
                  <li ><b> Cách xa bạn ${item.distance} Kilometers </b></li>
                  <li>Địa chỉ: ${item.address}</li>
                  <li>Số điện thoại ${shop_phone}</li>
                </ul>
              </div>`
              )
            )

            .addTo(map);
        }
      });
    }
  }, [latitude, longitude, distanceData]);

  return (
    <div>

      <div className="container">
        <div>
          <div>
            <div className="row search-options">
              <div className="col-md-6">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearch}
                  className="form-control input-search"
                  placeholder="Search by shop name"
                />
              </div>
              <div className="col-md-6 d-flex justify-content-end">
                <select
                  className="form-select align-self-start select-search"
                  aria-label="Default select example"
                  value={filter}
                  onChange={(e) =>
                    setFilter(e.target.options[e.target.selectedIndex].value)
                  }
                >
                  <option value="">Open this select menu</option>
                  <option value="1">Rating</option>
                  <option value="2">Location</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              {filter === "1" ? (
                ratingData.map((item) => (
                  <div key={item.shop_id}>
                    <div className="shop_name">
                      <Link className="button" to={`/ShopDetailPage/${item.shop_id}`}>
                        {" "}
                        {item.shop_name}
                      </Link>
                    </div>
                    <ul>
                      <li>Shop ID: {item.shop_id}</li>
                      <li>Điện thoại: {item.shop_phone}</li>
                      <li style={{ fontWeight: "bold" }}>
                        Địa chỉ: {item.address}
                      </li>
                      <li style={{ display: "flex" }}>
                        Đánh giá trung bình: {item.avg_rating}
                        {[...Array(5)].map((_, index) => (
                          <span
                            key={index}
                            style={{
                              display: "inline-block",
                              width: 10,
                              height: 20,
                              background: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.44 19'><polygon fill='${
                                index < Math.floor(item.avg_rating)
                                  ? "%23fbbc04"
                                  : "%23999999"
                              }' points='10,15.27 16.18,19 14.54,11.97 20,7.24 12.81,6.63 10,0 7.19,6.63 0,7.24 5.46,11.97 3.82,19'/></svg>") repeat-x`,
                            }}
                          ></span>
                        ))}
                      </li>
                      <li>Số lượt đánh giá: {item.rating_count}</li>
                    </ul>
                  </div>
                ))
              ) : filter === "2" ? (
                <div>
                  <h3>Các cửa hàng cách xa bạn:</h3>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Tên cửa hàng</th>
                        <th>Địa chỉ</th>
                        <th>Điện thoại</th>
                        <th>Khoảng cách (Kilometers)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {distanceData.map((item) => (
                        <tr key={item.shop_id}>
                          <td className="shop_name">
                            {" "}
                            <Link
                              className="button"
                              to={`/shop/${item.shop_id}`}
                            >
                              {" "}
                              {item.shop_name}
                            </Link>
                          </td>
                          <td style={{ fontWeight: "bold" }}>{item.address}</td>
                          <td>{item.shop_phone}</td>
                          <td>{item.distance}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div>
                  {shops.map((shop) => (
                    <div key={shop.shop_id}>
                      <div className="shop_name">
                        <Link className="button" to={`/shop/${shop.shop_id}`}>
                          {" "}
                          {shop.shop_name}
                        </Link>
                      </div>
                      <ul>
                        <li>Tiệm cắt tóc</li>
                        <li style={{ fontWeight: "bold" }}>
                          Địa chỉ: {shop.shop_address}
                        </li>
                        <li>Số điện thoại: {shop.shop_phone}</li>
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="col-md-8">
              <div id="map" style={{ height: "400px", width: "800px" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
