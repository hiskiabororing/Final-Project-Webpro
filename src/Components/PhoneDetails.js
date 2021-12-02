import React from 'react';
import { Link } from 'react-router-dom';

const PhoneDetails = (props) => {
    // const imageUrl = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";

    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                    </div>
                    <div className="col-md-6">
                        <h1 className="display-5 fw-bolder">{props.phone.brand}</h1>
                        <h1 className="display-5 fw-bolder">{props.phone.phone_name}</h1>
                        
                        <div className="fs-5 mb-5">
                            <Link className="btn btn-outline-dark flex-shrink-0" to="/">
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PhoneDetails;
