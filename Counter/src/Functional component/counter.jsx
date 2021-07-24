import React, { useState } from 'react';



function Counter  (){
    const [count, setCount]=useState(0);

    function increment()
    {
        setCount(count+1);
    }
    function decrement()
    {
        setCount(count-1);
    }
    function formatcount()
    {
       return count===0?"zero":count;
    }
        return(
         <div>
            <span >{formatcount()}</span>
             <button
                 onClick={increment}>
                 Increment</button>
                 <button
                     onClick={decrement}>
                     Delete</button>
             
             </div>
        );
    }

   
 
export default Counter;