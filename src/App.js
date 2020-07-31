import React from 'react';
import Main from './components/Main.js'

const data = require('./data.json')

class App extends React.Component{
  constructor(){
    super()
    this.state ={
      items:[],
      loadingStatus:false
    }
  }

  componentDidMount(){
    this.setState({loadingStatus:true})
    //TODO: Create API carry the data
    //TODO: Fetch the API
    
    //fake data
    this.setState({items:data,
                    loadingStatus:true})
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
