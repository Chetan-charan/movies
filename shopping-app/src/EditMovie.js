import { useState,useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory,useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

const API_URL = "https://b28wd-moviesapp.herokuapp.com"
const formValidationSchema = yup.object({
  name: yup.string().min(4,'Minimum 4 characters required!!').required('required'),                 
  rating: yup.number().min(0).max(10).required('required'),
  summary: yup.string().min(20,'Minimum 20 characters required 😉').required('required'),
  poster: yup.string().min(4,'Minimum 4 characters required 😃').required('required'),
  trailer: yup.string().min(4,'Minimum 4 characters required 😄').required('required'),
});

export function EditMovie() {

  const [editmovie,setEditMovie] = useState(null);
  
  
  const { id } = useParams();
  

  

  useEffect(() => {
    fetch(`${API_URL}/movies/${id}`)
    .then((data) => data.json())
    .then((mv) => setEditMovie(mv));
  },[id])

  return editmovie ? <UpdateMovie editmovie={ editmovie } /> : '';   //if editmovie is true value, render update movie component

}


function UpdateMovie({ editmovie }){
  const history = useHistory();
  const { id } = useParams();
  console.log(editmovie)
  const {handleSubmit,handleChange,handleBlur,errors,touched,values} = useFormik(    
    {initialValues:  {name: editmovie.name,rating: editmovie.rating,summary: editmovie.summary,poster: editmovie.poster,trailer: editmovie.trailer} ,
    validationSchema: formValidationSchema,
    
    onSubmit: (values) => {
        console.log('onSubmit',values);

        fetch(`${API_URL}/movies/${id}`,{method: 'PUT',body: JSON.stringify(values),headers: {
          'Content-Type': 'application/json'
        },}).then(() => history.push('/movies'));
      
    }
})

    return  <form onSubmit={handleSubmit}>
    <div className='add-fields'>

    <TextField   name='name'
    onBlur={handleBlur} 
    helperText={errors.name && touched.name && errors.name} 
    value={values.name}  
    onChange={handleChange} 
    id="name" 
    label="name" 
    variant="standard" />

    <TextField   name='rating'  
    onBlur={handleBlur} 
    value={values.rating}
    helperText={errors.rating && touched.rating && errors.rating} 
    onChange={handleChange} 
    id="standard-basic"
    label='rating'  
    variant="standard" />

    <TextField  name='summary' 
    onBlur={handleBlur}   
    value={values.summary}
    helperText={errors.summary && touched.summary && errors.summary}
    onChange={handleChange}
    id="standard-basic" 
    label="Summary" 
    variant="standard" />

    <TextField  name='poster'  
    value={values.poster}
    onBlur={handleBlur}   
    helperText={errors.poster && touched.poster && errors.poster}
    onChange={handleChange} 
    id="standard-basic" 
    label="Poster url" 
    variant="standard" />

    <TextField  name='trailer'
    value={values.trailer} 
    helperText={errors.trailer && touched.trailer && errors.trailer}
    onBlur={handleBlur}   
    onChange={handleChange} 
    id="standard-basic" 
    label="Trailer url" 
    variant="standard" />

    <Button type='submit' variant="outlined">Save Movie</Button>
    </div>
    </form> 

}
