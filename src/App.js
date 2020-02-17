import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import './App.css';
const COLORS = [
  'black',
  'grey',
  'white',
  'red',
  'green',
];

const HOST = 'localhost:5001'


function App() {
  const deffaultCell = {
    type: 2
  };
  const [field, setField] = useState(
    [
    [deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,],
    [deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,],
    [deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,],
    [deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,],
    [deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,],
    [deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,],
    [deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,],
    [deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,],
    [deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,],
    [deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,],
    [deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,],
    [deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,],
    [deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,],
    [deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,],
    [deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,],
    [deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,],
    [deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,],
    [deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,],
    [deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,],
    [deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,deffaultCell,]]
    )

  useEffect(fetch(`http://vk.com`).then((res)=>console.log(res)),[field])
  return (
    <div className="App">
     <div className={'bord'}>
        {
          field.map((row, index_row)=>(
            <div key={index_row} className={'bord__row'}>
              {row.map((cell, index_cell)=>(
                <div key ={ index_cell} className={cn('bord__cell', COLORS[cell.type])} >
                  
                </div>
              ))}
            </div>
          )
          )
        } 
      </div> 
    </div>
  );
}

export default App;
