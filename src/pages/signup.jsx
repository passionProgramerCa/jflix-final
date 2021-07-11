import React from 'react';
import Header from "../components/header";
import {Button, Form} from "react-bootstrap";
import FooterPage from "../components/FooterPage";
import '../assets/styles/signup.css'

const Signup = () => {
        
        return (
            <>
                
                
                <div>
                    <Header/>
                    <main>
                        <div id="bannerimage" className="main box">
                            <Form>
                                <img
                                    src="https://image.shutterstock.com/image-vector/brush-sale-banner-promotion-ribbon-260nw-1182942766.jpg"/>
                                <h1> Create a new account </h1>
                                <br/><br/>
                                <div className="input-group">
                                    <span className="input-group-text">First name</span>
                                    <input type="text" aria-label="First name" className="form-control"/>
                                
                                </div>
                                <br/>
                                <div className="input-group">
                                    <span className="input-group-text">Last name</span>
                                    <input type="text" aria-label="Last name" className="form-control"/>
                                </div>
                                <br/><br/>
                                
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email"/>
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password"/>
                                </Form.Group>
                                <a href="#">I forgot my password</a>
                                <br/>
                                <br/>
                                <br/>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox"
                                                label=" I certify that I am at least 18 years old and that I agree to the Terms and Policies and Privacy Policy. This service is for the U.S. only."/>
                                </Form.Group>
                                
                                <br/><br/>
                                <>
                                    <h5>Or sign up with </h5>
                                    
                                    <Button variant="primary" size="lg" block>
                                        Sign up </Button>
                                    <br/><br/>
                                    
                                    <div className="d-grid gap-2 col-6 mx-auto">
                                        <button className="btn btn-primary" type="button"><i
                                            className="fa fa-facebook"></i>&nbsp;sign up with Facebook
                                        </button>
                                        <button className="btn btn-primary" type="button"><i
                                            className="fa fa-google"></i>&nbsp;sign up with Google
                                        </button>
                                    </div>
                                
                                </>
                            </Form>
                        </div>
                    </main>
                    <FooterPage/>
                </div>
            
            
            </>
        )
    }

;

export default Signup;