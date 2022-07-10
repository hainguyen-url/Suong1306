import React from "react";

export function Footer(props){
    return (
        <div className="footer">
            <div className="grid wide">
                <div className="row">
                    <div className="col l-6 m-4 c-12">
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
                    <div className="col l-6 m-8 c-12 ">
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
            </div>
            <div className="row justifi-content-center">
                <div className="">
                    
                </div>
            </div>
        </div>
    );
}
