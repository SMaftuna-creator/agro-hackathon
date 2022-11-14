import React from "react";
import classes from "./PostItem.module.scss";
import xbtn from "../../assets/icons/x.png";
import search from "../../assets/icons/search.png";
import account from "../../assets/icons/account.png";
import star from "../../assets/icons/star.png";
import up from "../../assets/icons/up.png";
import down from "../../assets/icons/down.png";
import {useNavigate} from 'react-router-dom';


const PostItem = () => {
   const navigate = useNavigate();
const navigatetoCreatePost = () => {
    navigate('/newpost');
  };
  return (
    <div className={classes.post_item_wrap}>
        <div className={classes.search_add}>
      <div className={classes.search_wrap}>
        {/* <img src={xbtn} alt="" className={classes.xbtn}/> */}
        <input type="search" />
        <img src={search} alt="" className={classes.search}/>
      </div>
      <button onClick={navigatetoCreatePost}><img src={xbtn} alt="" /></button>
      </div>
      <div className={classes.item_container}>
        <div className={classes.item}>
          <p className={classes.item_title}>Poliz ekinlari</p>
          <p>
            Poliz ekinlari - oziq-ovqat, yem-xashak va texnika maqsadlarida
            ekiladigan, palak otib oʻsadigan madaniy ekinlar guruhi. Ayrim
            olimlar Poliz ekinlariga faqat tarvuz, kovun va qovoqnn kiritadilar;
            chirmashib yoki yerda yotib usadi. Osiyo, Afrika va Amerikaning
            tropik va subtropik mamlakatlaridan tarqalgan. Hozirgi davrda barcha
            qitʼalarda ekiladi.
          </p>
          <div className={classes.rate}>
            <div className={classes.account}>
              <img src={account} alt="" />
              <div className={classes.star}>
                <p>Sardor Erkinov</p>
                <img src={star} alt="" />
              </div>
            </div>
            <div className={classes.comment}>
              <span className={classes.comment_item}>Mulohazalar soni 47</span>
               <span className={classes.up_wrap}><img src={up} alt="" />45</span> 
               <span className={classes.down_wrap}><img src={down} alt="" />3</span> 

            </div>
          </div>
        </div>
        <div className={classes.item}></div>
      </div>
      <div className={classes.item_container}>
        <div className={classes.item}>
          <p className={classes.item_title}>Poliz ekinlari</p>
          <p>
           Don, doncha (caryopsis) — gʻalla ekinlari mevasi yoki dukkakli don oʻsimliklar urugʻi; dehqonchilikda yetishtiriladigan asosiy mahsulotlarning biri.
          </p>
          <div className={classes.rate}>
            <div className={classes.account}>
              <img src={account} alt="" />
              <div className={classes.star}>
                <p>Bekzod Hakimov</p>
                <img src={star} alt="" />
              </div>
            </div>
            <div className={classes.comment}>
              <span className={classes.comment_item}>Mulohazalar soni 47</span>
               <span className={classes.up_wrap}><img src={up} alt="" />45</span> 
               <span className={classes.down_wrap}><img src={down} alt="" />3</span> 

            </div>
          </div>
        </div>
        <div className={classes.item}></div>
      </div>
    </div>
  );
};

export default PostItem;
