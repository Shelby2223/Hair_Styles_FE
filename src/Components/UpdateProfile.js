import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './UpdateProfile.css';


const UpdateProfile = () => {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [oldPasswordError, setOldPasswordError] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/users/${id}`
        );

        console.log(response.data);
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  console.log(users);
  if (!users) {
    return <div>Loading...</div>;
  }

  const handleInputChange = (event, field) => {
    const updatedValue = event.target.value;
    setUsers((prevUsers) => ({
      ...prevUsers,
      [field]: updatedValue,
    }));
  };

  const handleUpdate = () => {
    const updatedData = {
      user_name: users.user_name,
      user_email: users.user_email,
      user_phone: users.user_phone,
      user_address: users.user_address,
      user_password: users.user_password,
    };
    axios
      .put(`http://127.0.0.1:8000/api/users/${id}`, updatedData)
      .then((response) => {
        console.log("Data updated successfully!", response.data);
        alert("Cập nhật thành công");
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  const handlePasswordUpdate = () => {
    if (!oldPassword || !newPassword || !confirmNewPassword) {
      alert("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      alert("Mật khẩu mới và xác nhận mật khẩu mới không khớp.");
      return;
    }

    if (oldPassword !== users.user_password) {
      setOldPasswordError(true);
      return;
    }
    setOldPasswordError(false);

    const updatedDataPassword = {
      user_name: users.user_name,
      user_email: users.user_email,
      user_phone: users.user_phone,
      user_address: users.user_address,
      user_password: newPassword,
    };
    axios
      .put(`http://127.0.0.1:8000/api/users/${id}`, updatedDataPassword)
      .then((response) => {
        console.log("Cập nhật dữ liệu thành công!", response.data);
        alert("Cập nhật mật khẩu thành công");
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Lỗi khi cập nhật mật khẩu:", error);
      });
  };
  return (
    <section className="py-5 my-5">
      <div className="container">
        <div className="bg-white shadow rounded-lg d-block d-sm-flex">
          <div className="profile-tab-nav border-right">
            <div className="p-4">
              <div className="img-circle text-center mb-3">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="Image"
                  className="shadow"
                />
              </div>
              <h4 className="text-center">Kiran Acharya</h4>
            </div>
            <div
              className="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                className="nav-link active"
                id="account-tab"
                data-toggle="pill"
                href="#account"
                role="tab"
                aria-controls="account"
                aria-selected="true"
              >
                <i className="fa fa-home text-center mr-1" />
                Profile
              </a>
              <a
                className="nav-link"
                id="password-tab"
                data-toggle="pill"
                href="#password"
                role="tab"
                aria-controls="password"
                aria-selected="false"
              >
                <i className="fa fa-key text-center mr-1" />
                Password
              </a>
            </div>
          </div>
          <div className="tab-content p-4 p-md-5" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="account"
              role="tabpanel"
              aria-labelledby="account-tab"
            >
              <h3 className="mb-4">Profile Settings</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={users.user_name}
                      onChange={(event) =>
                        handleInputChange(event, "user_name")
                      }
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={users.user_email}
                      onChange={(event) =>
                        handleInputChange(event, "user_email")
                      }
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={users.user_phone}
                      onChange={(event) =>
                        handleInputChange(event, "user_phone")
                      }
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={users.user_address}
                      onChange={(event) =>
                        handleInputChange(event, "user_address")
                      }
                    />
                  </div>
                </div>
              </div>
              <div>
                <button className="btn btn-primary" onClick={handleUpdate}>
                  Update
                </button>
                <button className="btn btn-light">Cancel</button>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="password"
              role="tabpanel"
              aria-labelledby="password-tab"
            >
              <h3 className="mb-4">Password Settings</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Old password</label>
                    <input
                      type="password"
                      className={`form-control ${
                        oldPasswordError ? "is-invalid" : ""
                      }`}
                      id="oldPassword"
                      value={oldPassword}
                      onChange={(event) => setOldPassword(event.target.value)}
                    />
                    {oldPasswordError && (
                      <div className="invalid-feedback">
                        Mật khẩu cũ không chính xác.
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>New password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="newPassword"
                      value={newPassword}
                      onChange={(event) => setNewPassword(event.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Confirm new password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmNewPassword"
                      value={confirmNewPassword}
                      onChange={(event) =>
                        setConfirmNewPassword(event.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
              <div>
                <button
                  className="btn btn-primary"
                  onClick={handlePasswordUpdate}
                >
                  Update
                </button>
                <button className="btn btn-light">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateProfile;
