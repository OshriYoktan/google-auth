import './auth.css'
import {auth,provider} from './config'
import {signInWithPopup} from 'firebase/auth'
import { useEffect, useState } from 'react'
 
export const Auth = () => {
    const [value,setValue] = useState('')

    const handleClick = () => {
        signInWithPopup(auth,provider)
            .then(data => {
                console.log(data);
                setValue(data.user.email)
                localStorage.setItem('email', data.user.email)
            })
    }

    useEffect(()=> {
        setValue(localStorage.getItem('email'))

    })
    return (
        <div className="auth">
            <h4>Sign Up</h4>
            {value ? <button onClick={() => {localStorage.clear(); setValue('')}}>Log out {value}</button> : <button onClick={handleClick}>Sign in with google</button>}
            
        </div>
    )
}