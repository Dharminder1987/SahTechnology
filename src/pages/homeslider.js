import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
export default class Services extends Component {
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
            </>
        );

    }
}

