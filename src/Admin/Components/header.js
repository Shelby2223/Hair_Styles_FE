

import '../css/nucleo-icons.css';
import '../css/nucleo-svg.css';

import { Helmet } from 'react-helmet';

// import '../css/material-dashboard.css';
const AdminHeader = () => {

  return (

    <div className="g-sidenav-show bg-gray-200">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
          rel="stylesheet"
        />
      </Helmet>
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">

        <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" style={{ background: 'black' }} id="navbarBlur" data-scroll="true">
          <div className="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                <li className="breadcrumb-item text-sm"><a className="opacity-5 text-dark" href="javascript:;">Pages</a></li>
                <li className="breadcrumb-item text-sm text-dark active" aria-current="page">Billing</li>
              </ol>
              <h6 className="font-weight-bolder mb-0">Billing</h6>
            </nav>
            <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
              <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                <div className="input-group input-group-outline">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <ul className="navbar-nav justify-content-end">
                <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                  <a href="javascript:;" className="nav-link text-header p-0">
                    <div className="d-flex align-items-center d-lg-none">
                      <i className="material-icons text-header">notifications</i>
                    </div>
                  </a>
                </li>
                <li className="nav-item px-3 d-flex align-items-center">
                  <a href="javascript:;" className="nav-link text-header p-0">
                    <div className="d-flex align-items-center">
                      <i className="material-icons text-header">language</i>
                      <span className="text-header d-none d-sm-inline-block">EN</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item dropdown pe-2 d-flex align-items-center">
                  <a href="javascript:;" className="nav-link text-header p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    <div className="d-flex align-items-center">
                      <i className="material-icons text-header">settings</i>
                      <span className="text-header d-none d-sm-inline-block">Settings</span>
                    </div>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                    <li className="dropdown-item">
                      <a className="dropdown-link" href="javascript:;">Action</a>
                    </li>
                    <li className="dropdown-item">
                      <a className="dropdown-link" href="javascript:;">Another action</a>
                    </li>
                    <li className="dropdown-item">
                      <a className="dropdown-link" href="javascript:;">Something else here</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item d-none d-xl-block">
                  <a href="javascript:;" className="nav-link text-header p-0">
                    <div className="d-flex align-items-center" >
                      <i className="material-icons text-header" >notifications</i>
                      <span className="badge badge-sm bg-gradient-danger ms-2">3</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item dropdown pe-2 d-none d-md-block">
                  <a href="javascript:;" className="nav-link dropdown-toggle text-header p-0" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    <div className="d-flex align-items-center">
                      <img src="https://th.bing.com/th?id=OIP.4P9EKDRxL8wqhl35uaDK6gHaJQ&w=223&h=279&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className="avatar avatar-sm me-2" alt="user_img" />
                      <span className="text-header d-none d-sm-inline-block">John Doe</span>
                    </div>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton2">
                    <li className="dropdown-item">
                      <a className="dropdown-link" href="javascript:;">Action</a>
                    </li>
                    <li className="dropdown-item">
                      <a className="dropdown-link" href="javascript:;">Another action</a>
                    </li>
                    <li className="dropdown-item">
                      <a className="dropdown-link" href="javascript:;">Something else here</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>


      </main>
    </div>

  )

}
export default AdminHeader;