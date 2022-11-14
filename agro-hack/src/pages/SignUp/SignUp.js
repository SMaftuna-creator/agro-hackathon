import React from 'react'
import classes from "./SignUp.module.scss"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useNavigate} from 'react-router-dom';
const SignUp = () => {
  const [region, setRegion] = React.useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setRegion(e.target.value);
  };
  const navigatetoHome = () => {
    navigate('/');
  };
  return (
    <div className={classes.container}>
      <div className={classes.signUp_wrap}>
      </div>
      <form >
      <p className={classes.signUp_title}>Ro'yxatdan o'tish</p>
        <div className={classes.input_wrap}>
          <input type="text" placeholder='Ism' />
          <input type="text" placeholder='Surname' />

          <input type="text" placeholder='Parol' />

          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Hudud</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={region}
              label="Hudud"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Tashkent</MenuItem>
              <MenuItem value={20}>Fargona</MenuItem>
              <MenuItem value={30}>Andijan</MenuItem>
              <MenuItem value={10}>Namangan</MenuItem>
              <MenuItem value={20}>Xorazm</MenuItem>
              <MenuItem value={30}>Sirdaryo</MenuItem>
              <MenuItem value={10}>Jizzax</MenuItem>
              <MenuItem value={20}>Samarqand</MenuItem>
              <MenuItem value={30}>Qashqadaryo</MenuItem>
              <MenuItem value={10}>Surxondaryo</MenuItem>
              <MenuItem value={20}>Buxoro</MenuItem>
              <MenuItem value={30}>Navoiy</MenuItem>
            </Select>
          </FormControl>
          <div className={classes.check_wrap}>
            <div>
            <input type="checkbox" className={classes.check}/>
            <label>Sotuvchi</label>
            </div>
            <div>
            <input type="checkbox" className={classes.check}/>
            <label>Xaridor</label>
            </div>
          </div>
          <button onClick={navigatetoHome} className={classes.submit}>Davom etish</button>
          <p className={classes.account}>Akkountingiz bormi? <span className={classes.signIn}> Akkountga o'tish</span></p>
        </div>

      </form>
    </div>
  )
}

export default SignUp