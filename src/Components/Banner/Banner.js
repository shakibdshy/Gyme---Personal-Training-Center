import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from 'react-icons/fa';
import bannerImg from "../../images/slider-2.jpg";
import bannerThumb from "../../images/thumb.png";
import "./Banner.css";

const Banner = () => {
  return (
    <section
      className='banner-section'
      style={{ backgroundImage: "url(" + bannerImg + ")" }}>
      <Container>
        <Row>
          <Col lg={8}>
            <div className='banner-content'>
              <span>Welcome To Gymee</span>
              <h2>Making Different From Other Builds Perferct Health</h2>
              <Link to='/about' className='btn btn-gr-red'>
                About Me
                <FaAngleDoubleRight />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="banner-img">
        <img src={bannerThumb} alt="" />
      </div>
    </section>
  );
};

export default Banner;
