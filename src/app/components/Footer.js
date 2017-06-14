import React, { Component } from 'react';

export const Footer = (props) => {
    return(
      <div>
        <div className="footer section large-padding bg-dark">
          <div className="footer-inner section-inner">

            {/* footer-1 */}
            <div className="column column-1 left">
              <div className="widgets">
                <div className="widget widget_text">
                  <div className="widget-content">
                    <h3 className="widget-title">
                      Знайдіть нас
                    </h3>
                    <div className="textwidget">
                      <p>
                        <strong>Адреса</strong> <br/>
                        Площа Героїв Євромайдану , 3 <br/>
                        Тернопіль
                      </p>
                      <p>
                        <strong>Години</strong> <br/>
                        Понеділок&mdash;Неділя: 00:00&ndash;24:00 <br/>
                      </p>
                    </div>
                  </div>
                <div className="clear"></div>
              </div>
            </div>
          </div>
          {/* /footer-1 */}



          {/* footer-2 */}
          <div className="column column-2 left">
            <div className="widgets">
              <div className="widget widget_text">
                <div className="widget-content">
                  <h3 className="widget-title">Про цей сайт</h3>
                  <div className="textwidget">
                    Тут може бути відмінне місце для того, щоб представити себе, свій сайт або висловити якісь подяки.
                  </div>
                </div>
                <div className="clear"></div>
              </div>
            </div> {/* /widgets */}
          </div>
         {/* /footer-2 */}



         {/* footer-3 */}
          <div className="column column-3 left">
            <div className="widgets">
              <div className="widget widget_search">
                <div className="widget-content">
                  <h3 className="widget-title">Пошук</h3>
                  <form method="get" className="searchform" action="">
                    <input type="search" value="" placeholder="Search form" name="s" id="s" />
                    <input type="submit" id="searchsubmit" value="Search"/>
                  </form>
                </div>
                <div className="clear"></div>
              </div>
            </div> {/* /widgets */}
          </div>
         {/* /footer-3 */}



             <div className="clear"></div>
          </div> {/* /footer-inner */}
        </div> {/* /footer */}

      {/* credits */}
      <div className="credits section bg-dark no-padding">
          <div className="credits-inner section-inner">
            <div id='credits' className="flex flex_between">
              <div>
                <p className="credits-left">
                  &copy; 2017 Fresh
                </p>
              </div>
              <div>
                <p className="credits-right">
                  <span>Developed by Denys Maletskyy  <span className='tothetop'>Up &uarr;</span></span>
                </p>
              </div>
            </div>
          </div> {/* /credits-inner */}
        </div>
      {/* /credits */}



      </div>
    );
};
