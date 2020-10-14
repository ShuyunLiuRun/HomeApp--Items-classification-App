import React, { useState } from 'react';
import Main from './components/Main.js'
import * as Fetch from './components/DataComponent.js'
//fake data
const fd = require('./data.json');


function App() {
  const [data, setData] = useState();
  const [currentContainer, setCurrentContainer] = useState(' ');
  const [isLoading, setIsLoading] = useState(true);

  // the initial interface
  Fetch.get("http://localhost:4000/").then((res)=>{
    if(res){
      setData(res);
      setIsLoading(false);
    }
  });

  //once the user click on an item(container), 
  //get all the items stored in this item(container)
  const clickOnItem = async (name, ID, level, contained_by, additional_json) => {
    console.log(name + ID);
    setIsLoading(true);
    setCurrentContainer(name);

    var baseUrl = "http://localhost:4000/";
    let url = baseUrl + ID;

    Fetch.get(url).then((response) => {
      if (response) {
        // no error occurred
        setData(response);
        console.log(data);
        setIsLoading(false);
      }
    });
  };


  //TODO: user click add item, jump to a form
  const addItemForm = () => {

  }

  //TODO: post new item to database
  // addItem() {

  // }

  //TODO: back to upper level
  //(someone says there is a windows method to jump back)
  // goBack() {

  // }

  //TODO: home button click to go to the first level

  //TODO: search for item



  return (
    <React.Fragment>
      <Main Data={data} clickOnItem={clickOnItem} currentContainer={currentContainer} isLoading={isLoading}/>
    </React.Fragment>

  )
}



export default App;
