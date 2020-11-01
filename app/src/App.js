import React, { useState } from 'react';
import Main from './components/Main.js';
import * as Fetch from './components/DataComponent.js';
import AddItemForm from './components/Item/AddItemForm.js';
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";

//fake data
const fd = require('./data.json');



function App() {
  const [data, setData] = useState(fd);
  const [containerLabel, setContainerLabel] = useState(' ');
  const [isLoading, setIsLoading] = useState(true);
  const [init, setInit] = useState(true);
  const [currentContainerId, setCurrentContainerId] = useState(0);
  const [newItem, setNewItem] = useState();
  //可能不需要level字段？
  //const [currentLevel, setCurrentLevel] = useState(1);

  //the initial data
  if (init === true) {
    Fetch.get("http://localhost:4000/").then((res) => {
      setIsLoading(false);
      setData(res);
      //'init' is a trigger to prevent the program from jumping into a fetch loop
      setInit(false);
    }).catch((error) => {
      alert(error);
      setInit(false)
    });
  }

  //once the user click on an item(container), 
  //get all the items stored in this item(container)
  const clickOnItem = async (name, ID, level, contained_by, additional_json, is_container) => {
    console.log(name + ID);
    setIsLoading(true);
    setContainerLabel(name);
    setCurrentContainerId(ID);

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

  //Collect new item's data from the form 
  //item_name, item_id, level, contained_by, additional_json , is_container
  const handleFormSubmit = (dataFromForm) => {
    dataFromForm["contained_by"] = currentContainerId;
    var jsonD = JSON.stringify(dataFromForm);
    console.log("new item: "+ jsonD);
    
  };

  // post the new item into database
  const submitItem = async (name, ID,  additional_json) => {
    //console.log(name + ID);
    setIsLoading(true);

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

    //shou up a alert, then go back to homepage
  };

  //TODO: back to upper level
  //(someone says there is a windows method to jump back)
  // goBack() {

  // }

  //TODO: home button click to go to the first level

  //TODO: search for item



  return (
    <React.Fragment>

      <Router>
        <Switch>
          <Route exact path="/">
            <Main Data={data} clickOnItem={clickOnItem} currentContainer={containerLabel} isLoading={isLoading} />
          </Route>
          <Route path="/form">
            {/* use props to pass data */}
            <AddItemForm currentContainerId={currentContainerId} handleFormSubmit={handleFormSubmit}/>
          </Route>
        </Switch>
      </Router>


    </React.Fragment>

  )
}





export default App;

