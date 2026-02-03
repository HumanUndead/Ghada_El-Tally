"use client";
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import home1 from "@assets/images/home-01/bn-01.jpg";
import home2 from "@assets/images/home-01/bn-02.jpg";
import home3 from "@assets/images/home-01/bn-03.jpg";
import home4 from "@assets/images/home-01/bn-04.jpg";

const CatSection = () => {
    const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
    const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

    const categories = [
        { id: 1, title: "Women", img: home1.src },
        { id: 2, title: "Accessories", img: home2.src },
        { id: 3, title: "Footwear", img: home3.src },
        { id: 4, title: "Watches", img: home4.src },
        { id: 5, title: "Men", img: home1.src }, 
        { id: 6, title: "Jewelry", img: home2.src },
    ];

    return (
        <React.Fragment>
            <section className="cat-section py-5 mt-5">
                <Container className="position-relative px-5">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={2}
                        loop={true}
                        navigation={{
                            prevEl,
                            nextEl,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 4 },
                            1024: { slidesPerView: 5 }, 
                        }}
                        className="mySwiper"
                    >
                        {categories.map((cat) => (
                            <SwiperSlide key={cat.id}>
                                <Link href="/shop-right-sidebar" className="d-block text-center text-decoration-none">
                                    <div className="mx-auto mb-3 overflow-hidden rounded-circle shadow-sm" style={{ width: '160px', height: '160px', border: '3px solid #f8f9fa' }}>
                                        <div 
                                            className="h-100 w-100" 
                                            style={{ backgroundImage: `url(${cat.img})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.3s ease' }}
                                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                        ></div>
                                    </div>
                                    <h6 className="text-dark fw-bold mt-2">{cat.title}</h6>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div 
                        ref={(node) => setPrevEl(node)} 
                        className="swiper-button-prev custom-nav" 
                        style={{ left: '0', color: '#000', cursor: 'pointer' }}
                    ></div>
                    <div 
                        ref={(node) => setNextEl(node)} 
                        className="swiper-button-next custom-nav" 
                        style={{ right: '0', color: '#000', cursor: 'pointer' }}
                    ></div>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default CatSection;