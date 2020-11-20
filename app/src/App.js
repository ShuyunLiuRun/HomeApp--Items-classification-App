import React, { useState } from 'react';
import Main from './components/Main.js';
import * as Fetch from './components/DataComponent.js';
import AddItemForm from './components/Item/AddItemForm.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


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

  //initialize the program
  if (init === true) {
    programInit();
  }

  // the function to load the initial data
  function programInit() {
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

    Fetch.get(baseUrl + ID).then((response) => {
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
    setIsLoading(true);
    //add container Id for this new item
    dataFromForm["contained_by"] = currentContainerId;
    console.log("new item: " + JSON.stringify(dataFromForm));

    //两件事： 1. 将新物品存到数据库
    // 2.  跳出alert， 并且（在不刷新的前提下）回到上一级 （刷新也行？反正要记住 currentContainerId然后展列这个container中所有物品）

    Fetch.post(baseUrl + "addItem/", dataFromForm).then((response) => {
      if (response) {
        // no error occurred
        setIsLoading(false);
      }
    });
  };

  //go back
  const goBack = () => {
    if (currentContainerId === 1) {
      programInit();
      setContainerLabel(' ');
    } else {
      //get current container's info first
      Fetch.get(baseUrl + "containerInfo/" + currentContainerId).then((response) => {
        if (response) {
          // no error occurred
          return response[0];
        }
      }).then((resObj) => {
        Fetch.get(baseUrl + "containerInfo/" + resObj.contained_by).then((response) => {
          if (response) {
            // no error occurred
            console.log("1" + JSON.stringify(response[0]));
            console.log("2" + response[0].item_id);
            console.log("3" + response[0].item_name);

            setIsLoading(true);
            setContainerLabel(response[0].item_name);
            setCurrentContainerId(response[0].item_id);

            return response[0].item_id;
          }
        }).then((id) => {
          //refresh the page with the upper container's children
          Fetch.get(baseUrl + id).then((response) => {
            if (response) {
              // no error occurred
              console.log(response);
              setData(response);
              setIsLoading(false);
            }
          });
        })
      })
    }
  }

  //TODO: home button click to go to the first level

  //TODO: search for item



  return (
    <React.Fragment>

      <Router>
        <Switch>
          <Route exact path="/">
            <Main Data={data} clickOnItem={clickOnItem} goBack={goBack} currentContainer={containerLabel} isLoading={isLoading} />

            {/* rebuild the structure, to use router for specific item */}
            {/* <Route path="/:id">
              <ClickOnOneItem clickOnItem={clickOnItem} Data={data} containerLabel={containerLabel} isLoading={isLoading}/>
            </Route> */}


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

