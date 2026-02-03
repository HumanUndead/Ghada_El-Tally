"use client";
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';

const CreateAccount = () => {
    return (
        <Container className="py-5 mt-5">
            <Row className="justify-content-center">
                <Col lg={6}>
                    <div className="text-center mb-4">
                        <h1 className="fw-bold">Create Account</h1>
                        <p className="text-muted">Please fill in the information below:</p>
                    </div>
                    
                    <Form>
                        <Row>
                            {/* First Name */}
                            <Col md={6}>
                                <FormGroup className="mb-3">
                                    <Form.Label>First Name</Form.Label>
                                    <FormControl type="text" placeholder="First Name" required />
                                </FormGroup>
                            </Col>
                            {/* Last Name */}
                            <Col md={6}>
                                <FormGroup className="mb-3">
                                    <Form.Label>Last Name</Form.Label>
                                    <FormControl type="text" placeholder="Last Name" required />
                                </FormGroup>
                            </Col>
                        </Row>

                        {/* Country */}
                        <FormGroup className="mb-3">
                            <Form.Label>Country</Form.Label>
                            <Form.Select className="rounded-0">
                                <option>Select Country</option>
                                <option value="Jordan">Jordan</option>
                                <option value="USA">USA</option>
                                <option value="Dubai">Dubai</option>
                            </Form.Select>
                        </FormGroup>

                        {/* Phone */}
                        <FormGroup className="mb-3">
                            <Form.Label>Phone Number</Form.Label>
                            <FormControl type="tel" placeholder="Ex: +962 7XXXXXXXX" required />
                        </FormGroup>

                        {/* Gender */}
                        <FormGroup className="mb-4">
                            <Form.Label className="d-block">Gender</Form.Label>
                            <Form.Check inline label="Male" name="gender" type="radio" id="gender-male" />
                            <Form.Check inline label="Female" name="gender" type="radio" id="gender-female" />
                        </FormGroup>

                        <Button variant="dark" className="rounded-0 w-100 py-2 fw-bold">
                            CREATE MY ACCOUNT
                        </Button>

                        <div className="mt-3 text-center">
                            <p className="fs-14">Already have an account? <a href="#" className="text-decoration-underline">Login here</a></p>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default CreateAccount;