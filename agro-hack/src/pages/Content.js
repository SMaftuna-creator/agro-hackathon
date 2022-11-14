import React from "react";
import "../Styles/content.css";
import source from "../assets/icons/source.png";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const Content = () => {
  const navigate = useNavigate();

  const navigatetoPosts = () => {
    navigate("/posts");
  };

    const navigatetoSales = () => {
    navigate("/newproduct");
  };
  return (
    <div>
      <Navbar/>
    <div className="contents">
      <div onClick={navigatetoPosts} className="components">
        <div className="img">
          <img src={source} alt=""></img>
        </div>
        <p className="components-name">Maqolalar</p>
      </div>
      <div className="components">
        <div className="img">
          <img src={source} alt=""></img>
        </div>
        <p className="components-name">Statistika</p>
      </div>
      <div onClick={navigatetoSales}  className="components">
        <div className="img">
          <img src={source} alt=""></img>
        </div>
        <p className="components-name">Sotuv</p>
      </div>
    </div>
      <Footer/>
    </div>
  );
};

export default Content;
