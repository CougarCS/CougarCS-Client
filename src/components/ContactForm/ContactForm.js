import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './ContactForm.css';

const ContactForm = () => {
    const [emailSend, setEmailSend] = useState(false);
    const [emailSendError, setEmailSendError] = useState(false);
    const [submitBtn, setsubmitBtn] = useState(false);

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            body: '',
        },
        onSubmit: values => {
            setsubmitBtn(true)
            axios.post('/api/send', values).then((res) => {
                formik.values.firstName = "";
                formik.values.lastName = "";
                formik.values.email = "";
                formik.values.body = "";

                if (res.status === 200) {
                    setEmailSend(true)
                }
                if (res.status !== 200) {
                    setEmailSendError(true)
                }
                setsubmitBtn(false)
            })
        },
    });
    return (
        <Container>
            {/* {emailSend && <div>Email has been sent!</div>}
            {emailSendError && <div>Unable to send Email!</div>} */}
            <h1 id="getInTouch">Get In Touch</h1>
            <Row >
                <Col xs={12} md={6} lg={6}>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Group >
                            <Form.Label htmlFor="firstName">First Name*</Form.Label>
                            <Form.Control
                                name="firstName"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.firstName}
                                required={true}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="lastName">Last Name*</Form.Label>
                            <Form.Control
                                name="lastName"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.lastName}
                                required={true}

                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="email">Email Address*</Form.Label>
                            <Form.Control
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                required={true}

                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="body">Enter your Message:*</Form.Label>
                            <Form.Control
                                name="body"
                                as="textarea"
                                onChange={formik.handleChange}
                                value={formik.values.body}
                                required={true}
                                rows="4"
                            ></Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit" disabled={submitBtn}>
                            {submitBtn ? "Sending..." : "Send Message"}
                        </Button>
                    </Form>
                </Col>
                <Col className="contact-info">
                    <div className="follow">
                        <i className="fa fa-map-marker"></i>
                        <span>
                            <a href="https://goo.gl/maps/pC4D4XR5Ejr1ebmW9">
                                <h5>
                                    Philip Guthrie Hoffman Hall (PGH), Room 541
                                </h5>
                            </a>
                            <div className="map">
                                <iframe
                                    title="CougarCS Office"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1683.1469037177662!2d-95.34468975917542!3d29.721679075847103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640be5699bd0899%3A0xca1113d89a350732!2sPhilip%20Guthrie%20Hoffman%20Hall%20(PGH)!5e0!3m2!1sen!2sus!4v1576703793192!5m2!1sen!2sus"
                                    style={{
                                        width: "100%", height: "100%", frameBorder: "0", border: 0, allowFullscreen: "", paddingTop: "15px"
                                    }}></iframe>
                            </div>
                        </span>
                    </div>
                    <div className="follow">
                        <i className="fa fa-envelope-o"></i>
                        <span>
                            <h6><a href="mailto:info@cougarcs.com">info@cougarcs.com</a></h6>
                        </span>
                    </div>
                    <div className="follow socials">
                        <a href="https://www.facebook.com/cougarcs/"><i className="fa fa-facebook"></i></a>
                        <a href="https://www.instagram.com/uhcougarcs/?hl=en"><i className="fa fa-instagram"></i></a>
                        <a href="https://twitter.com/uhcougarcs"><i className="fa fa-twitter"></i></a>
                    </div>
                </Col>
            </Row >
        </Container >
    );
};

export default ContactForm;