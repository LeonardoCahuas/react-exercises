import React from 'react'
import DisplayCounter from './DisplayCounter';

export class App extends React.Component{
    
    render(){
        return(
            <div>
               <DisplayCounter initialValue={0}/>
            </div>
        ); 
    }
}
export default App;

/* Passing a JSX expression in the name prop makes it render itself 
as the respective HTML tag and is considered valid for 
In order to place a JSX expression in a prop it must be passed into curly brackets */



