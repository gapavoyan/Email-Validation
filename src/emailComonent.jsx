import React, { useState } from 'react'

function EmailComonent() {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState(false)
    const [error, setError] = useState("")
    function login(e) {
        e.preventDefault()
    }
    function handleOnchange(e) {
        setEmail(e.target.value)
    }
    function checkEmail(e) {
        const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (emailFormat.test(email)) {
            setMessage(true)
            setError("Email is valid")
        }
        else if (!emailFormat.test(email) && email != "") {
            setMessage(false)
            setError("Email is not valid")
        }


    }
    return (
        <div>
            <div className='content'>
                <form onSubmit={login}>
                    <label htmlFor='input'>Email</label>
                    <input name='email' id='input' value={email} type="email" onChange={handleOnchange} style={{ borderColor: message ? "green" : "red" }} />
                <p>{error}</p>
                    <button onClick={checkEmail} className="button">Check</button>
                </form>
            </div>
        </div>
    )
}

export default EmailComonent