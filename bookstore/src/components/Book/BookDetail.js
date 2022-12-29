import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    TextField,
  } from "@mui/material";
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { useNavigate, useParams } from "react-router-dom";
  import UpgradeIcon from '@mui/icons-material/Upgrade';
  const BookDetail = () => {
    const [inputs, setInputs] = useState();
    const id = useParams().id;
    const [checked, setCheked] = useState(false);
    const history = useNavigate();
    useEffect(() => {
      const fetchHandler = async () => {
        await axios
          .get(`http://localhost:5000/books/${id}`)
          .then((res) => res.data)
          .then((data) => setInputs(data.book));
      };
      fetchHandler();
    }, [id]);
  
    const sendRequest = async () => {
      await axios
        .put(`http://localhost:5000/books/${id}`, {
          name: String(inputs.name),
          author: String(inputs.author),
          description: String(inputs.description),
          price: Number(inputs.price),
          image: String(inputs.image),
          available: Boolean(checked),
        })
        .then((res) => res.data);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      sendRequest().then(() => history("/books"));
    };
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
  
    return (
    
     <Box display='flex'
   flexDirection='column'
   justifyContent='center'
    maxWidth={700}
     alignItems= 'center'
     alignContent='center'
     alignSelf='center'
     marginLeft='auto'
     marginRight='auto'
     marginTop={6}>
  {inputs && (<form onSubmit={handleSubmit}>
    
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
        < UpgradeIcon sx={{pr:0.5}}/>AddBook</Button>
    
 </form>)}
      </Box>
          
    );
  };
  
  export default BookDetail;