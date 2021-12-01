import { Movie } from './Movie';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import {useHistory} from 'react-router-dom';
import { useEffect, useState} from 'react'; 


export function MovieList() {
  const [movies,setMovies] = useState([]);


  const API_URL = "https://b28wd-moviesapp.herokuapp.com"
  useEffect(() => {
    fetch(`${API_URL}/movies`)
    .then(data => data.json())
    .then(mvs => setMovies(mvs))
  },[]);

  const history = useHistory();
  
  const getMovies = () => {
    fetch(`${API_URL}/movies`)
    .then((data) => data.json())
    .then((mvs) => setMovies(mvs));
  }

  return <div className='movi-list'>

    {movies.map(({ name, poster, rating, summary,_id }) => <Movie
      movie={name}
      poster={poster}
      rating={rating}
      summary={summary}
      key={_id}
      deleteButton= {<IconButton onClick={
        ()=>{
            fetch(`${API_URL}/movies/${_id}`,{
              method: 'DELETE'
            })
            .then(() => getMovies()).then(() => console.log(_id));
            
      }}>
        <DeleteIcon color='error' />
        </IconButton>}
        
        editButton= {
          <IconButton onClick={() => {
              history.push('/editMovie/'+_id);
            }
          }>
      <EditIcon color='secondary'/>
      </IconButton>
        }
      />)}

  </div>;
}



