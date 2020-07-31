import React from 'react';
import Main from './components/Main.js'

const data = require('./data.json')

class App extends React.Component{
  constructor(){
    super()
    this.state ={
      items:[],
      isLoading:false
    }
  }

  componentDidMount(){
    this.setState({isLoading:true})
    //TODO: Create API carry the data
    //TODO: Fetch the API
    
    //fake data
    this.setState({items:data,isLoading:false})
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
