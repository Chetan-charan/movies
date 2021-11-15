import { useState,useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory,useParams } from 'react-router-dom';


export function EditMovie() {

  const [Name, setMovie] = useState('');
  const [Rating, setRating] = useState('');
  const [summary, setDesc] = useState('');
  const [poster, setPic] = useState('');
  const [trailer, setTrailer] = useState('');
  const { id } = useParams();
  const history = useHistory();
  const styles = { display: 'flex', flexDirection: 'column', gap: '10px', width: '40%', margin: '25px' };

  useEffect(() => {
    fetch(`https://6166c4e013aa1d00170a670a.mockapi.io/movies/${id}`)
    .then((data) => data.json())
    .then((mv) => {
      setMovie(mv.Name);
      setRating(mv.Rating);
      setDesc(mv.summary);
      setPic(mv.poster);
      setTrailer(mv.trailer);
    })
  },[]);


  return <div style={styles}>
    <TextField value={Name} onChange={(event) => setMovie(event.target.value)} id="standard-basic"  variant="standard" />
    <TextField value={poster} onChange={(event) => setPic(event.target.value)} id="standard-basic"  variant="standard" />
    <TextField value={Rating} onChange={(event) => setRating(event.target.value)} id="standard-basic" variant="standard" />
    <TextField value={summary} onChange={(event) => setDesc(event.target.value)} id="standard-basic"  variant="standard" />
    <TextField value={trailer} onChange={(event) => setTrailer(event.target.value)} id="standard-basic"  variant="standard" />
    <Button onClick={() => { 
        const editMovie = { Name, Rating, summary, poster, trailer }
    
      fetch(`https://6166c4e013aa1d00170a670a.mockapi.io/movies/${id}`,
      {
        method:'PUT',headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(editMovie)
    }).then(() => history.push('/movieList'))

      
    }} variant="outlined">Save Movie</Button>
  </div>;

}
