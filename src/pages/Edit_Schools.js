import {observer} from "mobx-react-lite";
import {Button, Card, Col, Container, Modal, Row} from "react-bootstrap";
import React, {useState} from "react";
import plus_add from "../assets/plus_80605.svg";
import {AddSchool} from "../forms/AddSchool";
import  {SchoolTable} from  "../table/SchoolTable";

const Edit_Schools = observer(() =>  {

    const schoolsData = [
        { id_school: 1, name: 'Skillbox', schoolname: '@Skill' },
        { id_school: 2, name: 'GeekBrains', schoolname: '@Geek' },
        { id_school: 3, name: 'Udemy', schoolname: '@Udemy' },
    ]

    const [schools, setSchools] = useState(schoolsData)
    const [editingSchool, setEditingSchool] = useState(false)
    const initialFormState = { id_school: null, name: '', schoolname: '' }
    const [currentSchool, setCurrentSchool] = useState(initialFormState)

    const addSchool = school => {
        school.id_school = schools.length + 1
        setSchools([...schools, school])
    }

    const deleteSchool = id_school => {
        setEditingSchool(false)
        setSchools(schools.filter(school => school.id_school !== id_school))
    }

    const [courseVisible, setCourseVisible] = useState(false)

    return (
        <Container style={{marginTop:'50px', paddingBottom:'50px'}}>
            <Card className="card_with_courses">
                <Card.Body style={{paddingTop:10, marginRight:0, paddingLeft:15, paddingRight:15}}>
                    <Row>
                        {/* добавляем ? рисуй форму редактирования, иначе - пусто */}
                        {editingSchool ? (
                            <div>
                                <AddSchool addSchool={addSchool} setEditingSchool={setEditingSchool} />
                            </div>
                        ) : (
                            <>
                            </>
                        )}
                    </Row>
                    <Row className="justify-content-end" style={{paddingRight:50}}>
                        <img src={plus_add} onClick={() => {setEditingSchool(true)}}
                             style={{width:35,padding:0, cursor:"pointer", marginBottom:'20px'}}/>
                    </Row>
                    <Row>

                        <SchoolTable schools={schools} deleteSchool={deleteSchool} />
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
});

export default Edit_Schools