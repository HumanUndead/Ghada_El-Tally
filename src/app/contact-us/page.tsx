"use client";
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';

const ContactUs = () => {
    return (
        <Container className="py-5 mt-5">
            <Row>
                <Col lg={6}>
                    <h1 className="fw-bold">Contact Us</h1>
                    <p>Have questions? Feel free to reach out to us.</p>
                    <ul className="list-unstyled">
                        <li><strong>Email:</strong> Kalles@domain.com</li>
                        <li><strong>Phone:</strong> +01 23456789</li>
                    </ul>
                </Col>
                <Col lg={6}>
                    <Form>
                        <FormGroup className="mb-3">
                            <FormControl type="text" placeholder="Your Name" />
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <FormControl type="email" placeholder="Your Email" />
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <FormControl as="textarea" rows={3} placeholder="Message" />
                        </FormGroup>
                        <Button variant="dark" className="rounded-0 w-100">Send Message</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactUs;