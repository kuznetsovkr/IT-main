import React, {useState} from 'react'
import {Container, Form, Modal} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = ({show, onHide}) =>  {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location)
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            style={{backgroundColor: 'rgba(0,0,0,0.7)'}}
        >
            <Modal.Header>
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit} className="d-flex flex-column">
                    <Form.Group controlId="validationCustom01">
                        <Form.Control
                            required
                            className="mt-3"
                            placeholder="Эл.почта"
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group controlId="validationCustom02">
                        <Form.Control
                            required
                            className="mt-3"
                            placeholder="Пароль"
                            type="text"
                        />
                    </Form.Group>
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
                            </div>
                        }
                        <Button type="submit" className={"mt-3"}
                        >
                            {isLogin ? 'Войти': 'Регистрация'}
                        </Button>
                    </Row>
                </Form>
            </Modal.Body>
        </Modal>
    )
};

export default Auth