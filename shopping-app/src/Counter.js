import {useState} from 'react';
import Button from '@mui/material/Button';

function Counter(){
    const btn_styles = {fontSize: '1rem'}
    const [like,setLike] = useState(0);
    const [dislike,setdisLike] = useState(0);
    return <div>
        <Button style={btn_styles} variant="text" onClick={()=> {
        setLike(like+1);
        
    
      }}>👍 {like}</Button>
     <Button style={btn_styles} variant="text" onClick={()=> {
        setdisLike(dislike+1);
        
    
      }}>👎 {dislike}</Button>

    </div>
  
  }

  export {Counter};


