import React from "react";
import image1 from "../../images/brand.png";
import image2 from "../../images/brand-02.png";
import image3 from "../../images/brand-03.png";
import image4 from "../../images/brand-04.png";
import image5 from "../../images/brand-05.png";
import image6 from "../../images/brand-06.png";
import "./Client.css";

const Client = () => {
  const clientImages = [
    {
      id: 1,
      image: image1,
    },
    {
      id: 2,
      image: image2,
    },
    {
      id: 3,
      image: image3,
    },
    {
      id: 4,
      image: image4,
    },
    {
      id: 5,
      image: image5,
    },
    {
      id: 6,
      image: image6,
    },
  ];
  return (
    <section className='client-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='client-grid'>
              {clientImages.map((client) => {
                return (
                  <div className='brand-item' key={client.id}>
                    <img src={client.image} alt='brand' />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
