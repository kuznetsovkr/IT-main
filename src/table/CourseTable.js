import React, {useState} from 'react'
import letter_S from "../assets/Ellipse 3.svg"

const CourseTable = props => {
    const handleDeleteCourse = id_course => {
        let answer = window.confirm('Действительно удалить курс?')
        if (answer) {
            props.deleteCourse(id_course)
        }
    }
    return (

        <table className="table table-hover">
            <tbody>
            {props.courses.length > 0 ? (
                props.courses.map(course => (
                    <tr key={course.id_course} >
                        <td style={{paddingRight:10, paddingLeft:70, maxWidth:"40px"}}>
                            {<img src={course.img_name} style={{width:60,float:"right"}}/>}
                        </td>
                        <td
                            style={{fontWeight: 600, color:"black", verticalAlign:"middle"}}>
                            {course.name}
                        </td>
                        <td  style={{verticalAlign:"middle", paddingRight:50}}>
                            <button className="button muted-button" onClick={() => handleDeleteCourse(course.id_course)}
                                    style={{backgroundColor: '#C96464',float:"right", paddingLeft:"4vw",
                                        paddingRight:"4vw",paddingBottom:2, paddingTop:2, border:"none"}}>
                                <p style={{padding:0, margin:'3px'}}>Удалить</p>
                            </button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}> Нет курсов</td>
                </tr>
            )}
            </tbody>
        </table>
    )
}

export { CourseTable }