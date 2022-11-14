import React from "react";
import classes from "./NewPost.module.scss";
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const NewPost = () => {
  const [region, setRegion] = React.useState("");

  const handleChange = (e) => {
    setRegion(e.target.value);
  };
  return (
    <div className={classes.new_post_wrap}>
      <p className={classes.newPost_title}>Maqola joylash</p>
      <form>
        <div>
          <label htmlFor="">Ismingiz</label>
          <input type="text" placeholder="Ism" />
        </div>
        <div>
          <label htmlFor="">Familiyangiz</label>
          <input type="text" placeholder="Familiya" />
        </div>
        <div>
          <label htmlFor="">Sarlavha</label>
          <input type="text" placeholder="Sarlavha" />
        </div>
        <div className={classes.txtarea_div}>
          <textarea
            name="textarea"
            id=""
            cols="30"
            rows="10"
            placeholder="Matn"
          />
        </div>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          {/* <InputLabel id="demo-select-small">Yo'nalish</InputLabel> */}
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={region}
            label="Yo'nalish"
            onChange={handleChange}
          >
            <MenuItem value="selected">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Poliz ekinlari</MenuItem>
            <MenuItem value={20}>Donli mahsulotlar</MenuItem>
            <MenuItem value={30}>Mevalar</MenuItem>
            <MenuItem value={10}>Go’sht mahsulotlari</MenuItem>
          </Select>
        </FormControl>
        <button className={classes.newPost_btn}>Chop etish</button>
      </form>
    </div>
  );
};

export default NewPost;
