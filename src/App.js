import React from 'react';
import Table from './Table'

const data = require('./data.json')

function App({items}) {
  
  const table = data.map(d => <Table data={d} key={d.ID}/>);
  return (
    <div className="App">
        {table}
        <p>{items}</p>
    </div>
  );
}
// const {render} = ReactDOM;

// const showTable = props =>{
//   props.data.map((item,i) => React.createElement("tr",{key:i},
//     Object.keys(item).map((th,j) => React.createElement("th",{key:j},th))
//   ))
// }

// render(
//   showTable(data),
//   document.getElementById('table')
// )

export default App;
