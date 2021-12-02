import React, { useState, useEffect } from "react";
import PhoneItems from "./PhoneItems";

const Phone = () => {
    const [phones, setPhones] = useState([]);
    const [text, setText] = useState('');
    useEffect(() => {

        //hit Phone endpoint 
        fetch('https://api-mobilespecs.azharimm.site/v2/brands')
            .then(response => response.json())
            .then(data => setPhones(data.data));
        //eslint-disable-react-text-line    
    }, []);
    const handlesubmit = (e) => {
        e.preventDefault();
        fetch(`http://api-mobilespecs.azharimm.site/v2/search?query=${text}`)
            .then(response => response.json())
            .then(data => setPhones(data.data));

        setText('');
    }
    const handlechange = (e) => {setText(e.target.value)};
    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <h2> Search Phone </h2>
                <form onSubmit={handlesubmit}>
                    <input type="text" classname="form-control" onChange={handlechange} value={text} />
                </form>
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center my-3">
                    {phones.map(phone => <PhoneItems key={phone.brand_id} phone={phone} />)}

                </div>
            </div>
        </section>
    );
}

export default Phone;