import React from "react";
import Card from "./Card/Card";
import Menu from "./MenuBtn/Menu";
import "./Banner.scss";
import ButtonScrollTop from "../../../../components/ButtonScrollTop/Button";
import logo from "../../../../assets/images/profile.png";

const Banner = () => {
  const handleOpenMenu = () => {
    document.getElementById("theMenu").classList.toggle("menu__open");
    let ele = document.getElementById("menuToggle").getElementsByTagName("i");
    ele[0].classList.toggle("top__transform");
    ele[1].classList.toggle("middle__transform");
    ele[2].classList.toggle("bottom__transform");
  };

  return (
    <section className='header'>
      <nav id='theMenu' className='menu'>
        <div id='menu-options' className='menu__wrap'>
          <div className='logo__flat'>
            <img alt='personal-logo' className='img__responsive' src={logo} />
          </div>
          <br />
          <a href='#home'>
            <i className='title__icon fa fa-user'></i>Home
          </a>
          <a href='#about'>
            <i className='title__icon fa fa-dashboard'></i>About
          </a>
          <a href='#education'>
            <i className='title__icon fa fa-graduation-cap'></i>Education
          </a>
          <a href='#skills'>
            <i className='title__icon fa fa-sliders'></i>Skills
          </a>
          <a href='#experience'>
            <i className='title__icon fa fa-suitcase'></i>Experience
          </a>
          <a href='#portfolios'>
            <i className='title__icon fa fa-archive'></i>Portfolios
          </a>
          <a href='#interest'>
            <i className='title__icon fa fa-heart'></i>Interest
          </a>
          <a href='#testimonials'>
            <i className='title__icon fa fa-users'></i>Testimonials
          </a>
          <a href='#pricing-table'>
            <i className='title__icon fa-regular fa-money-bill-1'></i>Pricing
          </a>
          <a href='#blog'>
            <i className='title__icon fa fa-pencil-square'></i>Blog
          </a>
          <a href='#contact'>
            <i className='title__icon fa fa-envelope'></i>Contact
          </a>
        </div>

        <div id='menuToggle' onClick={handleOpenMenu} className=''>
          <div className='toggle-normal'>
            <i className='material-icons top-bar top__transform'>remove</i>
            <i className='material-icons middle-bar middle__transform'>
              remove
            </i>
            <i className='material-icons bottom-bar bottom__transform'>
              remove
            </i>
          </div>
        </div>
      </nav>
      <div className='header__background'></div>
      {/* <Menu /> */}
      <Card />
      <ButtonScrollTop />
    </section>
  );
};

export default Banner;
