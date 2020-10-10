import React from 'react';
import Main from './components/Main.js'
//fake data
const data = require('./data.json');


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentContainer: ""
    }

    this.clickOnItem = this.clickOnItem.bind(this);
  }

  //once the user click on an item(container), 
  //fetch new data for this item(container)
  clickOnItem(name, ID, level, contained_by, additional_json ) {
    console.log(name + ID);

    // Real Data
    var JsonData = {
      item_id:ID,
      item_name:name,
      level:level,
      contained_by:contained_by,
      additional_json:additional_json
    };

    fetch(`http://localhost:4000/${ID}`, {
      mode: 'no-cors',
      method: 'GET',
      headers:{
        'content-type': 'application/json'
      }
    })
    .then(res => {
      console.log(JSON.stringify(res));
    })
    .catch((err) => console.log(err));
  }

  //user click add item, jump to a form
  addItemForm() {

  }

  //pass new item attributes to API
  addItem() {

  }

  //back to upper level
  goBack() {

  }

  componentDidMount() {
    this.setState({ isLoading: true });
    //TODO: Create API carry the data
    //TODO: Fetch the API

    //fake data
    this.setState({ items: data, isLoading: false });

  };

  render() {
    const Data = this.state
    return (
      <React.Fragment>
        <Main Data={Data} clickOnItem={this.clickOnItem} />
      </React.Fragment>

    )
  }
}


export default App;
