import React, { useEffect, useState } from "react";
import {
  FaAngleDoubleRight,
  FaDumbbell,
} from "react-icons/fa";
import ServiceBG from "../../images/service-bg-1.jpg";
import { Link, useNavigate } from "react-router-dom";
import "./Service.css";

const Service = () => {
  const [Services, setService] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("service.json")
      .then((response) => response.json())
      .then((json) => setService(json));
  }, []);

  const navigateCheckout = (id) => {
    navigate(`/checkout/${id}`);
  }
  return (
    <section
      className='service-area'
      style={{ backgroundImage: "url(" + ServiceBG + ")" }}>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='section-title-center text-center pt-60'>
              <hr className='bg-red' />
              <h2 className='white-color'>
                Exclusive Services <br />
                For Build Health
              </h2>
              <span>Services</span>
            </div>
          </div>
        </div>
        <div className='row'>
          {Services.map((service) => {
            return (
              <div className='col-md-6 col-lg-4' key={service.id}>
                <div className='service-item service-item-2'>
                  <div className='service-img'>
                    <img src={service.image} alt='Service' />
                  </div>
                  <div className='service-content service-content-2 text-center white-color'>
                    <div className='service-icon'>
                      <FaDumbbell />
                    </div>
                    <div className="service-price">
                      $<span>{service.price}</span>
                    </div>
                    <h3 className='white-color'>{service.name}</h3>
                    <p>
                      Avoids pleasure itself, because it is plea sure but
                      because those who do not know how to pursue pleasure
                      rationally
                    </p>
                    <button onClick={() => navigateCheckout(service.id)}>                    
                      <FaAngleDoubleRight />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
