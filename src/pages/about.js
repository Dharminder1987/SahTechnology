import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
export default class About extends Component {
  
    render() {

        return (
            <>
                <div className='mid-container'>
                    <div className='innerbnr'> <img src="images/go-php-about-us.jpg" alt="" /></div>
                    <Container>
                        <h1 className='animate__animated animate__fadeInUp'>About us</h1>
                        {/* <h3 className="text-3xl font-bold underline">Hello world!</h3> */}

                     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                            <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                <Link to={"/career"} className=' text-gray-900 hover:text-red-500'> Sign in to your account</Link>
                                </h2>
                               
                            </div>
                            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                <form className="space-y-6" action="#" method="POST">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Email address
                                        </label>
                                        <div className="mt-2">
                                            <input  id="email" name="email"  type="email" autoComplete="email" required  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                                Password
                                            </label>
                                            <div className="text-sm">
                                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                                    Forgot password?
                                                </a>
                                            </div>
                                        </div>
                                        <div className="mt-2">
                                        <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Sign in
                                        </button>
                                    </div>
                                </form>

                                <p className="mt-10 text-center text-sm text-gray-500">
                                    Not a member?{' '}
                                    <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                        Start a 14 day free trial
                                    </a>
                                </p>
                            </div>
                        </div>
                        
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
}

