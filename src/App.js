import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
 
  constructor(props){
      super(props);
      this.state={ count: 0}
  }

 onclick(type){
     this.setState(prevState => {
       if (type == 'reset') {
         return {count: prevState.count = 0}
       } else {
        return {count: type == 'add' ? prevState.count + 1: prevState.count - 1}
       }
        
     });
 }

  render() {
   return (
     <div className="background">
       <div className="middle">
         <center>
           <input className="buttons" type='button' onClick={this.onclick.bind(this, 'sub')} value='-'/>
           <input className="middleInput" value={this.state.count} />
           <input className="buttons" type='button' onClick={this.onclick.bind(this, 'add')} value='+'/>
         </center>
         <center>
           <button className="buttonreset" onClick={this.onclick.bind(this, 'reset')} >Reset   <i className="buttonrefresh" class="fa fa-refresh"></i></button>
         </center>
       </div>
      </div>
    )
  }
}

export default App;