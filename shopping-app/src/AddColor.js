import {  useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ColorBox } from "./ColorBox";






export function AddColor({state,dispatch}) {

  const [colors, setColors] = useState(['teal', 'orange', 'lavender']);

  const Styles = { backgroundColor: state.color };
  
  return <div>
    <div className='Add-color'>

    <h2> Count: {state.count} </h2>
    
      <button onClick={() => {
        dispatch({ type: "increment" })

        console.log(dispatch)
        console.log(state)
      } }>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset", payload: 0 })}>
        Reset
      </button>
      <TextField value={state.color} style={Styles} onChange={(event) => dispatch({type: 'changecolor',payload:event.target.value})} id="filled-basic" label="Enter a color" variant="filled" />
      
      
      <Button onClick={() => setColors([...colors, state.color])} variant="contained">Add color</Button>
      {colors.map((clr, index) => <ColorBox color={clr} key={index} />)}
    </div>
  </div>;
}
