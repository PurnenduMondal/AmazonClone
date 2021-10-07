import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'
import './Login.css'

function Login() {

    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e => {
        // to prevent page reload on submit
        e.preventDefault()
        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            console.log(auth)
            if (auth)
            {
                history.push('/')
            }
        })
        .catch(err => alert(err.message))
    }

    const register = e => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, password).then(auth => {
            console.log(auth)
            if (auth)
            {
                history.push('/')
            }
        })
        .catch(err => alert(err.message))
    }

    return (
        <div className="login">
            <Link to='/'>
            <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" alt="" 
            />
            </Link>
            <div className="login__container">
                <h1>Sign-In</h1>
                <form action="">

                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type="submit" onClick={signIn}className='login__signInButton'>Continue</button>
                </form>
                <p>
                    By continuing, you agree to AmazonClone's Conditions of Use and Privacy Notice.
                </p>
                <button onClick={register} className='login__registerButton'>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
