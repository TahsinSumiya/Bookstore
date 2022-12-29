import { FormLabel, TextField,Box ,Button,Checkbox} from '@mui/material'
import React, { useState} from 'react'
import { Form } from 'react-router-dom'
import axios from 'axios'
import SendIcon from '@mui/icons-material/Send';
import  './Book/Book.css'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { useNavigate } from 'react-router-dom';
const AddBook = () => {

const history = useNavigate()
const [inputs,setInputs]=useState({
    name:'',
    description:'',
    author:'',
    price:'',
    image:'',
  

})
const [checked,setCheked]=useState(false)

const sendRequest = async()=>{
 await   axios.post('http://localhost:5000/books',{
       name:String(inputs.name),
       author:String(inputs.author),
       description:String(inputs.description),
       price:String(inputs.price),
       image:String(inputs.image),
       available:Boolean(checked),
    }).then(res=>(res.data))
}

const handleChange =(e)=>{
    setInputs ((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value
    }))
}

const handleSubmit =(e)=>{
e.preventDefault()
sendRequest().then(()=>(history('/books')))

alert('Submitted')
}


  return  <Box display='flex'
   flexDirection='column'
   justifyContent='center'
    maxWidth={700}
     alignItems= 'center'
     alignContent='center'
     alignSelf='center'
     marginLeft='auto'
     marginRight='auto'
     marginTop={6}>
  <form onSubmit={handleSubmit}>
    
      <TextField value={inputs.name} onChange={handleChange} margin='normal' helperText="Enter Book Name" 
       id="demo-helper-text-misaligned" label="Book Name"  variant="filled"fullWidth name='name'/>
      
      <TextField value={inputs.author} onChange={handleChange} margin='normal'helperText="Enter Author Name"
       id="demo-helper-text-misaligned" label="Author Name"  variant="filled"fullWidth name='author'/>
      
      <TextField value={inputs.description} onChange={handleChange} margin='normal'helperText="Add Description"
       id="demo-helper-text-misaligned" label="Description" variant="filled"fullWidth name='description'/>
      
      <TextField value={inputs.price} onChange={handleChange} type='number' margin='normal' helperText="Enter Price"
       id="demo-helper-text-misaligned" label="Price" variant="filled"fullWidth name='price'/> 

       <TextField value={inputs.image} onChange={handleChange} type='text' margin='normal' helperText="Enter Image"
       id="demo-helper-text-misaligned" label="Image" variant="filled"fullWidth name='image'/> 
      <Box>
        
       <Checkbox style={{color: '#250e59'}} checked={checked} onChange={()=>setCheked(!checked)}/>
       <label style={{color: '#250e59'}}>Available</label>
      </Box>
      

      <Button style={{backgroundColor: '#250e59', color: '#FFFFFF'}}  type='submit'sx={{mt:1}} >
        <SendIcon sx={{pr:0.5}}/>AddBook</Button>
    
 </form>
      </Box>
}

export default AddBook
