import React, { useState } from "react";
import TitleSection from "../TitleSection/TitleSection";
import WebsiteTab from "./components/WebsiteTab/WebsiteTab";
import AllTab from "./components/AllTab/AllTab";
import DribbleTab from "./components/DribbleTab/DribbleTab";
import LogoTab from "./components/LogoTab/LogoTab";
import PortfolioIcon from "../../../../assets/images/safe.png";
import "./Portfolio.scss";

const Portfolio = () => {
  const [btn, setBtn] = useState(false); // set plus button in all slide
  const [filter, setFilter] = useState("ALL");
  const [clickImg, setClickImg] = useState(false); //set click image to open popup image
  const [image, setImage] = useState(null); //get image or video to pass in to Popup image

  //Handling click Slide Button
  const handleClick = e => {
    setBtn(false);
    setFilter(e.target.innerText);
  };

  //Handling Click Image to visible Popup images
  const handlePopup = () => {
    setClickImg(false);
    document.body.style.overflow = "unset";
  };

  //Handling click Plus Button at all slides
  const handleVisible = () => {
    setBtn(!btn);
  };

  return (
    <section id='portfolio' className='portfolio'>
      <div className='container'>
        <TitleSection title='portfolio' urlIcon={PortfolioIcon} />
        <div className='lightBox animated'>
          <div className='lightBox__btn'>
            <button
              onClick={handleClick}
              className={filter === "ALL" ? "btn active" : "btn"}
            >
              ALL
            </button>
            <button
              onClick={handleClick}
              className={filter === "LOGO" ? "btn active" : "btn"}
            >
              LOGO
            </button>
            <button
              onClick={handleClick}
              className={filter === "DRIBBLE" ? "btn active" : "btn"}
            >
              DRIBBLE
            </button>
            <button
              onClick={handleClick}
              className={filter === "WEBSITES" ? "btn active" : "btn"}
            >
              WEBSITES
            </button>
          </div>
          <div className='portfolio__wrap'>
            <div className='lightBox'>
              {filter === "ALL" && btn === false ? (
                <LogoTab setImage={setImage} setClickImg={setClickImg} />
              ) : (
                ""
              )}
              {filter === "LOGO" && btn === false ? (
                <LogoTab setImage={setImage} setClickImg={setClickImg} />
              ) : (
                ""
              )}
              {filter === "DRIBBLE" && btn === false ? (
                <DribbleTab setImage={setImage} setClickImg={setClickImg} />
              ) : (
                ""
              )}
              {filter === "WEBSITES" && btn === false ? (
                <WebsiteTab setImage={setImage} setClickImg={setClickImg} />
              ) : (
                ""
              )}
              {btn ? (
                <AllTab setImage={setImage} setClickImg={setClickImg} />
              ) : (
                ""
              )}
            </div>
          </div>

          {/* Plus Button at All Slide */}
          <button
            onClick={handleVisible}
            className={filter !== "ALL" ? "hidden" : "lightBox__visible"}
          >
            <i className={btn ? "fa-solid fa-angles-up" : "fa fa-plus"}></i>
          </button>
        </div>

        {/* Popup image of Portfolio */}
        <div
          onClick={handlePopup}
          className={clickImg ? "portfolio__popup active" : "portfolio__popup"}
        >
          <div className='content'>
            <figure>
              <img src={image} alt='Popup image' />
              <i className='fa fa-close'></i>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
