import React from 'react'
import letter_S from "../assets/letter-s.png"
import {Row} from "react-bootstrap";
import plus_add from "../assets/plus_80605.svg";

const UserTable = props => {
    const handleDeleteUser = id => {
        let answer = window.confirm('Действительно удалить курс?')
        if (answer) {
            props.deleteUser(id)
        }
    }
    return (

        <table className="table table-hover">
            <tbody>
            {props.users.length > 0 ? (
                props.users.map(user => (

                    <tr key={user.id}>

                        <td style={{paddingRight:0}}> <img src ={letter_S} style={{width:50}}/></td>

                        <td style={{fontWeight: 600, verticalAlign:"middle"}}>{user.name}</td>
                        <td  style={{verticalAlign:"middle"}}>
                            {/* добавили обработку на клик */}
                            <button className="button muted-button" onClick={() => handleDeleteUser(user.id)}
                                    style={{backgroundColor: '#fc4e71', borderRadius:'10px',float:"right"}}>
                                <p style={{padding:0, margin:'3px'}}>Удалить</p>
                            </button>
                            <button onClick={() => {props.editRow(user)}} className="button muted-button"
                                style={{backgroundColor: '#9685ff', borderRadius:'10px', marginLeft: '10px',
                                    marginRight:'10px', float:"right"}}>
                                <p style={{padding:0, margin:'3px'}}>Редактировать</p>
                            </button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}> Нет курсов </td>
                </tr>
            )}
            </tbody>
        </table>
    )
}

export { UserTable }