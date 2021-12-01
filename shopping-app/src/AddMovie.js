import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useHistory} from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

const API_URL = "https://b28wd-moviesapp.herokuapp.com"

const formValidationSchema = yup.object({
  movie: yup.string().min(4,'Minimum 4 characters required!!').required('required'),                 
  rating: yup.number().min(0).max(10).required('required'),
  summary: yup.string().min(20,'Minimum 20 characters required 😉').required('required'),
  poster: yup.string().min(4,'Minimum 4 characters required 😃').required('required'),
  trailer: yup.string().min(4,'Minimum 4 characters required 😄').required('required'),
});


export function AddMovie() {
  const history = useHistory();

  const {handleSubmit,handleChange,handleBlur,errors,touched,values} = useFormik(    
    {initialValues: {movie: '',rating: '',summary: '',poster: '',trailer: ''},
    validationSchema: formValidationSchema,
    
    onSubmit: (values) => {
        console.log('onSubmit',values);

        fetch(`${API_URL}/movies/`,{method: 'POST',body: JSON.stringify(values),headers: {
          'Content-Type': 'application/json'
        },}).then(() => history.push('/movies'));
      
    }
})


  

  return <form onSubmit={handleSubmit}>
        <div className='add-fields'>

        <TextField   name='movie'
        onBlur={handleBlur} 
        helperText={errors.movie && touched.movie && errors.movie} 
        value={values.movie}  
        error ={errors.movie && touched.movie}
        onChange={handleChange} 
        id="movie" 
        label="Movie" 
        variant="standard" />
        
        <TextField name='rating'  
        onBlur={handleBlur} 
        value={values.rating}
        helperText={errors.rating && touched.rating && errors.rating} 
        onChange={handleChange} 
        error={errors.rating && touched.rating}
        id="standard-basic"
        label='rating'  
        variant="standard" />

        <TextField  name='summary' 
        onBlur={handleBlur}   
        value={values.summary}
        helperText={errors.summary && touched.summary && errors.summary}
        onChange={handleChange}
        error={errors.summary && touched.summary}
        id="standard-basic" 
        label="Summary" 
        variant="standard" />

        <TextField  name='poster'  
        value={values.poster}
        onBlur={handleBlur}   
        helperText={errors.poster && touched.poster && errors.poster}
        onChange={handleChange} 
        error={errors.poster && touched.poster}
        id="standard-basic" 
        label="Poster url" 
        variant="standard" />

        <TextField  name='trailer'
        value={values.trailer} 
        helperText={errors.trailer && touched.trailer && errors.trailer}
        onBlur={handleBlur}   
        error={errors.trailer && touched.trailer}
        onChange={handleChange} 
        id="standard-basic" 
        label="Trailer url" 
        variant="standard" />

        <Button type='submit' variant="outlined">Add Movie</Button>
        </div>
        </form>
      
 

}

