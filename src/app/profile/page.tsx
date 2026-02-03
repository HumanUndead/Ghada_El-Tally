"use client";
import React from 'react';
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';
import Link from 'next/link';

const ProfilePage = () => {
    return (
        <Container className="py-5 mt-5">
            <Row>
                <Col lg={3} className="mb-4">
                    <div className="profile-sidebar">
                        <h4 className="fw-bold mb-4">My Account</h4>
                        <ListGroup variant="flush" className="border">
                            <ListGroup.Item action href="#orders" className="py-3 border-bottom ">
                                <i className="iccl iccl-cart me-2"></i> Orders
                            </ListGroup.Item>
                            <ListGroup.Item action href="#addresses" className="py-3 border-bottom">
                                <i className="iccl iccl-location me-2"></i> Addresses
                            </ListGroup.Item>
                            <ListGroup.Item action href="/wishlist" className="py-3 border-bottom">
                                <i className="iccl iccl-heart me-2"></i> Wishlist
                            </ListGroup.Item>
                            <ListGroup.Item action href="/login" className="py-3 text-danger">
                                <i className="iccl iccl-power me-2"></i> Logout
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                </Col>

                <Col lg={9}>
                    <div className="profile-content">
                        <Card className="rounded-0 border mb-4">
                            <Card.Body className="p-4">
                                <h5 className="fw-bold mb-3">Hello, Ghada El-Tally!</h5>
                                <p className="text-muted">
                                    From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.
                                </p>
                            </Card.Body>
                        </Card>

                        <Row>
                            <Col md={6} className="mb-4">
                                <Card className="rounded-0 border h-100">
                                    <Card.Body>
                                        <h6 className="fw-bold border-bottom pb-2 mb-3">Billing Address</h6>
                                        <p className="fs-14 mb-1">Amman, Jordan</p>
                                        <p className="fs-14 mb-1">Street 15, Building 4</p>
                                        <p className="fs-14 mb-3">+962 7XXXXXXXX</p>
                                        <Link href="#!" className="text-decoration-underline fs-14">Edit Address</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6} className="mb-4">
                                <Card className="rounded-0 border h-100">
                                    <Card.Body>
                                        <h6 className="fw-bold border-bottom pb-2 mb-3">Recent Orders</h6>
                                        <p className="fs-14 text-muted">You haven't placed any orders yet.</p>
                                        <Link href="/shop" className="btn btn-dark btn-sm rounded-0 mt-2">Go Shop</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ProfilePage;