import React, {useState,useEffect} from "react";
import {useParams} from 'react-router-dom';
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import PhoneDetails from "../Components/PhoneDetails";
const Details = ()=>{
    const [phones, setPhones]= useState({});
    const {brand_id}= useParams();
   
   useEffect(()=> {
    fetch(`https://api-mobilespecs.azharimm.site/v2/${brand_id}`)
    .then(response => response.json())
    .then(data => setPhones(data.data)); 
   },
   // eslint-disable-next-line
   []);
   
    return(
        <>
        <Navigation/>
        <PhoneDetails phones={phones}/>
        <Footer/>
        </>
    )
}
export default Details;