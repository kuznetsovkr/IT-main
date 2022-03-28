import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateCourse from "../components/CreateCourse";
import {EDIT_COURSES} from "../utils/consts";
import {useHistory} from "react-router-dom";

const Admin = () => {

    const [courseVisible, setCourseVisible] = useState(false)
    const history = useHistory()

    return (
        <Container className="d-flex flex-column">
            <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() =>  setCourseVisible(true)}>
                Добавить курс
            </Button>
            <CreateCourse show={courseVisible} onHide={() => setCourseVisible(false)}/>
            <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => history.push(EDIT_COURSES)}>
                Редактировать курсы
            </Button>
            <Button variant={"outline-dark"} className="mt-4 p-2">
                Редактировать школы
            </Button>
            <Button variant={"outline-dark"} className="mt-4 p-2">
                Отзывы
            </Button>
        </Container>
    );
};

export default Admin;