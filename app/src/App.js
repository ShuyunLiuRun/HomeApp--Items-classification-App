import React, { useState } from 'react';
import Main from './components/Main.js';
import * as Fetch from './components/DataComponent.js';
import AddItemForm from './components/Item/AddItemForm.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './style.css';


//fake data
const fd = require('./data.json');

const BaseUrl = "http://localhost:4000/";

// TODO: complete the Api commanderand change the previous code
const ApiBuilder = {
  GetItemApi: (itemId) => { return BaseUrl + 'item/' + (!isNaN(itemId) ? itemId : ''); },
  SearchItemByNameAndContainerIdApi: (itemName, id) => { return BaseUrl + 'search/?item_name=' + itemName + '&containerId=' + id },
  GetContainerApi: (containerId) => { return BaseUrl + 'container/' + (!isNaN(containerId) ? containerId : '0'); },
}

function App() {
  const [data, setData] = useState(fd);
  const [containerLabel, setContainerLabel] = useState(' ');
  const [isLoading, setIsLoading] = useState(true);
  const [init, setInit] = useState(true);
  const [currentContainerId, setCurrentContainerId] = useState(0);

  //initialize the program
  if (init) {
    programInit();
  }

  // the function to load the initial data
  function programInit() {
    Fetch.get(ApiBuilder.GetContainerApi(0)).then((res) => {
      handleGetResponse(res);
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
    setIsLoading(true);
    setContainerLabel(name);
    setCurrentContainerId(ID);
    // if this item is a container, get it's children
    Fetch.get(ApiBuilder.GetContainerApi(ID)).then((response) => {
      handleGetResponse(response);
    });
  };

  //Collect new item's data from the form 
  const handleFormSubmit = (dataFromForm) => {
    setIsLoading(true);
    //add container info for this new item
    dataFromForm["contained_by"] = currentContainerId;
    dataFromForm["container_name"] = containerLabel;
    // post the info into db
    Fetch.post(ApiBuilder.GetItemApi(), dataFromForm).then((response) => {
      if (response) {
        Fetch.get(ApiBuilder.GetContainerApi(currentContainerId)).then((response) => {
          handleGetResponse(response);
        });
      };
    });
  };

  //use the go back button instead of the browsers'
  const goBack = () => {
    if (currentContainerId === 1 || currentContainerId === 0 || containerLabel === ' ') {
      programInit();
      setContainerLabel(' ');
    } else {
      //get current container's info first
      Fetch.get(ApiBuilder.GetItemApi(currentContainerId)).then((response) => {
        if (response) {
            return response[0];
        }
      }).then((resObj) => {
        if (resObj.contained_by === 0) {
          programInit();
          setContainerLabel(' ');
        } else {
          Fetch.get(ApiBuilder.GetItemApi(resObj.contained_by)).then((response) => {
            if (response.length !== 0) {
              //set the label showing in the bar
              console.log(response[0].item_name);
              console.log(response[0].item_id);
              setContainerLabel(response[0].item_name);
              setCurrentContainerId(response[0].item_id);
              return response[0].item_id;
            } else {
              return 0;
            }
          }).then((id) => {
            if (id !== 0) {
              Fetch.get(ApiBuilder.GetContainerApi(id)).then((response) => {
                handleGetResponse(response);
              });
            } else {
              programInit();
            }
            //refresh the page with the upper container's children
  
          })
        }
 
      })
    }
  }

  //delete item
  const deleteItem = (id) => {
    Fetch.remove(ApiBuilder.GetItemApi(id)).then((response) => {
      if (response) {
        //refresh the page by loading current items after one item been deleted
        Fetch.get(ApiBuilder.GetContainerApi(currentContainerId)).then((response) => {
          handleGetResponse(response);
        });
      }
    });
  }

  //search for item
  const handleSearch = (searchContent) => {
    if (!searchContent.trim()) {
      Fetch.get(ApiBuilder.GetContainerApi(currentContainerId)).then((response) => {
        handleGetResponse(response);
      });
    } else {
      Fetch.get(ApiBuilder.SearchItemByNameAndContainerIdApi(searchContent, currentContainerId)).then((response) => {
        handleGetResponse(response);
      });
    }
  }

  // reduce the repeat code
  const handleGetResponse = (response) => {
    if (response) {
      setData(response);
      setIsLoading(false);
    }
  }

  // a home button click to go to the first level
  const goHome = () => {
    setContainerLabel('');
    setCurrentContainerId(0);
    programInit();
  }
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main Data={data} clickOnItem={clickOnItem} goBack={goBack} goHome={goHome} deleteItem={deleteItem} handleSearch={handleSearch} currentContainer={containerLabel} isLoading={isLoading} />
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

