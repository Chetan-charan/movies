import { Movie } from './Movie';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import {useHistory} from 'react-router-dom';
import { useEffect, useState} from 'react'; 

export function MovieList() {
  const [movies,setMovies] = useState([]);

  useEffect(() => {
    fetch('https://6166c4e013aa1d00170a670a.mockapi.io/movies')
    .then(data => data.json())
    .then(mvs => setMovies(mvs))
  },[]);

  const history = useHistory();
  
  const getMovies = () => {
    fetch('https://6166c4e013aa1d00170a670a.mockapi.io/movies')
    .then((data) => data.json())
    .then((mvs) => setMovies(mvs));
  }

  return <div className='movi-list'>

    {movies.map(({ Name, poster, Rating, summary,id },index) => <Movie
      Name={Name}
      poster={poster}
      Rating={Rating}
      summary={summary}
      key={Name}
      id={id} 
      deleteButton= {<IconButton onClick={
        ()=>{
            fetch(`https://6166c4e013aa1d00170a670a.mockapi.io/movies/${id}`,{
              method: 'DELETE'
            })
            .then(() => getMovies());
            
      }}>
        <DeleteIcon color='error' />
        </IconButton>}
        
        editButton= {
          <IconButton onClick={() => {
              history.push('/editMovie/'+id);
            }
          }>
      <EditIcon color='secondary'/>
      </IconButton>
        }
      />)}

  </div>;
}



