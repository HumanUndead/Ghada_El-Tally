"use client";
import React from 'react';
import bannerImg from "@assets/images/slide/slider-03.jpg"; 

const MainBanner = () => {
    return (
        <section className="main-banner-section overflow-hidden w-100">
            <div
                className="banner-wrapper w-100"
                style={{
                    backgroundImage: `url(${bannerImg.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '700px',
                    width: '100%'
                }}
            >
            </div>
        </section>
    );
};

export default MainBanner;