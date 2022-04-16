import React from "react";
import {
  FaAngleDoubleRight,
  FaDumbbell,
  FaAccessibleIcon,
} from "react-icons/fa";
import ServiceBG from "../../images/service-bg-1.jpg";
import Service1 from "../../images/service-1.jpg";
import Service2 from "../../images/service-2.jpg";
import Service3 from "../../images/service-3.jpg";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = () => {
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
                We Offer Exclusive Services <br />
                For Build Health
              </h2>
              <span>Services</span>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 col-lg-4'>
            <div className='service-item service-item-2'>
              <div className='service-img'>
                <img src={Service1} alt='Service' />
              </div>
              <div className='service-content service-content-2 text-center white-color'>
                <div className='service-icon'>
                  <FaDumbbell />
                </div>
                <h3 className='white-color'>Dumbbelling</h3>
                <p>
                  Avoids pleasure itself, because it is plea sure but because
                  those who do not know how to pursue pleasure rationally
                </p>
                <Link to='/checkout'>
                  <FaAngleDoubleRight />
                </Link>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='service-item service-item-2'>
              <div className='service-img'>
                <img src={Service2} alt='Services' />
              </div>
              <div className='service-content service-content-2 text-center white-color'>
                <div className='service-icon'>
                  <FaAccessibleIcon />
                </div>
                <h3 className='white-color'>Cycling GYM</h3>
                <p>
                  Avoids pleasure itself, because it is plea sure but because
                  those who do not know how to pursue pleasure rationally
                </p>
                <Link to='/checkout'>
                  <FaAngleDoubleRight />
                </Link>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='service-item service-item-2'>
              <div className='service-img'>
                <img src={Service3} alt='Services' />
              </div>
              <div className='service-content service-content-2 text-center white-color'>
                <div className='service-icon'>
                  <FaDumbbell />
                </div>
                <h3 className='white-color'>Grid Training</h3>
                <p>
                  Avoids pleasure itself, because it is plea sure but because
                  those who do not know how to pursue pleasure rationally
                </p>
                <Link to='/checkout'>
                  <FaAngleDoubleRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
