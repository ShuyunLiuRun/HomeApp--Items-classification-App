import React, { useState } from 'react';
import Main from './components/Main.js'
//fake data
const fd = require('./data.json');


function App() {
  const [data, setData] = useState(fd);
  const [currentContainer, setCurrentContainer] = useState(' ');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  //once the user click on an item(container), 
  //fetch new data for this item(container)
  const clickOnItem = async (name, ID, level, contained_by, additional_json) => {
    console.log(name + ID);
    setError(null);
    setIsLoading(true);
    setCurrentContainer(name);

    try {
      fetch(`http://localhost:4000/${ID}`, {
        mode: 'cors',
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(res => {
          console.log("front end fetch get: "+res);
          //setData(JSON.stringify(res));
        });
      setIsLoading(false);
    } catch (e) {
      setError(e);
      setIsLoading(false);
    };
  };


  //user click add item, jump to a form
  // addItemForm() {

  // }

  //pass new item attributes to API
  // addItem() {

  // }

  //back to upper level
  // goBack() {

  // }

  // componentDidMount() {
  //   this.setState({ isLoading: true });
  //   //TODO: Create API carry the data
  //   //TODO: Fetch the API

  //   //fake data
  //   this.setState({ items: data, isLoading: false });

  // };

  return (
    <React.Fragment>
      <Main Data={data} clickOnItem={clickOnItem} />
    </React.Fragment>

  )
}



export default App;
