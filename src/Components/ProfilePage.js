import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import axios from "axios";
import './history.css';
const ProfilePage = () => {
  //Lấy dữ liệu api của users
  const [users, setUsers] = useState([]);
  const userID = localStorage.getItem('userID');
  useEffect(() => {
    axios
    .get(
        `http://127.0.0.1:8000/api/users/${userID}`
      )
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // lấy dữ liệu của Histories

  const [history, setHistory] = useState([]);

  // Lấy dữ liệu từ API và cập nhật state 'history'
  useEffect(() => {
    // Gọi API để lấy dữ liệu lịch sử
    // Ví dụ sử dụng Axios:
    axios
      .get("http://127.0.0.1:8000/api/Historis")

      .then((response) => {
        setHistory(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <nav
              aria-label="breadcrumb"
              className="bg-light rounded-3 p-3 mb-4"
            >
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">User</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  User Profile
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: 150 }}
                />
                <h5 className="my-3">{users.user_name}</h5>
                <div className="d-flex justify-content-center mb-2">
                  <Link
                    to={`/update-pages/${users.user_id}`}
                    className="btn btn-primary"
                  >
                    Edit
                  </Link>
                </div>
                <div className="d-flex justify-content-center mb-2">
                  <Link
                    to={`/Paymomo/${users.user_id}`}
                    className="btn btn-primary"
                  >
                    Thanh Toán
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{users.user_name}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{users.user_email}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Phone</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{users.user_phone}</p>
                  </div>
                </div>

                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Address</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{users.user_address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="wrapper rounded">
                <nav className="navbar navbar-expand-lg  d-lg-flex align-items-lg-start">
                  {" "}
                  <a className="navbar-brand" href="#">
                    Transactions{" "}
                    <p className="text-muted pl-1">
                      Welcome to your transactions
                    </p>{" "}
                  </a>{" "}
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    {" "}
                    <span className="navbar-toggler-icon" />{" "}
                  </button>
                </nav>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <ul className="nav nav-tabs w-75">
                    <li className="nav-item">
                      {" "}
                      <a className="nav-link active" href="#history">
                        History
                      </a>{" "}
                    </li>
                  </ul>
                </div>
                <div className="table-responsive mt-3">
                  <table className="table  table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">service_name</th>
                        <th scope="col">Shop</th>
                        <th scope="col">Date</th>
                        <th scope="col" className="text-right">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {history.map((item) => (
                        <tr key={item.history_id}>
                          <td scope="row"> {item.service_name} </td>

                          <td>{item.shop_name}</td>

                          <td className="text-muted">
                            {" "}
                            {item.appointment_date}
                          </td>

                          <td className="d-flex justify-content-end align-items-center">
                            {" "}
                            $52.9{" "}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* <div className="d-flex justify-content-between align-items-center results">
                      {" "}
                      <span className="pl-md-3">
                        Showing<b className="text-white"> 1-7 0f 200 </b>{" "}
                        trasactions
                      </span>
                      <div className="pt-3">
                        <nav aria-label="Page navigation example">
                          <ul className="pagination">
                            <li className="page-item disabled">
                              {" "}
                              <a
                                className="page-link"
                                href="#"
                                aria-label="Previous"
                              >
                                {" "}
                                <span aria-hidden="true">&lt;</span>{" "}
                              </a>{" "}
                            </li>
                            <li className="page-item">
                              {" "}
                              <a className="page-link" href="#" aria-label="Next">
                                {" "}
                                <span aria-hidden="true">&gt;</span>{" "}
                              </a>{" "}
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
