import {observer} from "mobx-react-lite";
import {Button, Card, Col, Container, Modal, Row} from "react-bootstrap";
import React, {useState} from "react";
import {AddUserForm} from "../forms/AddUserForm";
import {UserTable} from "../table/UserTable";
import {EditUserForm} from "../forms/EditUserForm";
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

    const updateUser = (id, updatedUser) => {
        setEditing(false)
        setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    }

    const editRow = user => {
        setEditing(true)
        setCurrentUser({ id: user.id, name: user.name, username: user.username })
    }
    const [courseVisible, setCourseVisible] = useState(false)
    const history = useHistory()

    const Form_Add  = ({show, onHide}) => {
        return (
            <Modal show={show} onHide={onHide} centered style={{backgroundColor: 'rgba(0,0,0,0.7)'}}>
                <Modal.Header style={{backgroundColor: "#E5E5E5", height:60}} closeButton>
                    <Col className="d-flex justify-content-center">
                        <Modal.Title><p style={{fontWeight: 600}}>Добавление курса</p></Modal.Title>
                    </Col>
                </Modal.Header>
                <Modal.Body>
                    <AddUserForm addUser={addUser} />
                </Modal.Body>
            </Modal>
        );
    };

    return (
        <Container style={{marginTop:'50px', paddingBottom:'50px'}}>
            <Card className="card_with_courses">
                <Card.Body style={{paddingTop:10, marginRight:'40px'}}>
                    <Row>
                        {/* редактируем ? рисуй форму редактирования, иначе - пусто */}
                        {editing ? (
                            <div>
                                <EditUserForm
                                    editing={editing}
                                    setEditing={setEditing}
                                    currentUser={currentUser}
                                    updateUser={updateUser}
                                />
                            </div>
                        ) : (
                            <>
                            </>
                        )}
                    </Row>
                    <Row className="justify-content-end">
                        <img src={plus_add} onClick={() =>  setCourseVisible(true)} style={{width:35,padding:0, cursor:"pointer",
                        marginBottom:'20px'}}/>
                        <Form_Add show={courseVisible} onHide={() => setCourseVisible(false)}/>
                    </Row>
                    <Row>
                        <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
});

export default Edit_Courses