import React, { useState } from 'react'
import style from'./Form.module.css'

export default function Form() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const handleNameChange =(e) =>{
        setName(e.target.value)

    }
    const handleEmailChange = (e)=>{
        setEmail(e.target.value)

    }
    const handlePasswordChange = (e) =>{
       setPassword(e.target.value)

    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(name,email,password)
    }



    return (
        <div>
            <h1>Register Yourself ....alright???</h1>
            <form actions='' onSubmit={handleSubmit}>
               <div className={style.formGroup}>
               <label htmlFor='name'>Enter your name</label>
               <input type='text' name='name' id='name' required onChange={handleNameChange} value={name}></input>
               </div>
              
               <div className={style.formGroup}>
               <label>Enter your Email</label>
               <input type='text' name='email' id='email' required onChange={handleEmailChange} value={email}></input>
               </div>
            
               <div className={style.formGroup}>
               <label>Enter your password</label>
               <input type='password' name='password' id='password' required onChange={handlePasswordChange} value={password}></input>
               </div>
               
               <div>
                   <button type='submit'>Register</button>
               </div>

            </form>
        </div>
    )
}
