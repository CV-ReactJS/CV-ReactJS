import React, { useState } from 'react';
import Card from './Card/Card';
import { Link } from 'react-scroll';
import './Banner.scss';
import ButtonScrollTop from '../../../../components/ButtonScrollTop/Button';
import { attributes } from '../../../../../content/Home.md';

const Banner = () => {
  const { image } = attributes;
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleOpenMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <section id='banner' className='banner'>
      <nav id='theMenu' className={toggleMenu ? 'menu menu__open' : 'menu'}>
        <div className='menu__wrap'>
          <div className='logo__flat'>
            <img alt='personal logo' className='img__responsive' src={image} />
          </div>
          <br />
          <Link to='banner' spy={true} smooth={true} duration={500}>
            <i className='title__icon fa fa-user'></i>Home
          </Link>
          <Link to='description' spy={true} smooth={true} duration={500}>
            <i className='title__icon fa fa-dashboard'></i>About
          </Link>
          <Link to='education' spy={true} smooth={true} duration={500}>
            <i className='title__icon fa fa-graduation-cap'></i>Education
          </Link>
          <Link to='skill' spy={true} smooth={true} duration={500}>
            <i className='title__icon fa fa-sliders'></i>Skills
          </Link>
          <Link to='experience' spy={true} smooth={true} duration={500}>
            <i className='title__icon fa fa-suitcase'></i>Experience
          </Link>
          <Link to='portfolio' spy={true} smooth={true} duration={500}>
            <i className='title__icon fa fa-archive'></i>Portfolios
          </Link>
          <Link to='interest' spy={true} smooth={true} duration={500}>
            <i className='title__icon fa fa-heart'></i>Interest
          </Link>
          <Link to='testimonial' spy={true} smooth={true} duration={500}>
            <i className='title__icon fa fa-users'></i>Testimonials
          </Link>
          <Link to='pricing' spy={true} smooth={true} duration={500}>
            <i className='title__icon fa-regular fa-money-bill-1'></i>Pricing
          </Link>
          <Link to='blog' spy={true} smooth={true} duration={500}>
            <i className='title__icon fa fa-pencil-square'></i>Blog
          </Link>
          <Link to='contact' spy={true} smooth={true} duration={500}>
            <i className='title__icon fa fa-envelope'></i>Contact
          </Link>
        </div>

        <div id='menuToggle' onClick={handleOpenMenu} className=''>
          <div className='toggle__normal'>
            <i
              className={`material-icons top__bar ${
                toggleMenu ? 'top__transform' : ''
              }`}
            >
              remove
            </i>
            <i
              className={`material-icons middle__bar ${
                toggleMenu ? 'middle__transform' : ''
              }`}
            >
              remove
            </i>
            <i
              className={`material-icons bottom__bar ${
                toggleMenu ? 'bottom__transform' : ''
              }`}
            >
              remove
            </i>
          </div>
        </div>
      </nav>
      <div className='header__background'></div>
      <Card />
      <ButtonScrollTop />
    </section>
  );
};

export default Banner;
