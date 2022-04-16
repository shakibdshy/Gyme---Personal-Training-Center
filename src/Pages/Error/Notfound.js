import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className="error-area pt-130 pb-130">
		<div className="container">
			<div className="row">
				<div className="col-xl-4 col-lg-6">
					<div className="error-page-content">
						<div className="section-title-3">
							<h3 className="bars"><span>OPPS!</span> This Page Are Could’t Found</h3>
						</div>
						<Link to="/" className="btn btn-gra mt-40">
							LEARN MORE
						</Link>
					</div>
				</div>
			</div>
		</div>
		<div className="error-thumb">
			{/* <img src="assets/img/thumb/error-thumb.png" alt=""> */}
		</div>
	</div>
    );
};

export default Notfound;