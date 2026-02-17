"use client";
import React, { useState, useRef } from 'react';
import { Container, Row, Col, Button, Form, Tab, Nav, Modal } from 'react-bootstrap';

const LoginPage = () => {
    const [loginMethod, setLoginMethod] = useState('email');
    const [showOTP, setShowOTP] = useState(false);
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleOtpChange = (element: HTMLInputElement, index: number) => {
        if (isNaN(Number(element.value))) return false;
        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);
        if (element.value !== "" && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleVerify = () => {
        const otpCode = otp.join('');
        console.log("Verifying OTP:", otpCode);
    };

    return (
        <Container className="py-5 mt-5">
            <Row className="justify-content-center">
                <Col lg={5} md={8}>
                    <div className="text-center mb-4">
                        <h1 className="fw-bold">Login</h1>
                    </div>
                    <Tab.Container activeKey={loginMethod} onSelect={(k: any) => setLoginMethod(k)}>
                        <Nav variant="pills" className="justify-content-center mb-4 custom-login-nav">
                            <Nav.Item><Nav.Link eventKey="email" className="rounded-0">Email</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="phone" className="rounded-0">Phone</Nav.Link></Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="email">
                                <Form onSubmit={(e) => { e.preventDefault(); console.log("Email form submitted"); }}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control 
                                            type="email" 
                                            placeholder="Enter your email" 
                                            required 
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-4">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter password" required />
                                    </Form.Group>
                                    <Button type="submit" variant="dark" className="w-100 rounded-0 py-2 fw-bold">SIGN IN</Button>
                                </Form>
                            </Tab.Pane>
                            <Tab.Pane eventKey="phone">
                                <Form onSubmit={(e) => { e.preventDefault(); setShowOTP(true); }}>
                                    <Form.Group className="mb-4">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control 
                                            type="tel" 
                                            placeholder="+962 7XXXXXXXX" 
                                            required 
                                            maxLength={13} 
                                            minLength={13} 
                                            pattern="\+962[0-9]{9}"
                                            onInput={(e: any) => {
                                                if (e.target.value.length > 13) e.target.value = e.target.value.slice(0, 13);
                                            }}
                                        />
                                    </Form.Group>
                                    <Button type="submit" variant="info" className="w-100 rounded-0 py-2 fw-bold text-white">SEND OTP CODE</Button>
                                </Form>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    <div className="mt-4 text-center">
                        <p className="fs-14">New customer? <a href="/create-account" className="text-decoration-underline">Create an account</a></p>
                    </div>
                </Col>
            </Row>

            <Modal show={showOTP} onHide={() => setShowOTP(false)} centered>
                <Modal.Header closeButton className="border-0">
                    <Modal.Title className="w-100 text-center fw-bold">Verify OTP</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center pb-4">
                    <p className="text-muted mb-4">Enter the 6-digit code sent to your phone</p>
                    <div className="d-flex justify-content-center gap-2 mb-4">
                        {otp.map((data, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength={1}
                                className="form-control text-center fw-bold fs-24"
                                style={{ 
                                    width: '50px', 
                                    height: '60px', 
                                    borderRadius: '8px', 
                                    padding: '0', 
                                    lineHeight: '60px', 
                                    border: '1px solid #ced4da' 
                                }}
                                value={data}
                                ref={(el) => { inputRefs.current[index] = el; }}
                                onChange={e => handleOtpChange(e.target, index)}
                                onFocus={e => e.target.select()}
                            />
                        ))}
                    </div>
                    <Button variant="dark" className="w-100 rounded-0 py-2" onClick={handleVerify}>VERIFY & LOGIN</Button>
                    <Button variant="link" className="mt-2 text-muted fs-14" onClick={() => setShowOTP(false)}>Resend Code</Button>
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default LoginPage;