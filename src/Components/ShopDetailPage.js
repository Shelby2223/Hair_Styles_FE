
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./detail.css";

const ShopDetailPage = () => {
  const { shop_id } = useParams();
  const [product, setProduct] = useState(null);
  const [combos, setCombos] = useState(null);
  const [services, setServices] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch shop details
        const shopResponse = await axios.get(`http://127.0.0.1:8000/api/shops/${shop_id}`);
        setProduct(shopResponse.data);

        // Fetch combo list
        const combosResponse = await axios.get("http://127.0.0.1:8000/api/combos");
        setCombos(combosResponse.data);

        // Fetch services for the shop
        const servicesResponse = await axios.get(`http://127.0.0.1:8000/api/service_shop_id/${shop_id}`);
        setServices(servicesResponse.data.services);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [shop_id]);

  return (
    <>
      {product && (
        <section className="header" id="header">
          <div className="banner" style={{ backgroundImage: `url('../assets/img/shops/${product.shop_image}')` }}>
            <div className="content_shop1">
              <h3>{product.shop_name}</h3>
              <span className="phone">Số điện thoại: {product.shop_phone}</span>
            </div>
          </div>
        </section>
      )}

      {combos && combos.length > 0 && (
        <section className="body">
          <div className="container" id="top-cards">
            <div className="row">
              {combos.map((combo) => (
                <div className="col-md-3 py-3 py-md-0" key={combo.combo_id}>
                  <div className="card">
                    <img id="image" src={`../assets/img/combo/${combo.combo_image}`} alt="" />
                    <div className="card-overlay">
                      <h5 className="card-title">{combo.combo_name}</h5>
                      <p>{combo.combo_description}</p>
                      <p>
                        <strong>
                          <strike>{combo.combo_price}</strike>
                        </strong>
                      </p>
                      <button>Order Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {services && services.length > 0 && (
        <section className="footer">
          <h3>Services</h3>
          <ul>
            {services.map((service) => (
              <li key={service.service_id}>
                <img src={`../assets/img/service/${service.service_image}`} alt={service.service_name} />
                {service.service_name}
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

export default ShopDetailPage;


// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import "./detail.css";

// const ShopDetailPage = () => {
//   const { shop_id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [combos, setCombos] = useState(null);
//   const [services, setServices] = useState(null);
//   const [stylists, setStylists] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch shop details
//         const shopResponse = await axios.get(`http://127.0.0.1:8000/api/shops/${shop_id}`);
//         setProduct(shopResponse.data);

//         // Fetch combo list
//         const combosResponse = await axios.get(`http://127.0.0.1:8000/api/combos`);
//         setCombos(combosResponse.data);

//         // Fetch services for the shop
//         const servicesResponse = await axios.get(`http://127.0.0.1:8000/api/service_shop_id/${shop_id}`);
//         setServices(servicesResponse.data.services);

//         // Fetch stylists for the shop
//         const stylistsResponse = await axios.get(`http://127.0.0.1:8000/api/stylists`);
//         setStylists(stylistsResponse.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, [shop_id]);

//   return (
//     <>
//       {product && (
//         <section className="header" id="header">
//           <div className="banner" style={{ backgroundImage: `url('../assets/img/shops/${product.shop_image}')` }}>
//             <div className="content_shop1">
//               <h3>{product.shop_name}</h3>
//               <span className="phone">Số điện thoại: {product.shop_phone}</span>
//             </div>
//           </div>
//         </section>
//       )}

//       {combos && combos.length > 0 && (
//         <section className="body">
//           <div className="container" id="top-cards">
//             <div className="row">
//               {combos.map((combo) => (
//                 <div className="col-md-3 py-3 py-md-0" key={combo.combo_id}>
//                   <div className="card">
//                     <img id="image" src={`../assets/img/combo/${combo.combo_image}`} alt="" />
//                     <div className="card-overlay">
//                       <h5 className="card-title">{combo.combo_name}</h5>
//                       <p>{combo.combo_description}</p>
//                       <p>
//                         <strong>
//                           <strike>{combo.combo_price}</strike>
//                         </strong>
//                       </p>
//                       <button>Order Now</button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {services && services.length > 0 && (
//         <section className="services">
//           <h3>Services</h3>
//           <ul>
//             {services.map((service) => (
//               <li key={service.service_id}>
//                 <img src={`../assets/img/service/${service.service_image}`} alt={service.service_name} />
//                 {service.service_name}
//               </li>
//             ))}
//           </ul>
//         </section>
//       )}

//       {stylists && stylists.length > 0 && (
//         <section className="stylists">
//           <h3>Stylists</h3>
//           <ul>
//             {stylists.map((stylist) => (
//               <li key={stylist.id}>
//                 <img src={stylist.image} alt={stylist.name} />
//                 <p>{stylist.name}</p>
//               </li>
//             ))}
//           </ul>
//         </section>
//       )}
//     </>
//   );
// };

// export default ShopDetailPage;

