import React from 'react';
import {Button, Form} from "react-bootstrap";
import Header from "../components/header";
import FooterPage from "../components/FooterPage";
import '../assets/styles/login.css'


const Login = () => {
    
    return (
        
        
        <div>
            <Header/>
            <main className='signin'>
                <div className="box">
                    <Form>
                        
                        <h1> Sign in the Jflix</h1>
                        
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
                      
                  
    
    
                        <>
                            <Button variant="primary" size="lg" block>
                                Log in </Button>
                            <a href="/signup"> <Button variant="secondary" size="lg" block>
                                create an jflix account </Button></a>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <button className="btn btn-primary" type="button"><i className="fa fa-facebook"></i>&nbsp;sign in with Facebook</button>
                                <button className="btn btn-primary" type="button"><i className="fa fa-google"></i>&nbsp;sign in with Google</button>
                            </div>
                           
                        </>
                    </Form>
                </div>
            </main>
            <FooterPage/>
        </div>
    
    )
    
    
};

export default Login;