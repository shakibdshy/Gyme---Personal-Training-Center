import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../images/error-thumb.png';
import './Notfound.css';

const Notfound = () => {
    return (
        <div className="error-area pt-130 pb-130">
		<div className="container">
			<div className="row align-items-center">
				<div className="col-xl-4 col-lg-6">
					<div className="error-page-content">
						<div className="section-title">
							<h3 className="bars"><span>OPPS!</span> This Page Are Could’t Found</h3>
						</div>
						<Link to="/" className="btn btn-gr-red mt-40">
							Go To Homepage
						</Link>
					</div>
				</div>
			</div>
		</div>
		<div className="error-thumb">
			<img src={error} alt="" />
		</div>
	</div>
    );
};

export default Notfound;