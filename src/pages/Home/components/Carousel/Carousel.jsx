import React from 'react';
import s from "./Carousel.module.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {slidesImagesData} from "./data.js";

function Carousel(props) {
    const slidesImages = slidesImagesData

    return (
        <div className={s.carousel}>
            <Swiper
                autoplay={{delay: 5000}}
                className={s.swiper}
                centeredSlides={true}
                slidesPerView={1}
                spaceBetween={20}
                height={600}
                modules={[Autoplay]}
            >
                {
                    slidesImages.length && slidesImages.map(image => (
                        <SwiperSlide key={image} className={s.swiper__slide}><img src={"/src/assets/" + image} alt="slide"/></SwiperSlide>
                    ))
                }
            </Swiper>

            <div className={s.text}>Приветствуем вас в учебном центре "Интеллект"!
                Наша миссия - предоставить информацию о разнообразных образовательных курсах, услугах и возможностях
                обучения в учебном центре!
                Мы рады приветствовать вас на нашем сайте, где вы найдете множество возможностей для обучения и
                развития.
                Наш учебный центр предлагает широкий спектр курсов по различным направлениям,
                высококвалифицированных
                преподавателей.
                Мы стремимся создать комфортную обучающую среду, где каждый сможет раскрыть свой потенциал и достичь
                желаемых результатов.
                Добро пожаловать в учебный центр "Интеллект" - ваш путь к знаниям и успеху!
            </div>
        </div>
    );
}

export default Carousel;