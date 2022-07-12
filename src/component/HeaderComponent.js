import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, NavbarToggler, Collapse, NavItem, Nav } from 'reactstrap';
import { Link } from "react-router-dom";
export class Header extends Component {
    constructor(props){
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }
    toggleNav(){
        this.setState({
            isNavOpen: this.state.isNavOpen
        });
    }
    render(){
    return (
        <React.Fragment>
            <Navbar dark expand="md"height='30px'>
                <div className='grid wide menu'>
                    {/* <NavbarToggler onClick={this.toggleNav} /> */}
                    <NavbarBrand className="mr-auto" href='/'>
                        <img src='./assets/images/logo.png' height="41" width="30" alt=''/>
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            {/* <NavLink className="nav-link" to="/home">
                                <span className="fa fa-home fa-lg"></span>Home
                            </NavLink> */}
                            <span><i class="fa fa-users" aria-hidden="true"></i> </span>
                            <Link to="/staff">Nhân viên</Link>
                        </NavItem>
                        <NavItem>
                            {/* <NavLink className="nav-link" to="/aboutus">
                                <span className="fa fa-info fa-lg"></span>About Us
                            </NavLink> */}
                            <span><i class="fa fa-address-card-o" aria-hidden="true"></i> </span>
                            <Link to="/department">Phòng ban</Link>
                        </NavItem>
                        <NavItem>
                            {/* <NavLink className="nav-link" to="/menu">
                                <span className="fa fa-list fa-lg"></span>Menu
                            </NavLink> */}
                            <span><i class="fa fa-money" aria-hidden="true"></i> </span>
                            <Link to="/payroll">Bảng lương</Link>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </React.Fragment>
    );
    }
}
