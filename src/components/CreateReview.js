import React, {useContext, useState} from 'react';
import {Col, Dropdown, Form, Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Context} from "../index";
import Row from "react-bootstrap/Row";
import StarRating from "./StarRating";
import SelectSearch, {fuzzySearch} from 'react-select-search';

const CreateReview = ({show, onHide}) => {

    const course_array = [
        {name: 'Python-разработка\n', value: '1'},
        {name: 'JavaScript-разработка', value: '2'},
        {name: 'Java-разработка', value: '3'},
        {name: 'VR/AR разработка', value: '4'},
        {name: 'Разработка игр', value: '5'},
        {name: 'Разработка игр на Unity ', value: '6'},
        {name: 'Фреймворк Laravel', value: '7'},
        {name: 'Фреймворк Django', value: '8'},
        {name: 'Web-разработка', value: '9'},
        {name: 'Мобильная разработка', value: '10'},
        {name: 'Android- разработка', value: '11'},
    ];

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
            <Modal.Header
                style={{backgroundColor: "#E5E5E5", height:60}}
                closeButton>
                <Col className="d-flex justify-content-center">
                    <Modal.Title>Оставить отзыв</Modal.Title>
                </Col>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <SelectSearch

                        options={course_array}
                        search
                        filterOptions={fuzzySearch}
                        emptyMessage="Курс не найден"
                        placeholder="Введите название курса"

                    />

                    <Col className={"mt-3 d-flex justify-content-center"}>Период прохождения курса</Col>
                    <Row>
                        <Col>
                            <Form.Control
                                style={{borderRadius: 25, borderColor: "lightgray", backgroundImage: "none"}}
                                className={"ml-1 mt-2"}
                                placeholder={"От"}
                                type={"date"}

                            />
                        </Col>
                        <Col className={" mt-3"}>—</Col>
                        <Col>
                            <Form.Control
                                style={{borderRadius: 25, borderColor: "lightgray", backgroundImage: "none"}}
                                className={" mt-2"}
                                placeholder={""}
                                type={"date"}
                            />
                        </Col>
                    </Row>

                    <Col className={"mt-3 d-flex justify-content-center"}> Достоинства</Col>
                    <Row>
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Control
                                required
                                type="text"
                                style={{width:470}}
                                as="textarea" rows={3}
                            />
                        </Form.Group>
                    </Row>
                    <Col className={"mt-3 d-flex justify-content-center"}> Недостатки</Col>
                    <Row>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Control
                                required
                                type="text"
                                style={{width:470}}
                                as="textarea" rows={3}
                            />
                        </Form.Group>
                    </Row>
                    <Col className={"mt-3 d-flex justify-content-center"}> Комментарий</Col>
                    <Row>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Control
                                required
                                type="text"
                                style={{width:470}}
                                as="textarea" rows={3}
                            />
                        </Form.Group>
                    </Row>
                    <Col className={"mt-2 d-flex justify-content-center"}><StarRating/></Col>
                    <Row>
                        <Col>
                            <Form.Check
                                style={{}}
                                className={"mt-2"}
                                type={"checkbox"}
                                label={"Нашёл работу"}
                                id={`disabled-default-${"checkbox"}`}
                            />
                        </Col>
                        <Col>
                            <Form.Check
                                style={{color:"#212529"}}
                                className={"mt-2"}
                                type={"checkbox"}
                                label={"Был ментр"}
                                id={`disabled-default-${"checkbox"}`}
                            />
                        </Col>
                    </Row>
                    <Col className="d-flex justify-content-center">
                        <Button type="submit"  style={{borderRadius: 25, backgroundColor: '#4985FF'}} variant="primary">Отправить</Button>
                    </Col>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default CreateReview;