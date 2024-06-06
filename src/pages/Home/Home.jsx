import React from 'react';
import s from './Home.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import Carousel from "./components/Carousel/Carousel.jsx";
import Certificates from "./components/Certificates/Certificates.jsx";
import Form from "./components/Form/Form.jsx";
import Reviews from "./components/Reviews/Reviews.jsx";
import WhyUs from "./components/WhyUs/WhyUs.jsx";

function Home(props) {
    return (
        <div className={s.container}>
            <Carousel />

            <WhyUs />

            <Certificates />

            <Reviews />

            <Form />
        </div>
    );
}

export default Home;