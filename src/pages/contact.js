import React, { Component, useEffect } from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import { IoCallOutline, IoLocationOutline, IoMailOpenOutline, IoLogoWhatsapp } from "react-icons/io5";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [service, setService] = useState([]);
    const [serviceIds, setServiceIds] = useState([]);
    const [name, setName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');

    useEffect(()=>{
        axios.get("https://localhost:44387/api/Services").then((res) => {
            setService(res.data);
        });
    }, [])

    const handleSubmit = () => {
        debugger;
        const data =
        {
            "name": name,
            "contactNumber": contactNumber,
            "email": email,
            "description": description,
            "serviceIds": serviceIds
        }
        axios.post("https://localhost:44387/api/ContactUs", data).then((res) => {
            alert('Your request submitted successfully!');
        });   
    }
    function handleServices(e) {
        debugger;
        setServiceIds(cureent => [...cureent, e.target.id]);

    }
    return (
        <>
            <div className='mid-container'>
                <div className='innerbnr'> <img src="images/contactus.jpg" alt="" /></div>
                <Container>
                    <h1>Contact Us</h1>
                    <Row className='contacttxt'>
                        <Col md={6} xs={12}>
                            <h3>Let’s Work Together
                                & Build Your Brand</h3>
                            <ul>

                                {/* <li><IoCallOutline className='inline' /> <Link to={"tel:+919990-364-345"}>+919990364345</Link></li> */}
                                <li><IoLogoWhatsapp className='inline'/><Link to={"https://wa.me/919990364345"}> Whatsapp</Link></li>
                                <li><IoMailOpenOutline className='inline' /><Link to={"https://www.google.com/"}> sahtechnology@gmail.com</Link></li>
                                <li><IoLocationOutline className='inline' /> <Link to={"https://www.google.com/"}>Sah Technology, 53 New Garden Colony, Sector 126 Kharar Mohali, SAS Nagar, Punjab 140301</Link></li>
                            </ul>
                            <div className='gglmap'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.7938739655215!2d76.62700622445624!3d30.752290984689157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb61978d967d%3A0x6d1a4d1701b3d7c!2sNew%20Garden%20Colony!5e0!3m2!1sen!2sin!4v1686820511740!5m2!1sen!2sin"></iframe></div>
                        </Col>
                        <Col md={6} xs={12}>
                            <h3>We'd love to hear from you!</h3>
                            <p>Brief us your requirements below, and let's connect.</p>
                            <div className='contactform'>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="name" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="contact" placeholder="Contact Your Number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control as="textarea" rows={3} placeholder="Brief Us Your Requirement" value={description} onChange={(e) => setDescription(e.target.value)} />
                                    </Form.Group>
                                    <h5>Services that interest you*</h5>
                                    {
                                        service.map((item) => {
                                            return(
                                                <Form.Group className="mb-3">
                                                    <Form.Check type="checkbox" id={item.id} onChange={handleServices} label={item.name} />
                                                </Form.Group>
                                            )
                                        })

                                    }
                                    <Button variant="primary" type="Send Message" onClick={handleSubmit}> Send Message</Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='footer-above'>
                <div className='bg'></div>
                <Container>
                    <Row>
                        <Col md={9} xs={12}><h4>Do you find development partner for your business?</h4></Col>
                        <Col md={3} xs={12}><Link to={'/contact'}>Contact Us</Link></Col>
                    </Row>
                </Container>
            </div>
        </>
    );

}

export default Contact;