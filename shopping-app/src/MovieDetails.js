import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {useState, useEffect} from 'react';

export function MovieDetails() {
  const { id } = useParams(); 
  const styleButton = {marginLeft: '2rem',marginTop: '1rem', padding: '5px',marginBottom: '1rem'}
  const styles = { marginLeft: '2rem', width: '60%'};
  const [movie,setMovie] = useState({});

  useEffect(() => {
    fetch(`https://6166c4e013aa1d00170a670a.mockapi.io/movies/${id}`)
    .then((data) => data.json())
    .then(mv => setMovie(mv))
  } ,[id]);

  const history = useHistory();

  return <div>
    <h1 style={styles}> {movie.movie}</h1>

    <p style={styles}>{movie.summary}</p>
    <iframe style={styles} width="900" height="506" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <br/>
    <Button style={styleButton} variant="contained" onClick={()=> { history.goBack() }}><KeyboardBackspaceIcon/>Back</Button>
  </div>;
}

