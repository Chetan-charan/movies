import { useReducer, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ColorBox } from "./ColorBox";


const initialState = {color: 'white'};

const reducer = (state, action) => {

  switch (action.type) {
    case "changecolor":
    
    return { color: action.payload };

    default:
      return state;
  }
};

export function AddColor() {

  const [state,dispatch] = useReducer(reducer,initialState);

  const [colors, setColors] = useState(['teal', 'orange', 'lavender']);


  
  const Styles = { backgroundColor: state.color };
  return <div>
    <div className='Add-color'>
      
      <TextField value={state.color} style={Styles} onChange={(event) => dispatch({type: 'changecolor',payload:event.target.value})} id="filled-basic" label="Enter a color" variant="filled" />
      
      
      <Button onClick={() => setColors([...colors, state.color])} variant="contained">Add color</Button>
      {colors.map((clr, index) => <ColorBox color={clr} key={index} />)}
    </div>
  </div>;
}
