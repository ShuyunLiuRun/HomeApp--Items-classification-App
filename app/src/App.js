import React, { useState } from 'react';
import Main from './components/Main.js';
import * as Fetch from './components/DataComponent.js';
import AddItemForm from './components/Item/AddItemForm.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ClickOnOneItem from './components/Item/ClickOnOneItem.js'

//fake data
const fd = require('./data.json');

const baseUrl = "http://localhost:4000/";

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
    Fetch.get(baseUrl).then((res) => {
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

    Fetch.get(baseUrl+ID).then((response) => {
      if (response) {
        // no error occurred
        console.log("Get Response"+response)
        setData(response);
        console.log(data);
        setIsLoading(false);
      }
    });
  };

  //Collect new item's data from the form 
  //item_name, item_id, level, contained_by, additional_json , is_container
  const handleFormSubmit = (dataFromForm) => {
    setIsLoading(true);
    //add container Id for this new item
    dataFromForm["contained_by"] = currentContainerId;
    console.log("new item: " + JSON.stringify(dataFromForm));

    //两件事： 1. 将新物品存到数据库
    // 2.  跳出alert， 并且（在不刷新的前提下）回到上一级 （刷新也行？反正要记住 currentContainerId然后展列这个container中所有物品）

    Fetch.post(baseUrl + "addItem/", dataFromForm).then((response) => {

      if (response) {
        // no error occurred
        console.log(response);
        setIsLoading(false);
      }
    });
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
            <Main Data={data} clickOnItem={clickOnItem} isLoading={isLoading} />

            {/* rebuild the structure, to use router for specific item */}
            <Route path="/:id">
              <ClickOnOneItem clickOnItem={clickOnItem} Data={data} containerLabel={containerLabel} isLoading={isLoading}/>
            </Route>


          </Route>
          <Route path="/form">
            {/* use props to pass data */}
            <AddItemForm currentContainerId={currentContainerId} handleFormSubmit={handleFormSubmit} />
          </Route>
        </Switch>
      </Router>


    </React.Fragment>

  )
}





export default App;

