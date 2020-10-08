import React from 'react';
import Main from './components/Main.js'

const data = require('./data.json');


class App extends React.Component{
  constructor(){
    super()
    this.state ={
      items:[],
      currentContainer:""
    }

    this.clickOnItem = this.clickOnItem.bind(this);
  }

  //once the user click on an item(container), 
  //fetch new data for this item(container)
  clickOnItem(currentContainerId){
    console.log(currentContainerId)
  }

  //user click add item, jump to a form
  clickAddItem(){

  }

  //pass new item attributes to API
  addItem(){

  }

  componentDidMount(){
    this.setState({isLoading:true});
    //TODO: Create API carry the data
    //TODO: Fetch the API
    
    //fake data
    this.setState({items:data,isLoading:false});

  };

  render(){
    const Data = this.state
    return(
      <React.Fragment>
        <Main Data = {Data} clickOnItem={this.clickOnItem}/>
      </React.Fragment>
       
    )
  }
}


export default App;
