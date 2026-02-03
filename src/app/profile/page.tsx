"use client";
import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';
import Link from 'next/link';

const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    return (
        <Container className="py-5 mt-5">
            <Row>
                <Col lg={3} className="mb-4">
                    <div className="profile-sidebar sticky-top" style={{ top: '100px' }}>
                        <h4 className="fw-bold mb-4 text-uppercase tracking-wider">My Account</h4>
                        <ListGroup variant="flush" className="border shadow-sm">
                            <ListGroup.Item 
                                action 
                                onClick={() => setActiveTab('dashboard')}
                                className={`py-3 border-bottom transition-all ${activeTab === 'dashboard' ? 'bg-light fw-bold border-start border-dark border-4' : ''}`}
                            >
                                <i className="iccl iccl-user me-2"></i> Dashboard
                            </ListGroup.Item>

                            <ListGroup.Item 
                                action 
                                onClick={() => setActiveTab('orders')}
                                className={`py-3 border-bottom transition-all ${activeTab === 'orders' ? 'bg-light fw-bold border-start border-dark border-4' : ''}`}
                            >
                                <i className="iccl iccl-cart me-2"></i> Orders
                            </ListGroup.Item>

                            <ListGroup.Item 
                                action 
                                onClick={() => setActiveTab('addresses')}
                                className={`py-3 border-bottom transition-all ${activeTab === 'addresses' ? 'bg-light fw-bold border-start border-dark border-4' : ''}`}
                            >
                                <i className="iccl iccl-location me-2"></i> Addresses
                            </ListGroup.Item>

                            <ListGroup.Item action href="/login" className="py-3 text-danger hover:bg-danger-soft">
                                <i className="iccl iccl-power me-2"></i> Logout
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                </Col>
                <Col lg={9}>
                    <div className="profile-content animate-fade-in">
                        
                        {/* Dashboard Section */}
                        {activeTab === 'dashboard' && (
                            <>
                                <Card className="rounded-0 border-0 bg-gray-50 mb-4 shadow-sm">
                                    <Card.Body className="p-4">
                                        <h5 className="fw-bold mb-3">Hello, Ghada El-Tally!</h5>
                                        <p className="text-muted leading-relaxed">
                                            From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.
                                        </p>
                                    </Card.Body>
                                </Card>
                                <Row>
                                    <Col md={6} className="mb-4">
                                        <Card className="rounded-0 border h-100 p-3">
                                            <h6 className="fw-bold border-bottom pb-2 mb-3 text-uppercase">Billing Address</h6>
                                            <p className="fs-14 mb-1">Amman, Jordan</p>
                                            <p className="fs-14 mb-1">Street 15, Building 4</p>
                                            <Link href="#!" className="text-dark fw-bold fs-13 mt-2 inline-block border-bottom border-dark no-underline">Edit Address</Link>
                                        </Card>
                                    </Col>
                                    <Col md={6} className="mb-4">
                                        <Card className="rounded-0 border h-100 p-3 text-center flex justify-center items-center">
                                            <h6 className="fw-bold border-bottom pb-2 mb-3 text-uppercase w-full text-start">Recent Orders</h6>
                                            <p className="fs-14 text-muted italic">No orders found.</p>
                                            <Link href="/shop" className="btn btn-dark btn-sm rounded-0 w-max mx-auto mt-2">Browse Shop</Link>
                                        </Card>
                                    </Col>
                                </Row>
                            </>
                        )}

                        {/* Orders Section */}
                        {activeTab === 'orders' && (
                            <Card className="rounded-0 border p-4">
                                <h5 className="fw-bold mb-4 uppercase">Your Orders</h5>
                                <div className="text-center py-5 border bg-light">
                                    <i className="iccl iccl-cart fs-40 text-muted mb-3 d-block"></i>
                                    <p className="text-muted">No orders has been made yet.</p>
                                    <Link href="/shop" className="btn btn-dark rounded-0 px-4">Go to Shop</Link>
                                </div>
                            </Card>
                        )}

                        {/* Addresses Section */}
                        {activeTab === 'addresses' && (
                            <Card className="rounded-0 border p-4">
                                <h5 className="fw-bold mb-4 uppercase">Addresses</h5>
                                <p className="text-muted fs-14">The following addresses will be used on the checkout page by default.</p>
                                <Row className="mt-4">
                                    <Col md={6}>
                                        <div className="p-3 border">
                                            <h6 className="fw-bold mb-3">Shipping Address</h6>
                                            <p className="fs-14 mb-0 text-muted italic">You have not set up this type of address yet.</p>
                                            <Link href="#!" className="text-dark fw-bold fs-13 mt-3 inline-block border-bottom border-dark no-underline">Add New Address</Link>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        )}

                    </div>
                </Col>
            </Row>
            <style jsx global>{`
                .list-group-item-action:hover, .list-group-item-action:focus {
                    background-color: #f8f9fa !important;
                    color: #000 !important;
                    z-index: 1;
                }
                .list-group-item.active {
                    background-color: #f8f9fa !important;
                    color: #000 !important;
                    border-color: #dee2e6 !important;
                }
                /* لإلغاء أي تأثير زهري ناتج عن Bootstrap */
                .list-group-item-action:active {
                    background-color: #e9ecef !important;
                    color: #000 !important;
                }
            `}</style>
        </Container>
    );
};

export default ProfilePage;