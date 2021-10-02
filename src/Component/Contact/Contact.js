import Button from 'react-bootstrap/Button';
import React from 'react';
import { Card, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="container mt-3">
            <h5 className="mb-3">Please Type here your address</h5>
            <Row xs={1} md={2} className="g-4">
                <div className="mx-auto">
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="type your name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="type your email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="type your phone" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="type your parmanents address" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="type your location" />
                        </Form.Group>
                    </Form>
                    <Button as="input" type="submit" value="Submit" variant="primary" />{' '}
                    <Button as="input" type="reset" value="Reset" variant="warning" />
                </div>
            </Row>
        </div>
    );
};

export default Contact;