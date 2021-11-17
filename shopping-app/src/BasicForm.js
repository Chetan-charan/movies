import { useFormik } from 'formik';
import * as yup from 'yup';



const formValidationSchema = yup.object({
    email: yup.string()
    .min(5,'Need bigger mail')
    .required('required')
    .matches(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,'pattern not matched'),      //error message comes from yup or can give a custom message
                  
    password: yup.string()
    .min(8,'Need a longer password')
    .required('required')

});


export function BasicForm() {
    const {handleSubmit,handleChange,handleBlur,errors,touched,values} = useFormik(    //we are using object destructuring instead of repeating formik.
        {initialValues: {email: '',password: ''},
        validationSchema: formValidationSchema,
        //only when there is no erros onsubmit is called
        onSubmit: (values) => {
            console.log('onSubmit',values);
        }
    })
  
  
  return <form onSubmit={handleSubmit}>
    <input 
    id='email'
    name='email'
    value={values.email} 
    onChange={handleChange}
    onBlur={handleBlur}
    type='email' 
    placeholder='email' />
    {errors.email && touched.email ? errors.email : ''}
    <input 
    id='password'
    name='password'
    value={values.password} 
    onChange={handleChange}
    onBlur={handleBlur}
    type='password' 
    placeholder='password' />
    { errors.password && touched.password ? errors.password : ''}
    
    <button type='submit'>submit</button>
  </form>;

}

// const validateForm = (values) => {
//     const errors = {}
//     console.log('ValidateForm',values);

//     if(values.email.length < 5){
//         errors.email = 'please provide minimum 5 characters'
//     }else if (
//         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)    //regex taken from formic docs
//       ) {
//         errors.email = 'Invalid email address';
//       }

//     if(values.password.length < 8){
//         errors.password = 'please provide a longer password';
//     }else if(values.password.length > 12){
//         errors.password = 'please provide  12 or less characters'
//     }
//     console.log(errors);
//     return errors;
// }

// export function BasicForm() {
//     const {handleSubmit,handleChange,handleBlur,errors,touched,values} = useFormik(    //we are using object destructuring instead of repeating formik.
//         {initialValues: {email: 'chetan',password: 'abc'},
//         validate: validateForm,
//         //only when there is no erros onsubmit is called
//         onSubmit: (values) => {
//             console.log('onSubmit',values);
//         }
//     })
  
  
//   return <form onSubmit={handleSubmit}>
//     <input 
//     id='email'
//     name='email'
//     value={values.email} 
//     onChange={handleChange}
//     onBlur={handleBlur}
//     type='email' 
//     placeholder='email' />
//     {errors.email && touched.email ? errors.email : ''}
//     <input 
//     id='password'
//     name='password'
//     value={values.password} 
//     onChange={handleChange}
//     onBlur={handleBlur}
//     type='password' 
//     placeholder='password' />
//     { errors.password && touched.password ? errors.password : ''}
    
//     <button type='submit'>submit</button>
//   </form>;

// }



