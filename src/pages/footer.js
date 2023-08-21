import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import './Footer.css';
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitch, IoLogoTwitter, IoLogoYoutube } from "react-icons/io5";
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class About extends Component {
    render() {

        return (
            <>
                <div id='footer-container'>
                    <Container>
                        <Row>
                            <Col xs={12} sm={6} md={3}>
                                <h5>Services</h5>
                                <ul>
                                    <li><Link to='/web-development'>Web Development</Link></li>
                                    <li><Link to='/'>Mobile Development</Link></li>
                                    <li><Link to='/'>Dedicated Software</Link></li>
                                    <li><Link to='/'>Software Testing</Link></li>
                                    <li><Link to='/'>Hybrid Mobile App</Link></li>
                                </ul>
                            </Col>
                            <Col xs={12} sm={6} md={3}>
                                <h5>Technologies</h5>
                                <ul>
                                    <li><Link to='/'>Azure</Link></li>
                                    <li><Link to='/'>C# .NET</Link></li>
                                    <li><Link to='/'>Xamarin</Link></li>
                                    <li><Link to='/'>Angular</Link></li>
                                    <li><Link to='/'>Java</Link></li>
                                </ul>
                            </Col>
                            <Col xs={12} sm={6} md={3}>
                                <h5>Company</h5>
                                <ul>
                                    <li><Link to='/about'>About us</Link></li>
                                    <li><Link to='/career'>Careers</Link></li>
                                    <li><Link to='/portfolio'>How We Work</Link></li>
                                    <li><Link to='/'>Blog</Link></li>
                                </ul>
                            </Col>
                            <Col xs={12} sm={6} md={3}>
                                <h5>Contact</h5>
                                <ul>
                                    {/* <li><Link to='tel:9990364345'>+919990364345</Link></li> */}
                                    <li><Link to='mailto:sahtechnoglogy@gmail.com'>sahtechnology@gmail.com</Link></li>

                                </ul>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <div class='social-media-wrap'>
                            <div class='footer-logo'>
                                <Link to={"/"}><img src='images/ftr-logo.png' /></Link>
                            </div>
                            <small class='website-rights'>Copyright © Since 2023 Sah Technology. All Right Reserved.</small>
                            <div class='social-icons'>
                                <Link class='social-icon-link facebook' to='https://www.facebook.com/' target='_blank' aria-label='Facebook' >
                                    <IoLogoFacebook />
                                </Link>
                                <Link class='social-icon-link instagram' to='https://www.instagram.com/' target='_blank' aria-label='Instagram' >
                                    <IoLogoInstagram />
                                </Link>
                                <Link class='social-icon-link youtube' to='https://www.youtube.com/' target='_blank' aria-label='Youtube' >
                                    <IoLogoYoutube />
                                </Link>
                                <Link
                                    class='social-icon-link twitter' to='https://www.twitter.com/' target='_blank' aria-label='Twitter'>
                                    <IoLogoTwitter />
                                </Link>
                                <Link class='social-icon-link twitter' to='https://www.linkedin.com/' target='_blank' aria-label='LinkedIn'>
                                    <IoLogoLinkedin />
                                </Link>
                            </div>
                        </div>
                    </Container>
                </div>
            </>
        );

    }
}

