import React from 'react'
import classes from "./NewProduct.module.scss"
const NewProduct = () => {
  return (
    <div className={classes.newProduct_wrap}>
        <p>Sizda hech qanday mahsulot topilmadi :(</p>
        <button>Mahsulot qo’shing + </button>
    </div>
  )
}

export default NewProduct