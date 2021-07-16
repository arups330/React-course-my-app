import React, { Component } from 'react';

class Counter extends Component {

    
    state={
        count :0
    };


    hadleIncrement=()=>{
        this.setState({count:this.state.count+1});
    };
    hadleDelete=()=>{
        this.setState({count:this.state.count-1});
    };


    render() { 
        return(
         <div>
             {this.props.children}
            <span > {this.formatcount()}</span>
             <button
                 onClick={this.hadleIncrement}>
                 Increment</button>
                 <button
                     onClick={this.hadleDelete}>
                     Delete</button>
             
             </div>
        );
    }

    formatcount()
    {
        const {count}=this.state;
        return count === 0?"zero":count;
    }
}
 
export default Counter;