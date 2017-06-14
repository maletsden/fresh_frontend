import React, { Component } from 'react';

export const Navigation = (props) => {
    return(
      <div>

        <nav id='mobile-menu' className="navbar navbar-inverse" data-spy="affix" data-offset-top="360">
          <div className="toggle-container flex flex_between">
             <div className="nav-toggle toggle">
               <div className="bar"></div>
               <div className="bar"></div>
               <div className="bar"></div>
             </div>
             <div className="search-toggle toggle">
               <div className="metal"></div>
               <div className="glass"></div>
               <div className="handle"></div>
             </div>
           </div>
         </nav>
             <ul id='blog-menu' className="nav navbar-nav mobile-menu">
             <li><a href="main">Головна сторінка</a></li>
             <li><a href="wedding_flowers">Весільна Флористика</a></li>
             <li><a href="bouquets">Букети</a></li>
             <li><a href="flower_composition">Квіткові композиції</a></li>
             <li><a href="contacts">Контакти</a></li>
            </ul>
        <nav id='blog-menu' className="navbar navbar-inverse flex flex_center">
         <ul className="nav navbar-nav blog-menu flex flex_center">
           <li><a href="main">Головна сторінка</a></li>
           <li><a href="wedding_flowers">Весільна Флористика</a></li>
           <li><a href="bouquets">Букети</a></li>
           <li><a href="flower_composition">Квіткові композиції</a></li>
           <li><a href="contacts">Контакти</a></li>
          </ul>
        </nav>


      </div>
    );
};
