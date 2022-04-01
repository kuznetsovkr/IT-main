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
            <Row>
                <p style={{fontWeight: 600, fontSize: "calc(1rem + 0.5vw)"}}>Добавление курса</p>
            </Row>
            <Row className="mb-3" style={{paddingLeft:"12px"}}>
                <input type="text" name="name" value={user.name} onChange={handleInputChange}
                       placeholder="Введите название курса" aria-rowcount={2} style={{borderRadius:'5px',
                    borderColor: 'darkgray', minWidth: "30%", maxWidth:"50%"}}/>
            </Row>
            <Row className="mb-3" style={{paddingLeft:"12px"}}>
                <input type="text"
                       placeholder="Поле для ссылки на курс" aria-rowcount={2} style={{borderRadius:'5px',
                    borderColor: 'darkgray', minWidth: "30%",maxWidth:"50%"}}/>
            </Row>
            <Row className="mb-3" style={{paddingLeft:"12px"}}>
                <input type="text"
                       placeholder="Поле для ссылки на иконку" aria-rowcount={2} style={{borderRadius:'5px',
                    borderColor: 'darkgray', minWidth: "30%",maxWidth:"50%"}}/>
            </Row>

            <Row>
                <Col>
                    <button className="mr-3" type="submit"  style={{backgroundColor: '#cbc3ff', borderRadius:'5px'}}>
                        <p style={{padding:0, margin:'3px'}}>Добавить новый курс</p>
                    </button>
                    <button onClick={() => props.setEditing(false)} className="button muted-button"
                            style={{backgroundColor: '#fc4e71', borderRadius:'5px'}}>
                        <p style={{padding:0, margin:'3px'}}>Отмена</p>
                    </button>

                </Col>
            </Row>
        </Form>

    )
}
export { AddUserForm }