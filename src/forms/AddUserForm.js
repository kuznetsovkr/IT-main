import React, { useState } from 'react'
import {Col, Form, Modal} from "react-bootstrap";
import Row from "react-bootstrap/Row";


const AddUserForm = props  => {
    const initialFormState = { id: null, name: ''}
    const [user, setUser] = useState(initialFormState)

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
        <Form onSubmit={handleSubmit} style={{padding: '10px'}} >
            <Row  style={{paddingTop:'15px', paddingBottom:'30px'}}>
                <Col className="d-flex justify-content-center">
                    <input type="text" name="name" value={user.name} onChange={handleInputChange}
                           placeholder="Введите название курса" aria-rowcount={2} style={{borderRadius:'5px',
                        borderColor: 'darkgray', width:'100%'}}/>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center" style={{padding:0}}>
                    <button type="submit" style={{backgroundColor: '#cbc3ff', borderRadius:'5px',
                        width:'90%'}}>Добавить новый курс</button>
                </Col>
            </Row>
        </Form>

    )
}
export { AddUserForm }