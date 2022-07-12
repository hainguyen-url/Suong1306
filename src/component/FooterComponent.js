import React from "react";

export function Footer(props){
    return (
        <div className="footer">
            <div className="grid wide">
                <div className="row">
                    <div className="col l-5 m-4 c-12">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br/>
                            Clear Water Bay, Kowloon<br/>z
                            Hong Kong<br/>
                            <i className="fa fa-phone fa-lg"></i>:0123456789<br/>
                            <i className="fa fa-fax fa-lg"></i>:0123456789<br/>
                            <i className="fa fa-envelope fa-lg"></i>:0123456789<br/>
                        </address>
                    </div>
                    <div className="col l-5 m-8 c-12 ">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google"><span class="fa fa-btn fa-google"></span></a>
                            <a className="btn btn-social-icon btn-facebook"><span class="fa fa-btn fa-facebook"></span></a>
                            <a className="btn btn-social-icon btn-linkedin"><span class="fa fa-btn fa-linkedin"></span></a>
                            <a className="btn btn-social-icon btn-twitter"><span class="fa fa-btn fa-twitter"></span></a>
                            <a className="btn btn-social-icon btn-instagram"><span class="fa fa-btn fa-instagram"></span></a>
                            <a className="btn btn-social-icon" href="mailto:"><span class="fa fa-btn fa-envelope"/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justifi-content-center">
                <div className="title-footer">
                    <p></p>
                </div>
            </div>
        </div>
    );
}
