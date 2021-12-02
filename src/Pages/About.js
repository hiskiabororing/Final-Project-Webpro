import React from 'react';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';

const About = () => {
    return (
        <>
        <Navigation/>

        <div className="container my-5">
            <h1> About This App</h1>
            <p> Membantu anda untuk menemukan merek Handphone yang terbaik </p>
            <p> API : Phone Spesification </p>
            <p><b>Hiskia Tommy Bororing</b></p>
            <p><b>105011910108</b></p>
            <p><b>Sistem Informasi</b></p>
        </div>
        <Footer/>
        </>
    );
}
export default About;