import React, { useState } from 'react'
import {Col, Form, Modal} from "react-bootstrap";
import Row from "react-bootstrap/Row";


const AddCourse = props  => {
    const initialFormState = { id: null, img_name: '', name: ''}
    const [course, setCourse] = useState(initialFormState)

    const handleInputChange = event => {
        const { name, value } = event.currentTarget
        setCourse({ ...course, [name]: value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (!course.name) return
        props.addCourse(course)
        setCourse(initialFormState)
    }

    return (
        <Form onSubmit={handleSubmit} style={{padding: '10px'}} >
            <Row>
                <p style={{fontWeight: 600, fontSize: "calc(1rem + 0.5vw)"}}>Добавление курса</p>
            </Row>
            <Row className="mb-3" style={{paddingLeft:"12px"}}>
                <input type="text" name="name" value={course.name} onChange={handleInputChange}
                       placeholder="Введите название курса" aria-rowcount={2} style={{borderRadius:'5px',
                    borderColor: 'darkgray', minWidth: "30%", maxWidth:"50%"}}/>
            </Row>
            <Row className="mb-3" style={{paddingLeft:"12px"}}>
                <input type="text"
                       placeholder="Введите продолжительность курса" aria-rowcount={2} style={{borderRadius:'5px',
                    borderColor: 'darkgray', minWidth: "30%", maxWidth:"50%"}}/>
            </Row>
            <Row className="mb-3" style={{paddingLeft:"12px"}}>
                <input type="text"
                       placeholder="Введите стоимость курса" aria-rowcount={2} style={{borderRadius:'5px',
                    borderColor: 'darkgray', minWidth: "30%", maxWidth:"50%"}}/>
            </Row>
            <Row className="mb-3" style={{paddingLeft:"12px"}}>
                <input type="text"
                       placeholder="Введите описание курса" aria-rowcount={2} style={{borderRadius:'5px',
                    borderColor: 'darkgray', minWidth: "30%", maxWidth:"50%"}}/>
            </Row>
            <Row className="mb-3" style={{paddingLeft:"12px"}}>
                <input type="text"
                       placeholder="Поле для ссылки на курс" aria-rowcount={2} style={{borderRadius:'5px',
                    borderColor: 'darkgray', minWidth: "30%",maxWidth:"50%"}}/>
            </Row>
            <Row className="mb-3" style={{paddingLeft:"12px"}}>
                <input type="text" name="img_name" value={course.img_name} onChange={handleInputChange}
                       placeholder="Введите ссылку на иконку" aria-rowcount={2} style={{borderRadius:'5px',
                    borderColor: 'darkgray', minWidth: "30%", maxWidth:"50%"}}/>
            </Row>
            <Row className="mb-3" style={{paddingLeft:"12px"}}>
                <select className="browser-default custom-select" style={{minWidth: "30%", maxWidth:"50%", paddingTop:"1px",
                    paddingBottom:"1px",borderColor: 'darkgray',borderRadius:'5px',borderWidth:'2px', maxHeight:'28px',borderStyle:"inset"}}>
                    <option>Выберите категорию</option>
                    <option value="1">Категория1</option>
                    <option value="2">Категория2</option>
                    <option value="3">Категория3</option>
                </select>
            </Row>
            <Row className="mb-3" style={{paddingLeft:"12px"}}>
                <select className="browser-default custom-select" style={{minWidth: "30%", maxWidth:"50%", paddingTop:"1px",
                    paddingBottom:"1px",borderColor: 'darkgray',borderRadius:'5px',borderWidth:'2px', maxHeight:'28px',borderStyle:"inset"}}>
                    <option>Выберите школу</option>
                    <option value="1">Школа1</option>
                    <option value="2">Школа2</option>
                    <option value="3">Школа3</option>
                </select>
            </Row>

            <Row>
                <Col>
                    <button className="mr-3" type="submit"
                            style={{backgroundColor: '#cbc3ff', border:"none",paddingBottom:2, paddingTop:2,width:"20%"}}>
                        <p style={{padding:0, margin:'3px'}}>Добавить новый курс</p>
                    </button>
                    <button onClick={() => props.setEditingCourse(false)} className="button muted-button"
                            style={{backgroundColor: '#C96464', border:"none",paddingBottom:2, paddingTop:2,width:"20%"}}>
                        <p style={{padding:0, margin:'3px'}}>Отмена</p>
                    </button>

                </Col>
            </Row>
        </Form>

    )
}
export { AddCourse }