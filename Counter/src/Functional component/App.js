import logo from './logo.svg';
import './App.css';
import BasicForm from './component/basicForm';
import Counter from './component/counter';
import Counters from './component/counters';
import React,{useState} from 'react';

function App() {
  const[id , setId] = useState({
    email : "",
    password : ""
});
    
    const Signin=(Temail,Tpassword)=>{ 
      setId( 
        {
          email : Temail,
        password : Tpassword
        }
      )
    }
  return (
   
    <div>
    {
        (id.email === "" && id.password === "" ) ? (
            <BasicForm Signin={Signin} />
        ) : (
            <Counters/>
        )
    } 
</div>
     
  );
}

export default App;