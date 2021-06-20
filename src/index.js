import React from 'react';
import ReactDOM from 'react-dom';


const App = ()=>{
    // return <div>HI THERE!</div>;   
    return(<div>
           <label htmlFor ="name" className="label">
               Entername:
           </label>
            <input id="name" type="text"/>
            <button styles={{backgroundColor:'blue', color:'white'}}>submit</button>
    </div>);
};

ReactDOM.render(<App />,document.querySelector('#root'));