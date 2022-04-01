import {observer} from "mobx-react-lite";
import {Button, Card, Col, Container, Modal, Row} from "react-bootstrap";
import React, {useState} from "react";
import {AddUserForm} from "../forms/AddUserForm";
import {UserTable} from "../table/UserTable";
import plus_add from "../assets/plus_80605.svg";
import {Link, useHistory} from "react-router-dom";

const Edit_Courses = observer(() =>  {

    const usersData = [
        { id: 1, name: 'Python - разработка', username: '@SkillBox1' },
        { id: 2, name: 'Web - разработка', username: '@SkillBox2' },
        { id: 3, name: 'Разработка игр', username: '@SkillBox3' },
    ]

    const [users, setUsers] = useState(usersData)
    const [editing, setEditing] = useState(false)
    const initialFormState = { id: null, name: '', username: '' }
    const [currentUser, setCurrentUser] = useState(initialFormState)

    const addUser = user => {
        user.id = users.length + 1
        setUsers([...users, user])
    }

    const deleteUser = id => {
        setEditing(false)
        setUsers(users.filter(user => user.id !== id))
    }

    const [courseVisible, setCourseVisible] = useState(false)

    return (
        <Container style={{marginTop:'50px', paddingBottom:'50px'}}>
            <Card className="card_with_courses">
                <Card.Body style={{paddingTop:10, marginRight:'40px'}}>
                    <Row>
                        {/* добавляем ? рисуй форму редактирования, иначе - пусто */}
                        {editing ? (
                            <div>
                                <AddUserForm addUser={addUser} setEditing={setEditing} />
                            </div>
                        ) : (
                            <>
                            </>
                        )}
                    </Row>
                    <Row className="justify-content-end">
                        <img src={plus_add} onClick={() => {setEditing(true)}}  style={{width:35,padding:0, cursor:"pointer",
                            marginBottom:'20px'}}/>
                    </Row>
                    <Row>
                        <UserTable users={users} deleteUser={deleteUser} />
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
});

export default Edit_Courses