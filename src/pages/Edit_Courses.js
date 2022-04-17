import {observer} from "mobx-react-lite";
import {Button, Card, Col, Container, Modal, Row} from "react-bootstrap";
import React, {useState} from "react";
import plus_add from "../assets/plus_80605.svg";
import letter_S from "../assets/Ellipse 3.svg"
import {CourseTable} from "../table/CourseTable";
import {AddCourse} from "../forms/AddCourse";

const Edit_Courses = observer(() =>  {

    const coursesData = [
        { id_course: 1, img_name: letter_S , name: 'Python - разработка', coursename: '@Py' },
        { id_course: 2, img_name: letter_S , name: 'Web - разработка', coursename: '@We' },
        { id_course: 3, img_name: letter_S , name: 'Разработка игр', coursename: '@Pl' },
    ]

    const [courses, setCourses] = useState(coursesData)
    const [editingCourse, setEditingCourse] = useState(false)
    const initialFormState = { id_course: null, img_name: '', name: '', coursename: '' }
    const [currentCourse, setCurrentCourse] = useState(initialFormState)

    const addCourse = course => {
        course.id_course = courses.length + 1
        setCourses([...courses, course])
    }

    const deleteCourse = id_course => {
        setEditingCourse(false)
        setCourses(courses.filter(course => course.id_course !== id_course))
    }

    const [courseVisible, setCourseVisible] = useState(false)

    return (
        <Container style={{marginTop:'50px', paddingBottom:'50px'}}>
            <Card className="card_with_courses">
                <Card.Body style={{paddingTop:10, marginRight:0, paddingLeft:15, paddingRight:15}}>
                    <Row>
                        {/* добавляем ? рисуй форму редактирования, иначе - пусто */}
                        {editingCourse ? (
                            <div>
                                <AddCourse addCourse={addCourse} setEditingCourse={setEditingCourse} />
                            </div>
                        ) : (
                            <>
                            </>
                        )}
                    </Row>
                    <Row className="justify-content-end" style={{paddingRight:50}}>
                        <img src={plus_add} onClick={() => {setEditingCourse(true)}}
                             style={{width:35,padding:0, cursor:"pointer", marginBottom:'20px'}}/>
                    </Row>
                    <Row>

                        <CourseTable courses={courses} deleteCourse={deleteCourse} />
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
});

export default Edit_Courses