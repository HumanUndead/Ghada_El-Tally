"use client";
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// استيراد الأيقونات من مكتبات React Icons (Lia للجودة العالية و Fi للبساطة)
import { LiaShippingFastSolid, LiaRedoAltSolid } from "react-icons/lia";
import { FiHeadphones } from "react-icons/fi";

const ServiceBar = () => {
    const services = [
        { 
            icon: <LiaShippingFastSolid size={30} />, 
            title: "Free Shipping", 
            subtitle: "On all orders over $99" 
        },
        { 
            icon: <FiHeadphones size={26} />, 
            title: "Support 24/7", 
            subtitle: "Contact us 24 hours a day" 
        },
        { 
            icon: <LiaRedoAltSolid size={28} />, 
            title: "30 Days Return", 
            subtitle: "Return it within 30 days" 
        },
    ];

    return (
        <div className="service-bar bg-white" style={{ padding: '25px 0', borderBottom: '1px solid #f1f1f1' }}>
            <Container>
                <Row className="justify-content-center">
                    {services.map((item, index) => (
                        <Col key={index} md={4} className="d-flex align-items-center justify-content-center py-2">
                            <div className="icon-box me-3 text-dark">
                                {item.icon}
                            </div>
                            <div className="content-box">
                                <h6 className="mb-0 fw-bold" style={{ fontSize: '13px', color: '#111', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                                    {item.title}
                                </h6>
                                <p className="mb-0 text-muted" style={{ fontSize: '11px' }}>
                                    {item.subtitle}
                                </p>
                            </div>
                            {index !== services.length - 1 && (
                                <div className="d-none d-lg-block" style={{ width: '1px', height: '30px', background: '#eee', marginLeft: '30px', marginRight: '15px' }}></div>
                            )}
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ServiceBar;