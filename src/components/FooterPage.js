import React from "react";
import {Col, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import logo from "../assets/Лого.svg"

const FooterPage = () => {
    return (
        <Container fluid style={{backgroundColor:'#2E2E2E', color: '#fff'}}>
            <Row style={{paddingLeft:'25vw', paddingRight: '10vw', paddingBottom:'3vw', paddingTop: '3vw'}}>
                <Col className='d-none d-sm-block' style={{paddingLeft:'0', paddingRight: '0'}}>
                    <img
                        alt=""
                        src={logo}
                        width={80}
                        className="footer_img"
                    />
                </Col>
                <Col style={{paddingLeft:'0', paddingRight: '15vw'}}>
                    <p className="footer_email"> itreviews@gmail.com</p>
                </Col>
            </Row>
            <Row>
                <Col className='col-12' style={{paddingLeft:'25vw', paddingRight: '25vw'}}>
                    <hr  style={{
                        color: '#fff',
                        backgroundColor: '#fff',
                        height: 1,
                        borderColor : '#fff'
                    }}/>
                </Col>
            </Row>
        </Container>
    );
}

export default FooterPage;