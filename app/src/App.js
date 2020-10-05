import React from 'react';
import Main from './components/Main.js'


class App extends React.Component{
  constructor(){
    super()
    this.state ={
      items:[],
      currentContainer:""
    }
  }

  renderContainer(id){
    
  }

  componentDidMount(){
    //TODO: Create API carry the data
    //TODO: Fetch the API
    
    //fake data
    this.setState({items:data,isLoading:false})
  }

  render(){
    const Data = this.state
    return(
      <React.Fragment>
        <Main renderContainer={this.renderContainer}/>
      </React.Fragment>
       
    )
  }
}


export default App;
