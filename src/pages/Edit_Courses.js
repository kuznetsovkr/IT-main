import {observer} from "mobx-react-lite";
import {Button, Card, Container, Modal, Row} from "react-bootstrap";
import React, {useState} from "react";
import {AddUserForm} from "../forms/AddUserForm";
import {UserTable} from "../table/UserTable";
import {EditUserForm} from "../forms/EditUserForm";
import plus_add from "../assets/plus_80605.svg";
import logo from "../assets/Logo.png";
import {Link, useHistory} from "react-router-dom";
import CreateCourse from "../components/CreateCourse";

const Edit_Courses = observer(() =>  {

    const usersData = [
        { id: 1, name: 'Python - разработка', username: '@SkillBox1' },
        { id: 2, name: 'Web - разработка', username: '@SkillBox2' },
        { id: 3, name: 'Разработка игр', username: '@SkillBox3' },
    ]

    const [users, setUsers] = useState(usersData)
    // флаг editing - изначально false, функция установки флага
    const [editing, setEditing] = useState(false)
    // начальное значение для формы редактирования
    // так как мы не знаем, кто редактируется - пустые поля
    const initialFormState = { id: null, name: '', username: '' }
    // значение "текущий пользователь на редактировании" + функция установки этого значения
    const [currentUser, setCurrentUser] = useState(initialFormState)

    const addUser = user => {
        user.id = users.length + 1
        setUsers([...users, user])
    }

    const deleteUser = id => {
        setEditing(false)
        setUsers(users.filter(user => user.id !== id))
    }

    // обновление пользователя
    const updateUser = (id, updatedUser) => {
        // когда мы готовы обновить пользователя, ставим флажок editing в false
        setEditing(false)
        // и обновляем пользователя, если нашли его по id
        setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    }

    // редактирование пользователя
    const editRow = user => {
        // готовы редактировать - флажок в true
        setEditing(true)
        // устанавливаем значения полей для формы редактирования
        // на основании выбранного "юзера"
        setCurrentUser({ id: user.id, name: user.name, username: user.username })
    }
    const [courseVisible, setCourseVisible] = useState(false)
    const history = useHistory()


    const Form_Add  = ({show, onHide}) => {
        return (
            <Modal show={show} onHide={onHide} centered style={{backgroundColor: 'rgba(0,0,0,0.7)'}}>
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