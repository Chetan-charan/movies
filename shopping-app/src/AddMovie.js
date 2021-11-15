import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';
import {useHistory} from 'react-router-dom';

export function AddMovie() {
  const [Name, setMovie] = useState('');
  const [Rating, setRating] = useState('');
  const [summary, setDesc] = useState('');
  const [poster, setPic] = useState('');
  const [trailer, setTrailer] = useState('');
  const newMovie = {
    Name,Rating,summary,poster,trailer
  }
  const history = useHistory();

  return <div className='add-fields'>
        <TextField onChange={(event) => setMovie(event.target.value)} id="standard-basic" label="Movie" variant="standard" />
        <TextField onChange={(event) => setRating(event.target.value)} id="standard-basic" label="Rating" variant="standard" />
        <TextField onChange={(event) => setDesc(event.target.value)} id="standard-basic" label="Summary" variant="standard" />
        <TextField onChange={(event) => setPic(event.target.value)} id="standard-basic" label="Poster url" variant="standard" />
        <TextField onChange={(event) => setTrailer(event.target.value)} id="standard-basic" label="Trailer url" variant="standard" />

        <Button onClick={() => {
          fetch('https://6166c4e013aa1d00170a670a.mockapi.io/movies/',{method: 'POST',body: JSON.stringify(newMovie),headers: {
            'Content-Type': 'application/json'
          },}).then(() => history.push('/movies'));
        
        }} variant="outlined">Add Movie</Button>
        
      </div>
 

}
