import React, { Component } from 'react';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Services from './pages/services';
import Contact from './pages/contact';
import About from './pages/about';
import Career from './pages/career';
import Websitedesign from './pages/website-design';
import Ecommerce from './pages/ecommerce';
import DigitalMarketing from './pages/digital-marketing';
import GraphicDesigns from './pages/graphic-designs';
import CMSSolutions from './pages/cms-solutions';
import WebDevelopment from './pages/web-development';
import Footer from './pages/footer';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div className='top-header'>
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand href="#home"> <div className='logo'><Link to={"/"}><img src='images/logo.png' /></Link></div></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Link to={"/"} className="navbar-brand">Home</Link>
                    <Link to={"/about"} className="navbar-brand">About</Link>
                    <NavDropdown title="Services" id="basic-nav-dropdown">
                    <ul>
                    <li> <Link to={"/website-design"}>Website Design</Link></li>
                    <li><Link to={"/ecommerce"} >Ecommerce</Link></li>
                    <li><Link to={"/web-development"}>Web Development</Link></li>
                    <li><Link to={"/digital-marketing"}>Digital Marketing</Link></li>
                    <li><Link to={"/graphic-designs"}>Graphic Designs</Link></li>
                    <li><Link to={"/cms-solutions"}>CMS Solutions</Link></li>
                    </ul>
                     </NavDropdown>
                    <Link to={"/portfolio"} className="navbar-brand">Portfolio</Link>
                    <Link to={"/career"} className="navbar-brand">Career</Link>
                    <Link to={"/contact"} className="navbar-brand">Contact</Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Career />} />
          <Route path="/website-design" element={<Websitedesign />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/graphic-designs" element={<GraphicDesigns />} />
          <Route path="/cms-solutions" element={<CMSSolutions />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </Router>


    );
  }
}
export default App;
