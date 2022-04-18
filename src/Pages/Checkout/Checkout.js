import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Checkout = () => {
  const [agree, setAgree] = useState(false);

  const handelButtonClick = () => {
    Swal.fire("Good job!", "thank you for the booking.", "success");
  };
  return (
    <section className='login-section'>
      <Container>
        <Row>
          <Col>
            <div className='login-form'>
              <form>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='mb-3'>
                      <label htmlFor='firstName' className='form-label'>
                        First Name
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='firstName'
                        aria-describedby='emailHelp'
                        placeholder='First Name'
                        required
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='mb-3'>
                      <label htmlFor='lastName' className='form-label'>
                        Last Name
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='lastName'
                        aria-describedby='emailHelp'
                        placeholder='Last Name'
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className='mb-3'>
                  <label htmlFor='email' className='form-label'>
                    Email
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    aria-describedby='email'
                    placeholder='Your Email Address'
                    required
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='address' className='form-label'>
                    Address
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='address'
                    aria-describedby='address'
                    placeholder='Inter Your Address'
                    required
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='postalCode' className='form-label'>
                    Postal Code
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='postalCode'
                    placeholder='Postal Code'
                    required
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='phone' className='form-label'>
                    Phone (Optional)
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='phone'
                    placeholder='Phone'
                    required
                  />
                </div>
                <div className='form-check mb-4'>
                  <input
                    onChange={() => setAgree(!agree)}
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckDefault'
                  />
                  <label
                    className={`form-check-label ${agree ? "text-danger" : ""}`}
                    htmlFor='flexCheckDefault'>
                    Accept Gyme Terms and Conditions
                  </label>
                </div>
                <button
                  disabled={!agree}
                  onClick={() => handelButtonClick()}
                  type='submit'
                  className='btn btn-gr-red mt-4'>
                  Check Out
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Checkout;
