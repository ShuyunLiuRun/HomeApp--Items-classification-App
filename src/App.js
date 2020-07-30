import React from 'react';
import Table from './Table'
import Main from './components/Main.js'

class App extends React.Component{

  constructor(){
    super()
    this.state =""
  }


  render(){
    const Data = this.state
    return(
      <React.Fragment>
        <Main Data={Data}/>
      </React.Fragment>
       
    )
  }
}


export default App;
