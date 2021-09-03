import React, { useState } from 'react'
import style from './SubmitForm.module.css'


export default function SubmitForm(){
    const [name, setName] = useState('');
    const [email, setEmail] =  useState('');
    const [pass, setPass] = useState('')


    const handleNameChange = (e) =>{
        setName(e.target.value)
    

    }
    const handleEmailChange = (e) =>{
        setEmail(e.target.value)
    }
    const handlePassChange = (e) =>{
        setPass(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

    }
    let userInfo ={
        name:name,
        email:email,
        pass:pass
    }
    console.log(userInfo);

    return(
        <div>
           <h1>Register Yourself</h1>
           <form action='' onSubmit={handleSubmit}>
             <div className={style.formDiv}>
             <label htmlFor=''>Enter your Name</label>
               <input type='text' name='name' id='name' value={name} onChange={handleNameChange} required></input>
             </div>
             <div className={style.formDiv}>
             <label htmlFor=''>Enter your Email</label>
               <input type='email' name='email' id='Email' value={email} onChange={handleEmailChange} required></input>
             </div>
              <div className={style.formDiv}>
              <label htmlFor=''>Enter your password</label>
               <input type='password' name='password' id='password' value={pass} onChange={handlePassChange} required></input>
              </div>
              <button type='submit' onClick={handleSubmit}>Register</button>
               

           </form>

        </div>
    )
}