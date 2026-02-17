"use client";
import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';
import Link from 'next/link';

const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: 'iccl-user' },
        { id: 'orders', label: 'Orders', icon: 'iccl-cart' },
        { id: 'addresses', label: 'Addresses', icon: 'iccl-location' }
    ];

    return (
        <Container className="py-5 mt-5">
            <Row>
                {/* Sidebar - القائمة الجانبية */}
                <Col lg={3} className="mb-4">
                    <div className="profile-sidebar sticky-top" style={{ top: '100px' }}>
                        <h4 className="fw-bold mb-4 text-uppercase tracking-wider text-dark" style={{ fontSize: '18px' }}>My Account</h4>
                        
                        <ListGroup variant="flush" className="border shadow-sm rounded-0" style={{ 
                            borderTopColor: '#eee', 
                            borderRightColor: '#eee', 
                            borderBottomColor: '#eee', 
                            borderLeftColor: '#eee' 
                        }}>
                            {menuItems.map((item) => (
                                <ListGroup.Item 
                                    key={item.id}
                                    action 
                                    onClick={() => setActiveTab(item.id)}
                                    className={`py-3 transition-all border-bottom ${activeTab === item.id ? 'active-item' : ''}`}
                                    style={{ 
                                        // فككنا الخصائص لتجنب الـ Conflict والخطأ في الـ Console
                                        borderLeftWidth: '4px',
                                        borderLeftStyle: 'solid',
                                        borderLeftColor: activeTab === item.id ? '#000' : 'transparent',
                                        backgroundColor: activeTab === item.id ? '#f9f9f9' : '#fff',
                                        borderTopColor: '#eee',
                                        borderRightColor: '#eee',
                                        borderBottomColor: '#eee',
                                        color: activeTab === item.id ? '#000' : '#555',
                                        fontWeight: activeTab === item.id ? 'bold' : 'normal',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <i className={`iccl ${item.icon} me-2`}></i> {item.label}
                                </ListGroup.Item>
                            ))}

                            <Link href="/login" className="text-decoration-none">
                                <ListGroup.Item action className="py-3 text-danger border-0">
                                    <i className="iccl iccl-power me-2"></i> Logout
                                </ListGroup.Item>
                            </Link>
                        </ListGroup>
                    </div>
                </Col>

                {/* Content Area - مساحة المحتوى */}
                <Col lg={9}>
                    <div className="profile-content animate-fade-in">
                        
                        {/* Dashboard Section */}
                        {activeTab === 'dashboard' && (
                            <div className="animate-in fade-in duration-500">
                                <Card className="rounded-0 border-0 mb-4 shadow-sm" style={{ backgroundColor: '#f8f8f8' }}>
                                    <Card.Body className="p-4">
                                        <h5 className="fw-bold mb-3 text-dark">Hello, Ghada El-Tally!</h5>
                                        <p className="text-muted leading-relaxed fs-14">
                                            From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.
                                        </p>
                                    </Card.Body>
                                </Card>
                                <Row>
                                    <Col md={6} className="mb-4">
                                        <Card className="rounded-0 h-100 p-4 shadow-sm transition-all border-hover-dark" style={{ border: '1px solid #eee' }}>
                                            <h6 className="fw-bold border-bottom pb-2 mb-3 text-uppercase text-muted" style={{ fontSize: '12px', letterSpacing: '1px' }}>Billing Address</h6>
                                            <div className="fs-14 mb-4">
                                                <p className="text-dark font-bold mb-1">Amman, Jordan</p>
                                                <p className="text-muted">Street 15, Building 4</p>
                                                <p className="text-muted pt-2">+962 7XXXXXXXX</p>
                                            </div>
                                            <Link href="#!" className="text-dark fw-bold fs-11 mt-auto d-inline-block text-decoration-none uppercase border-bottom border-dark pb-1">Edit Address</Link>
                                        </Card>
                                    </Col>
                                    <Col md={6} className="mb-4">
                                        <Card className="rounded-0 h-100 p-4 text-center d-flex flex-column justify-content-center align-items-center shadow-sm" style={{ border: '1px solid #eee' }}>
                                            <h6 className="fw-bold border-bottom pb-2 mb-3 text-uppercase text-muted w-100 text-start" style={{ fontSize: '12px', letterSpacing: '1px' }}>Recent Orders</h6>
                                            <p className="fs-14 text-muted italic my-4">No orders placed yet.</p>
                                            <Link href="/shop" className="btn btn-dark btn-sm rounded-0 px-4 py-2 uppercase tracking-widest w-100" style={{ fontSize: '11px', backgroundColor: '#000', border: 'none' }}>Start Shopping</Link>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        )}

                        {/* Orders Section */}
                        {activeTab === 'orders' && (
                            <Card className="rounded-0 p-5 shadow-sm border-0" style={{ border: '1px solid #eee' }}>
                                <h5 className="fw-bold mb-4 uppercase text-dark border-bottom pb-3" style={{ fontSize: '16px', letterSpacing: '2px' }}>Orders History</h5>
                                <div className="text-center py-12 bg-white" style={{ border: '1px dashed #ddd' }}>
                                    <i className="iccl iccl-cart fs-40 text-muted mb-3 d-block opacity-25"></i>
                                    <p className="text-muted fs-14 italic mb-4">You haven't placed any orders yet.</p>
                                    <Link href="/shop" className="btn btn-dark rounded-0 px-5 uppercase text-[12px]" style={{ backgroundColor: '#000' }}>Browse Collection</Link>
                                </div>
                            </Card>
                        )}

                        {/* Addresses Section */}
                        {activeTab === 'addresses' && (
                            <Card className="rounded-0 p-5 shadow-sm border-0" style={{ border: '1px solid #eee' }}>
                                <h5 className="fw-bold mb-4 uppercase text-dark border-bottom pb-3" style={{ fontSize: '16px', letterSpacing: '2px' }}>Shipping Addresses</h5>
                                <p className="text-muted fs-14 mb-8">The following addresses will be used on the checkout page by default.</p>
                                <div className="p-8 text-center bg-[#fafafa]" style={{ border: '1px solid #eee' }}>
                                    <i className="iccl iccl-location fs-30 text-muted mb-3 d-block opacity-30"></i>
                                    <h6 className="fw-bold text-dark mb-2">Primary Shipping Address</h6>
                                    <p className="fs-13 text-muted mb-4 font-light italic text-sm">You have not set up this type of address yet.</p>
                                    <Link href="#!" className="text-dark fw-bold fs-11 uppercase border-bottom border-dark no-underline pb-1 hover:text-gray-400">Add New Address</Link>
                                </div>
                            </Card>
                        )}

                    </div>
                </Col>
            </Row>

            <style jsx global>{`
                /* حذف تأثيرات الهوفر الافتراضية المزعجة */
                .list-group-item-action:hover {
                    background-color: #f8f9fa !important;
                    color: #000 !important;
                }
                .active-item {
                    border-left-color: #000 !important;
                    color: #000 !important;
                }
                .border-hover-dark:hover {
                    border-color: #000 !important;
                    transition: border-color 0.3s ease;
                }
                .animate-fade-in {
                    animation: fadeIn 0.4s ease-out;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .fs-11 { font-size: 11px; }
                .fs-12 { font-size: 12px; }
            `}</style>
        </Container>
    );
};

export default ProfilePage;