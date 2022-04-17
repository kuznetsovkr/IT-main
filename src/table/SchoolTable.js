import React from 'react'
import GB from "../assets/GB.svg"

const SchoolTable = props => {
    const handleDeleteSchool = id_school => {
        let answer = window.confirm('Действительно удалить школу?')
        if (answer) {
            props.deleteSchool(id_school)
        }
    }
    return (

        <table className="table table-hover">
            <tbody>
            {props.schools.length > 0 ? (
                props.schools.map(school => (
                    <tr key={school.id_school} >
                        <td style={{paddingRight:10, paddingLeft:70, maxWidth:"40px"}}>
                            <img src ={GB} style={{width:60,float:"right"}}/>
                        </td>
                        <td
                            style={{fontWeight: 600, color:"black", verticalAlign:"middle"}}>
                            {school.name}
                        </td>
                        <td  style={{verticalAlign:"middle", paddingRight:50}}>
                            <button className="button muted-button" onClick={() => handleDeleteSchool(school.id_school)}
                                    style={{backgroundColor: '#C96464',float:"right", paddingLeft:"4vw",
                                        paddingRight:"4vw",paddingBottom:2, paddingTop:2, border:"none"}}>
                                <p style={{padding:0, margin:'3px'}}>Удалить</p>
                            </button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}> Нет школ </td>
                </tr>
            )}
            </tbody>
        </table>
    )
}

export { SchoolTable }