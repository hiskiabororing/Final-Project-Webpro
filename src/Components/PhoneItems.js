import React from "react";
import { Link } from "react-router-dom";
const PhoneItems= (props)=> {
    return (
        <div className="col mb-5">
            <div className="card h-100">
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{props.phone.brand_name}</h5>
                        {/* <h5 className="fw-bolder">{props.phone.brand_id}</h5> */}
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        <Link className="btn btn-outline-dark mt-auto" to={`/details/${props.phone.brand_id}`}> View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhoneItems;