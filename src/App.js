import React from 'react';
import Table from './Table'
import Main from './components/Main.js'

const data = require('./data.json')

// function App({items}) {
  
//   const table = data.map(d => <Table data={d} key={d.ID}/>);
//   return (
//     <div className="App">
//         {table}
//         <p>{items}</p>
//     </div>
//   );
// }

class App extends React.Component{
  constructor(){
    super()
    this.state = data
  }

  render(){
    const Data = this.state
    return(
      <Main Data={Data}/> 
    )
  }
}


export default App;
