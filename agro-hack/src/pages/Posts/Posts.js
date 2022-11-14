import React from 'react'
import classes from "./Posts.module.scss"
import {useNavigate} from 'react-router-dom';

const Posts = () => {
  const navigate = useNavigate();
const navigatetoPostItem = () => {
    navigate('/postitem');
  };
  return (
    <div className={classes.post_wrapper}>
        <div onClick={navigatetoPostItem} className={classes.post_item}>Poliz ekinlari</div>
        <div className={classes.post_item}>Donli mahsulotlar</div>
        <div className={classes.post_item}>Mevalar</div>
        <div className={classes.post_item}>Chorva xo'jaligi</div>
        <div className={classes.post_item}>Parrandachilik xo'jaligi</div>
        <div className={classes.post_item}>Bog'dorchilik</div>

    </div>
  )
}

export default Posts