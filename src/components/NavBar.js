import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar, NavLink, Offcanvas, Row} from "react-bootstrap";
import {ADMIN_ROUTE, HOME_ROUTE} from "../utils/consts";
import logo from "../assets/logo.svg"
import plus_circle from "../assets/plus-circle.svg"
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import CreateReview from "./CreateReview";
import Auth from "./Auth";


const NavBar = observer(() => {
    const {user} = useContext(Context)
    const [reviewsVisible, setReviewsVisible] = useState(false)
    const [authVisible, setAuthVisible] = useState(false)
    const history = useHistory()
    return (
        <Navbar expand="md" bg="dark" variant="dark" style={{paddingBottom:0,paddingTop:0}}>
            <Container style={{display:"flex", minHeight:"56px"}}>
                <NavLink onClick={() => history.push(HOME_ROUTE)}>
                    <img
                        alt=""
                        src={logo}
                        width={80}
                        className="d-inline-block align-top"
                        />{' '}
                </NavLink>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {user.isAuth ?
                        <Nav className={"ml-auto"}>
                            <Nav.Link style={{margin:"auto"}}>
                                Направления
                            </Nav.Link>
                            <Button variant="outline-light" className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4
                                                                        ml-md-2 ml-lg-2 ml-xl-2 mr-md-2 mr-lg-2 mr-xl-2
                                                                        mb-sm-2 p-sm-2"
                                    onClick={() => history.push(ADMIN_ROUTE)}
                                    style={{padding:0, height:"40px", margin:"auto"}}>
                                Админ панель
                            </Button>
                            <Button className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 p-sm-2 "
                                    style={{padding:0, height:"56px",borderRadius:"0px"}}
                                    onClick={() => setReviewsVisible(true)}>
                                <img src={plus_circle} width={20} className="mr-2"/>
                                Отзыв
                            </Button>
                            <Nav.Link onClick={() => setAuthVisible(true)}
                                      style={{margin:"auto"}}>
                                Выйти
                            </Nav.Link>
                        </Nav>
                        :
                        <Nav className={"ml-auto"}>
                            <Nav.Link  style={{margin:"auto"}}>
                                Направления
                            </Nav.Link>
                            <Button className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 ml-md-2 ml-lg-2 ml-xl-2
                            mr-md-2 mr-lg-2 mr-xl-2 p-sm-2"
                                    style={{padding:0, height:"56px", borderRadius:"0px"}}>
                                <img src={plus_circle} width={20} className="mr-2"/>
                                Отзыв
                            </Button>
                            <Nav.Link onClick={() => user.setIsAuth(true) && setAuthVisible(true)}
                                      style={{margin:"auto"}}>
                                Вход
                            </Nav.Link>
                        </Nav>
                    }
                </Navbar.Collapse>

                <CreateReview show={reviewsVisible} onHide={() => setReviewsVisible(false)}/>
                <Auth show={authVisible} onHide={() => setAuthVisible(false)}/>
            </Container>
        </Navbar>
    );
});

export default NavBar;