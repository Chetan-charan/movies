import { useState } from 'react';
import { Counter } from './Counter';
import {useHistory} from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import InfoIcon from '@mui/icons-material/Info';


export function Movie({ movie, poster, rating, summary, id, deleteButton,editButton }) {
  const styles = { color: rating > 8 ? 'green' : 'crimson', fontWeight: 'bold',fontSize: '19px'};
  const [show, setShow] = useState(false);
  const history = useHistory();
  const summaryStyles = {
    display: show ? 'block' : 'none', paddingTop: '.5rem'
  };
  return (<div className="one-movi">
   
    <div>
      <img className="movie-poster" src={poster} alt={movie} />
    </div>
    <div className="content">
      <div className='mv'>
      <p className='content-movie'>{movie}  <InfoIcon  style={{marginLeft: '6px'}} className='info-button' onClick={() => setShow(!show)}></InfoIcon></p>
      <p style={styles}>⭐ {rating}</p>
      </div> 
      <div className='mv'>
      <Counter /> {deleteButton} {editButton}

      
      <IconButton >
      <KeyboardArrowDownIcon color="primary" onClick={() => {
        setShow(show ? false : true)
        history.push('/movieList/'+id);
        }} />
      </IconButton>
     </div> 
      {show ? <p className='content-movie-desc' style={summaryStyles}> {summary}</p> : ''}
    </div>
 
  </div>);
}
