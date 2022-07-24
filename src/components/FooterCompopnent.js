import React from "react";
import { Link } from "react-router-dom";

export function Footer(prps){
    return (
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul>
                        <li><Link to="/Home">Home</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
                        121, Clear Water Bay Road<br/>
                        Clear Water Bay, Kowloon<br/>
                        Hong Kong<br/>
                        <i className="fa fa-phone fa-lg"></i>:0123456789<br/>
                        <i className="fa fa-fax fa-lg"></i>:0123456789<br/>
                        <i className="fa fa-envelope fa-lg"></i>:0123456789<br/>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google"></a>
                        <a className="btn btn-social-icon btn-facebook"></a>
                        <a className="btn btn-social-icon btn-linkedin"></a>
                        <a className="btn btn-social-icon btn-twitter"></a>
                        <a className="btn btn-social-icon btn-instagram"></a>
                        <a className="btn btn-social-icon" href="mailto:"></a>
                    </div>
                </div>
            </div>
            <div className="row justifi-content-center">
                <div className="col-auto ">
                    <p>nhà tôi ba đời riview láo</p>
                </div>
            </div>
        </div>
        </div>
    );
}
