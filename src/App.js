import React from 'react';
import GetData from './components/fetch/GetData.js'
import Main from './components/Main.js'

class App extends React.Component{

  constructor(){
    super()
    this.state ={
      items:[],
      loadingStatus:false
    }
  }


  render(){
    const Data = this.state.items
    return(
      <React.Fragment>
        <Main Data={Data}/>
      </React.Fragment>
       
    )
  }
}


export default App;
