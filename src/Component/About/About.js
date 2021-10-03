import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className="container mt-5">
            <h4 className="fw-bold text-warning">We are provide world best food</h4>
            <p>Your happy clients: </p>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg&ga=GA1.2.1728032082.1631577600" />
                            <Card.Body>
                                <Card.Title>Alex Jonson</Card.Title>
                                <Card.Text>
                                    This one of the best online food services as well as offline. we are very helpful their customer and
                                    they are very friendly behaviour their customer. I am satisfied thier services. I am
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default About;