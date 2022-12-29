import { Button } from '@mui/material';
import React, { useEffect } from 'react'
import './Book.css'
import {Link,NavLink,useNavigate} from 'react-router-dom'
import UpgradeIcon from '@mui/icons-material/Upgrade';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import axios from 'axios';


const Book = (props) => {
    const history = useNavigate();
    const { _id, name, author, description, price, image } = props.book;
    const deleteHandler = async () => {
      await axios
        .delete(`http://localhost:5000/books/${_id}`)
        .then((res) => res.data).then(() => history("/books"));
    };
          
 

  return <div className='card'>
      <img src={image} alt={name}/>
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h2 >Tk {price}</h2>
      <Button LinkComponent={Link} to={`/books/${_id}`} style={{backgroundColor: '#250e59', color: '#FFFFFF'}} type='submit'sx={{my:2, mx:1}}><UpgradeIcon/>Update</Button>
      <Button onClick={deleteHandler} LinkComponent={Link} to={'/books:id'} style={{backgroundColor: '#250e59', color: '#FFFFFF'}} type='submit'sx={{my:2, mx:1}}><DeleteOutlineIcon/>Delete</Button>
    </div>

}

export default Book
