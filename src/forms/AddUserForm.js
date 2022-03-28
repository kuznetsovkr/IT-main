import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import {Col, Form, Modal} from "react-bootstrap";
import SelectSearch, {fuzzySearch} from "react-select-search";
import Row from "react-bootstrap/Row";
import StarRating from "../components/StarRating";

const AddUserForm = props  => {
    const initialFormState = { id: null, name: ''}
    const [user, setUser] = useState(initialFormState)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleInputChange = event => {
        const { name, value } = event.currentTarget
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (!user.name) return
        props.addUser(user)
        setUser(initialFormState)
    }

    return (
        <Form show={show} onSubmit={handleSubmit} style={{padding: '10px'}} >
            <Row>
                <p style={{textAlign:"center",fontSize:'calc(1rem + 0.7vw)',fontWeight: 600}}>
                    Добавление курса
                </p>
            </Row>
            <Row style={{paddingTop:'15px', paddingBottom:'30px'}}>
                <input type="text" name="name" value={user.name} onChange={handleInputChange}
                       placeholder="Введите название курса" aria-rowcount={2} style={{borderRadius:'5px',
                    borderColor: 'darkgray'}}/>
            </Row>
            <Row>
                <Col style={{padding:0}}>
                    <button type="submit" style={{backgroundColor: '#cbc3ff', borderRadius:'5px',
                        marginRight:'10px',width:'100%'}} onClick={handleClose}>Добавить новый курс</button>
                </Col>
                <Col style={{padding:0, marginLeft:'10px'}}>
                    <button style={{backgroundColor: 'rgba(253,72,108,0.91)', borderRadius:'5px',
                        marginRight:'10px', width:'100%'}} onClick={handleClose}>Закрыть</button>
                </Col>
            </Row>
        </Form>

    )
}
export { AddUserForm }