import React from "react";
import '../assets/styles/footpage.css'
import {MDBCol, MDBContainer, MDBRow, MDBFooter} from "mdbreact";
import * as mdb from 'mdb-ui-kit'; // lib
import {Input} from 'mdb-ui-kit'; // module


// test


const FooterPage = () => {
    return (
        
        <>
            {/* Footer */}
            <footer className="page-footer font-small indigo">
                {/* Footer Links */}
                <div className="Footers">
                    
                    
                    <div className='soicalMedia'>
                        <a href="https://play.google.com/" className="fa fa-google"/>
                        &nbsp;     &nbsp;&nbsp;     <br/>
                        <h5>Google Play Store</h5>
                        <a href="https://www.microsoft.com/en-ca/store/apps/windows" className="fa fa-windows"/>
                        &nbsp;     &nbsp;&nbsp;     <br/>
                        <h5> MS Store</h5>
                    </div>
                    <div className="container text-center text-md-left">
                        {/* Grid row */}
                        <div className="row">
                            {/* Grid column */}
                            <div className="col-md-3 mx-auto">
                                {/* Links */}
                                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Watch</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!">Spotlight</a>
                                    </li>
                                    <li>
                                        <a href="#!">Movies</a>
                                    </li>
                                    <li>
                                        <a href="#!">TV</a>
                                    </li>
                                    <li>
                                        <a href="#!">Free</a>
                                    </li>
                                </ul>
                            </div>
                            {/* Grid column */}
                            <hr className="clearfix w-100 d-md-none"/>
                            {/* Grid column */}
                            <div className="col-md-3 mx-auto">
                                {/* Links */}
                                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">My account</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!">My Jflix</a>
                                    </li>
                                    <li>
                                        <a href="#!">Account</a>
                                    </li>
                                    <li>
                                        <a href="#!">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#!">Manage Devices</a>
                                    </li>
                                </ul>
                            </div>
                            {/* Grid column */}
                            <hr className="clearfix w-100 d-md-none"/>
                            {/* Grid column */}
                            <div className="col-md-3 mx-auto">
                                {/* Links */}
                                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Features</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!">Lists</a>
                                    </li>
                                    <li>
                                        <a href="#!">Family</a>
                                    </li>
                                    <li>
                                        <a href="#!">Disc to Digital</a>
                                    </li>
                                    <li>
                                        <a href="#!">InstaWatch</a>
                                    </li>
                                    <li>
                                        <a href="#!"> Moives Anywhere</a>
                                    </li>
                                </ul>
                            </div>
                            {/* Grid column */}
                            <hr className="clearfix w-100 d-md-none"/>
                            {/* Grid column */}
                            <div className="col-md-3 mx-auto">
                                {/* Links */}
                                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Help</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!">About Us </a>
                                    </li>
                                    <li>
                                        <a href="#!">Devices</a>
                                    </li>
                                    <li>
                                        <a href="#!">Support</a>
                                    </li>
                                    <li>
                                        <a href="#!">Forums</a>
                                    
                                    </li>
                                    <li>
                                        <a href="#!">Contact Us </a>
                                    
                                    </li>
                                    <li>
                                        <a href="#!">Jobs</a>
                                    
                                    </li>
                                    
                                    
                                    <li>
                                        <br/><br/><br/><br/>
                                        <section>
                                            
                                            <div className='soicalMedia'>
                                                <link rel="stylesheet"
                                                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                                                {/* Add font awesome icons */}
                                                
                                                <a href="https://twitter.com/home?lang=en"
                                                   className="fa fa-twitter"/> &nbsp;
                                                <a href="https://www.facebook.com/"
                                                   className="fa fa-facebook"/>   &nbsp;
                                                <a href="https://www.instagram.com"
                                                   className="fa fa-instagram"/>  &nbsp;
                                                <a href="https://www.youtube.com/" className="fa fa-youtube"/>    &nbsp;
                                            </div>
                                        </section>
                                    </li>
                                </ul>
                            </div>
                            {/* Grid column */}
                        </div>
                        {/* Grid row */}
                    </div>
                
                </div>
            </footer>
            {/* Footer */}
        
        </>
    
    );
}

export default FooterPage;