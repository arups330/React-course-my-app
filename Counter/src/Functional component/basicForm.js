import React, {useState} from 'react'

function BasicForm  ({Signin}){

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const submithandler =(e)=>{
         e.preventDefault();
         Signin(email,password);
    }
    return(
    <>
    <form onSubmit={submithandler}>
    <div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" autoComplete="off"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
    
    </div>
       <div>
           <label htmlFor="password">Password</label>
           <input type="text" name="password" id="password" autoComplete="off"
           value={password}
           onChange={(e)=>setPassword(e.target.value)}
           />
       </div>
       <button type="submit" onClick={submithandler}>Login</button>
       </form>
       </>
    );
}
export default BasicForm;