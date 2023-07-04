
import React from 'react';
import { Helmet } from 'react-helmet';

// import '../css/material-dashboard.css';
import '../css/nucleo-icons.css';
import '../css/nucleo-svg.css';
import { Link } from 'react-router-dom';


const Sidenav = () => {
  const hiddenheaderandfooteradmin = () =>{
    localStorage.setItem('setHeaderAndFooterAdmin', 0);
    localStorage.setItem('setHeaderAndFooterHomePage', 1);
  }
  return (



    <div className="g-sidenav-show bg-gray-200">

      <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark" id="sidenav-main">
        <div className="sidenav-header">
          <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
          <a className="navbar-brand m-0" href="#" target="_blank" rel="noopener noreferrer">
            <img src="https://th.bing.com/th?id=OIP.eHJlYP0qP_1YyX4mPkf9kwHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className="navbar-brand-img h-100" alt="main_logo" />
            <span className="ms-1 font-weight-bold text-white">Material Dashboard 2</span>
          </a>
        </div>

        <hr className="horizontal light mt-0 mb-2" />
        <div className="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
          <ul className="navbar-nav">
            <li class="nav-item">

              <Link to="DashBoard">  <a class="nav-link text-white ">
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="material-icons opacity-10">dashboard</i>
                </div>
                <span class="nav-link-text ms-1">Dashboard</span>
              </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="BarberShop"> <a className="nav-link text-white active bg-gradient-primary" >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">

                  <i class="material-icons opacity-10">store</i>

                </div>
                <span className="nav-link-text ms-1">BarberShop</span>
              </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="Notification"> <a class="nav-link text-white " >
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="material-icons opacity-10">notifications</i>
                </div>
                <span class="nav-link-text ms-1">Notifications</span>
              </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="Income"> <a class="nav-link text-white " href="../pages/notifications.html">
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">receipt_long</i>

                </div>
                <span class="nav-link-text ms-1">Income Statistics</span>
              </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="Client">  <a class="nav-link text-white " href="../pages/notifications.html">
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="material-icons opacity-10">airline_seat_recline_normal</i>


                </div>
                <span class="nav-link-text ms-1">Client</span>
              </a>
              </Link>
            </li>



            <li className="nav-item mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Account pages</h6>
            </li>
            <li class="nav-item">
                <a href='/' onClick={hiddenheaderandfooteradmin} class="nav-link text-white">
                  <span class="nav-link-text ms-1">HomePage</span>
                </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  )

}


export default Sidenav;