import React, { useState } from 'react';
import Counter from './counter';

function Counters () {
   const initialState= {  
    counters: [
        {id :1, value:4},
        {id :2, value:0},
        {id :3, value:0},
        {id :4, value:0}
    ]
}
    const [state,setState]=useState(initialState);

   
    
        return (
             <div> 
          
           {state.counters.map(counter=>
            (
                <Counter
                key={counter.id}
               count={counter.count}
               id={counter.id}
               />
            ))}
        </div> );
    
}
 
export default Counters;
