import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to ='/about'>About Us</Link></li>
                <li><Link to ='/contact'>Contact Us</Link></li>
                <li><Link to ='/portfolio'>Portfolio</Link></li>
                <li><Link to ='/services'>Services</Link></li>
            </ul>
        </div>            
        );

    }
}

