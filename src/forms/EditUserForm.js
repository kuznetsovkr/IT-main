import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
    const [user, setUser] = useState(props.currentUser)

    // используем effect-hook
    useEffect(
        () => {
            // вызывай данную функцию
            setUser(props.currentUser)
        },
        [props] // всегда, если изменились props
    )

    const handleInputChange = event => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (!user.name) return
        props.updateUser(user.id, user)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label style={{marginRight: '10px'}}>Курс </label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange}/>
            <button style={{backgroundColor: '#a89efd', borderRadius:'5px', marginLeft: '10px',
                marginRight:'10px'}}>Обновить курс</button>
            <button onClick={() => props.setEditing(false)} className="button muted-button"
                    style={{backgroundColor: '#fc4e71', borderRadius:'5px'}}>Отмена</button>
        </form>
    )
}

export { EditUserForm }