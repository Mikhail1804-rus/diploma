import React from 'react';
import s from "./Reviews.module.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import {reviewsData} from "./data.js";

function Reviews(props) {
    const reviews = reviewsData

    return (
        <div className={s.reviews}>
            <h3 className={s.reviews__title}>
                Что говорят участники курсов
            </h3>
            <Swiper
                className={s.reviews__swiper}
                centeredSlides={true}
                slidesPerView={1.2}
                breakpoints={{
                    1498: {slidesPerView: 1.8},
                    992: {slidesPerView: 1.6},
                    768: {slidesPerView: 1.4},
                }}
                spaceBetween={20}
                height={600}
                pagination={{
                    clickable: true
                }}
                modules={[Pagination]}
            >
                {
                    reviews.length && reviews.map(review => (
                        <SwiperSlide className={s.swiper__slide}>
                            <div className={s.reviewItem}>
                                <div className={s.reviewItem__avatar}>
                                    <img src={"/public/assets/" + review.image} alt=""/>
                                </div>
                                <div className={s.reviewItem__content}>
                                    <div className={s.header}>
                                        <div className={s.header__name}>{review.name}</div>
                                        <div className={s.header__course}>Курс: <span
                                            className={s.header__courseName}>"{review.course}".</span></div>
                                    </div>
                                    <div className={s.reviewText}>
                                        {review.description}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>

    );
}

export default Reviews;