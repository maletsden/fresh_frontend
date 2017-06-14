import React, { Component } from 'react';

export const Header = (props) => {
    return(
      <div>
        <div className="header-cover section no-padding">
          <div className="header section">
            <div className="header-inner">
              <div className="blog-info">
                <h2 className="blog-title flex flex_center">
                  <a href="main" title="Fresh &mdash; fresh flowers" rel="home">Fresh</a>
                </h2>
                <h3 className="blog-description">
                  <div>
                    fresh flowers
                  </div>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
