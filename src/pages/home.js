import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import { FaChartBar, FaShoppingCart, FaLaptopCode, FaPalette, FaRegFileAlt, FaDesktop, } from 'react-icons/fa';
import { Link } from "react-router-dom";
import 'animate.css';
export default class Home extends Component {
    render() {

        return (
            <>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src="images/slide1.jpg" alt="First slide" />
                        <Carousel.Caption>
                            <h2>Digital Marketing</h2>
                            <h3>Thing Big. We Make IT, <span>Possible!</span></h3>
                            <p>Search Engine Optimization, Social Media Marketing, Google Adwords, Content Marketing & Reputation Management</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="images/slide2.jpg" alt="Second slide" />
                        <Carousel.Caption>
                            <h2>Website Designs</h2>
                            <h3>Thing Big. We Make IT, <span>Possible!</span></h3>
                            <p>UI Designs, Banner Designs, Creative Web Layouts, Email Templates, Landing Pages, Mobile Responsive Websites </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="images/slide3.jpg" alt="Third slide" />
                        <Carousel.Caption>
                            <h2>Web Development</h2>
                            <h3>Web Development Build Your Brand With Web Hopers</h3>
                            <p>Shopify, WordPress, WIX, Weebly, Webflow, Custom CMS Development </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="images/slide4.jpg" alt="Third slide" />
                        <Carousel.Caption>
                            <h2>eCommerce Solutions</h2>
                            <h3>Thing Big. We Make IT, <span>Possible!</span></h3>
                            <p>Magento Development, Shopify, Adobe Business Catalyst Migration, WooCommerce, Prestashop, Joomla & BigCommerce</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <Container>
                    <Row className='aboutus'>
                        <Col md={6} xs={12}>

                            <h2>Who we are?</h2>
                            <h5><strong>Web Development Company in Chandigarh Since 2018</strong></h5>
                            <p>
                                Our existence was first observed in the year 2012. Since then, Sah Technology have always believed in providing the best quality services. Being an IT service provider, it has always being a challenging journey, but we have successfully been able to serve more than 5000+ interesting web planning ventures until now and still counting.
                            </p><Link to={'/contact'} className='btn'>Contact Us</Link>
                        </Col>
                        <Col md={6} xs={12}>
                            <img src='images/aboutus.jpg' />
                        </Col>
                    </Row>

                </Container>
                <div className='service-con'>
                    <Container>
                        <div className='inner-sec-center'>
                            <h2>Our Services</h2>
                            <h5>Creating remarkable digital experiences and full-service web solutions.</h5>
                        </div>
                        <Row>
                            <Col xs={12} sm={6} md={6} lg={4} className="sr-new-box animate__animated animate__fadeInUp">

                                <div className="sr-new-box-inner">
                                    <div className="front-side same_height">
                                        <FaChartBar />
                                        <h3>Digital Marketing</h3>
                                        <p>Search Engine Optimization, Social Media Marketing, Google Adwords, Content Marketing & Reputation Management</p>
                                    </div>
                                    <div className="back-side same_height">
                                        <FaChartBar />
                                        <h3>Digital Marketing</h3>
                                        <ul>
                                            <li>Inbound Marketing</li>
                                            <li>Search Engine Optimization(SEO)</li>
                                            <li>Social Media Marketing</li>
                                            <li>Search Engine Marketing(SEM)</li>
                                            <li>Email Marketing</li>
                                            <li>Analytics Consultation</li>
                                        </ul>
                                        <Link to={"/digital-marketing"} className='btnrvs'>View</Link>
                                    </div>
                                </div>
                            </Col>


                            <Col xs={12} sm={6} md={6} lg={4} className="sr-new-box animate__animated animate__fadeInUp">

                                <div className="sr-new-box-inner">
                                    <div className="front-side same_height">
                                        <FaShoppingCart />
                                        <h3>eCommerce Solutions</h3>
                                        <p>Magento Development, Shopify, Adobe Business Catalyst Migration, WooCommerce, Prestashop,
                                            Joomla & BigCommerce</p>
                                    </div>
                                    <div className="back-side same_height">
                                        <FaShoppingCart />
                                        <h3>eCommerce Solutions</h3>
                                        <ul>
                                            <li>.Net</li>
                                            <li>Shopify</li>
                                            <li>Prestashop</li>
                                            <li>Joomla &amp; BigCommerce</li>
                                            <li>WooCommerce</li>
                                            <li>Magento Development</li>
                                        </ul>
                                        <Link to={"/ecommerce"} className='btnrvs'>View</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={4} className="sr-new-box animate__animated animate__fadeInUp">

                                <div className="sr-new-box-inner">
                                    <div className="front-side same_height">
                                        <FaLaptopCode />
                                        <h3>Web Development</h3>
                                        <p>Cake PHP, Laravel, Codeigniter, AJAX, jQuery & JavaScript, WordPress Plugin Customization </p>
                                    </div>
                                    <div className="back-side same_height">
                                        <FaLaptopCode />
                                        <h3>Web Development</h3>
                                        <ul>
                                            <li>Cake PHP</li>
                                            <li>.Net</li>
                                            <li>Codeigniter</li>
                                            <li>AJAX</li>
                                            <li>jQuery &amp; JavaScript</li>
                                            <li>WordPress Plugin Customization</li>
                                        </ul>
                                        <Link to={"/web-development"} className='btnrvs'>View</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={4} className="sr-new-box animate__animated animate__fadeInUp">

                                <div className="sr-new-box-inner">
                                    <div class="front-side same_height">
                                        <FaDesktop />
                                        <h3>Website Designs</h3>
                                        <p>UI Designs, Banner Designs, Creative Web Layouts, Email Templates, Landing Pages, Mobile Responsive Websites </p>
                                    </div>
                                    <div className="back-side same_height">
                                        <FaDesktop />
                                        <h3>Website Designs</h3>
                                        <ul>
                                            <li>Email Templates</li>
                                            <li>Landing Pages</li>
                                            <li>UI Designs</li>
                                            <li>Creative Web Layouts</li>
                                            <li>Mobile Responsive Websites</li>
                                        </ul>
                                        <Link to={"/website-designs"} className='btnrvs'>View</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={4} className="sr-new-box animate__animated animate__fadeInUp">

                                <div class="sr-new-box-inner">
                                    <div className="front-side same_height">
                                        <FaPalette />
                                        <h3>Graphic Designs</h3>
                                        <p>Logo Designs, Banner Designs, Brochures, Flyers, Icon Designs, Business Cards </p>
                                    </div>
                                    <div className="back-side same_height">
                                        <FaPalette />
                                        <h3>Graphic Designs</h3>
                                        <ul>
                                            <li>Banner Designs</li>
                                            <li>Icon Designs</li>
                                            <li>Mobile Application Designs</li>
                                            <li>Logo Designs</li>
                                            <li>Business Cards</li>
                                            <li>Brochures</li>
                                        </ul>
                                        <Link to={"/graphic-designs"} className='btnrvs'>View</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={4} className="sr-new-box animate__animated animate__fadeInUp">

                                <div class="sr-new-box-inner">
                                    <div class="front-side same_height">
                                        <FaRegFileAlt />
                                        <h3>CMS Solutions</h3>
                                        <p>Shopify, WordPress, WIX, Weebly, Webflow, Custom CMS Development </p>
                                    </div>
                                    <div className="back-side same_height">
                                        <FaRegFileAlt />
                                        <h3>CMS Solutions</h3>
                                        <ul>
                                            <li>Shopify</li>
                                            <li>WordPress</li>
                                            <li>WIX</li>
                                            <li>Weebly</li>
                                            <li>Webflow</li>
                                            <li>Custom CMS Development</li>
                                        </ul>
                                        <Link to={"/cms-solutions"} className='btnrvs'>View</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/* <div className='portfolio'>
                    <Container>
                        <Row>
                            <Col md={12} xs={4} sm={12}>sdsd</Col>
                            <Col md={12} xs={4} sm={12}>sdsd</Col>
                            <Col md={12} xs={4} sm={12}>sdsd</Col>
                        </Row>
                    </Container>
                </div> */}
                <div className='mobile-sec'>
                    <Container>
                        <Row>
                            <Col md={6} xs={12} sm={6}>
                                <h4>Best Mobile App Development Company in the India</h4>
                                <p>Sah Technology is a full-cycle mobile app development company in the USA that ensures that your product vision is realized in the very best way possible. Our tailored business suite is capable of boosting your business productivity by offering it a leading-edge supported by out-of-the-box innovation.</p>
                                <Link className='btn' to={'/contact'}>Get Start Now</Link>
                            </Col>
                            <Col md={6} xs={12} sm={6}>
                                <img src='images/app-development-usa.png' />
                            </Col>
                        </Row>
                    </Container>

                </div>


            </>
        );

    }
}

