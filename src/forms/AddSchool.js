import React, { useState } from 'react'
import {Col, Form, Modal} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Select from 'react-select';


const AddSchool = props  => {
    const initialFormState = { id: null, name: ''}
    const [school, setSchool] = useState(initialFormState)

    const handleInputChange = event => {
        const { name, value } = event.currentTarget
        setSchool({ ...school, [name]: value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (!school.name) return
        props.addSchool(school)
        setSchool(initialFormState)
    }
    const category_school_array = [
        {name: 'Категория раз\n', value: '1'},
        {name: 'Категория два', value: '2'},
        {name: 'Категория три', value: '3'},
        {name: 'Категория четыре', value: '4'},
        {name: 'Категория пять', value: '5'},
    ];
    const aquaticCreatures = [
        { label: 'Shark', value: 'Shark' },
        { label: 'Dolphin', value: 'Dolphin' },
        { label: 'Whale', value: 'Whale' },
        { label: 'Octopus', value: 'Octopus' },
        { label: 'Crab', value: 'Crab' },
        { label: 'Lobster', value: 'Lobster' },
    ];


    return (
        <Form onSubmit={handleSubmit} style={{padding: '10px'}} >
            <Row>
                <p style={{fontWeight: 600, fontSize: "calc(1rem + 0.5vw)"}}>Добавление школы</p>
            </Row>
            <Row className="mb-3" style={{paddingLeft:"12px"}}>
                <input type="text" name="name" value={school.name} onChange={handleInputChange}
                       placeholder="Введите название школы" aria-rowcount={2} style={{borderRadius:'5px',
                    borderColor: 'darkgray', minWidth: "30%", maxWidth:"50%"}}/>
            </Row>
            <Row className="mb-3" style={{paddingLeft:"12px"}}>
                <select className="browser-default custom-select" style={{minWidth: "30%", maxWidth:"50%", paddingTop:"1px",
                paddingBottom:"1px",borderColor: 'darkgray',borderRadius:'5px',borderWidth:'2px', maxHeight:'28px',borderStyle:"inset"}}>
                    <option>Выберите категория</option>
                    <option value="1">Категория1</option>
                    <option value="2">Категория2</option>
                    <option value="3">Категория3</option>
                </select>
            </Row>

            <Row className="mb-3" style={{paddingLeft:"12px"}}>
                <input type="text"
                       placeholder="Поле для ссылки на школу" aria-rowcount={2} style={{borderRadius:'5px',
                    borderColor: 'darkgray', minWidth: "30%",maxWidth:"50%"}}/>
            </Row>
            <Row className="mb-3" style={{paddingLeft:"12px"}}>
                <input type="text"
                       placeholder="Поле для ссылки на иконку" aria-rowcount={2} style={{borderRadius:'5px',
                    borderColor: 'darkgray', minWidth: "30%",maxWidth:"50%"}}/>
            </Row>

            <Row>
                <Col>
                    <button className="mr-3" type="submit"
                            style={{backgroundColor: '#cbc3ff', border:"none",paddingBottom:2, paddingTop:2,width:"20%"}}>
                        <p style={{padding:0, margin:'3px'}}>Добавить новую школу</p>
                    </button>
                    <button onClick={() => props.setEditingSchool(false)} className="button muted-button"
                            style={{backgroundColor: '#C96464', border:"none",paddingBottom:2, paddingTop:2,width:"20%"}}>
                        <p style={{padding:0, margin:'3px'}}>Отмена</p>
                    </button>

                </Col>
            </Row>
        </Form>

    )
}
export { AddSchool }