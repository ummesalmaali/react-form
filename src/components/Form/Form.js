// import React, { useState } from 'react'
// import style from'./Form.module.css'

// export default function Form() {
//     const [name,setName] = useState('');
//     const [email,setEmail] = useState('');
//     const [password,setPassword] = useState('');

    // const [user,setUser] = useState({name:'',email:'',password:''})
    // const {name, email,password} = user



    // const handleNameChange =(e) =>{
    //     setUser({name:e.target.value,email,password})

    // }
    // const handleEmailChange = (e)=>{
    //     setUser({name,email:e.target.value,password})

    // }
    // const handlePasswordChange = (e) =>{
    //     setUser({name,email,password:e.target.value})

    // }

    // within a single eventhandler
    // const handleChange = (e) =>{
        // const fieldName = e.target.name
        // if(fieldName === 'name'){
        //     setUser({name:e.target.value,email,password})
        // }
        // if(fieldName === 'email'){
        //     setUser({name,email:e.target.value,password})
        // }
        // if(fieldName === 'password'){
        //     setUser({name,email,password:e.target.value})

        // }
        // setUser({...user,[e.target.name]:e.target.value});
        // console.log(e.target.name)
    // }

    // const handleSubmit = (e) =>{
    //     e.preventDefault()
    //     // let userInfo ={
    //     //     name,
    //     //     email,
    //     //     password
    //     // }
    //     console.log(user);
    // }



//     return (
//         <div>
//             <h1>Register Yourself ....alright???</h1>
//             <form actions='' onSubmit={handleSubmit}>
//                <div className={style.formGroup}>
//                <label htmlFor='name'>Enter your name</label>
//                <input type='text' name='name' id='name' required onChange={handleChange} value={name}></input>
//                </div>
              
//                <div className={style.formGroup}>
//                <label>Enter your Email</label>
//                <input type='text' name='email' id='email' required onChange={handleChange} value={email}></input>
//                </div>
            
//                <div className={style.formGroup}>
//                <label>Enter your password</label>
//                <input type='password' name='password' id='password' required onChange={handleChange} value={password}></input>
//                </div>
               
//                <div>
//                    <button type='submit'>Register</button>
//                </div>

//             </form>
//         </div>
//     )
// }
