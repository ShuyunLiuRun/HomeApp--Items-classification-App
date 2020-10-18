import React, { useState } from 'react';
import Main from './components/Main.js';
import * as Fetch from './components/DataComponent.js';

//fake data
const fd = require('./data.json');



function App() {
  const [data, setData] = useState(fd);
  const [containerLabel, setContainerLabel] = useState(' ');
  const [isLoading, setIsLoading] = useState(true);
  const [init, setInit] = useState(true);
  const [currentContainerId, setCurrentContainerId] = useState(0);

  //the initial data
  if(init === true){
    Fetch.get("http://localhost:4000/").then((res) => {
      setIsLoading(false);
      setData(res);
      //'init' is a trigger to prevent the program from jumping into a fetch loop
      setInit(false);
    }).catch((error)=>  {
      alert(error);
      setInit(false)
    });
  }

  //once the user click on an item(container), 
  //get all the items stored in this item(container)
  const clickOnItem = async (name, ID, level, contained_by, additional_json) => {
    console.log(name + ID);
    setIsLoading(true);
    setContainerLabel(name);

    var baseUrl = "http://localhost:4000/";
    let url = baseUrl + ID;

    Fetch.get(url).then((response) => {
      if (response) {
        // no error occurred
        setData(response);
        setIsLoading(false);
      }
    });
  };


  //TODO: user click add item, jump to a form
  // const addItemForm = () => {

  // }

  //TODO: post new item to database
  // const addItem = async (name, ID, level, contained_by, additional_json) => {
  //   //console.log(name + ID);
  //   setIsLoading(true);
  //   setCurrentContainer(name);

  //   var baseUrl = "http://localhost:4000/";
  //   let url = baseUrl + ID;

  //   Fetch.get(url).then((response) => {
  //     if (response) {
  //       // no error occurred
  //       setData(response);
  //       console.log(data);
  //       setIsLoading(false);
  //     }
  //   });
  // };

  //TODO: back to upper level
  //(someone says there is a windows method to jump back)
  // goBack() {

  // }

  //TODO: home button click to go to the first level

  //TODO: search for item



  return (
    <React.Fragment>

      <Main Data={data} clickOnItem={clickOnItem} currentContainer={containerLabel} isLoading={isLoading} />
    </React.Fragment>

  )
}





export default App;
