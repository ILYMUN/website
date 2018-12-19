import React, { Component } from 'react';
import './App.css';
import './Navbar.css';

export class Navbar extends Component {
  // <div id="loader-wrapper">
  //     <div id="loader"></div>
  // </div>

  render() {
    return (
      <div>
  <div class="container upper-navbar">
      <div class="row">
          <div class="col-md-3">
              <p>
                  <i class="fa fa-envelope"></i> <a href="mailto:support@ilymun.org">support@ilymun.org</a>
              </p>
          </div>
          <div class="col-md-2">
              <p>
                  <i class="fa fa-phone"></i> <a href="tel:+33478696006">+33 4 78 69 60 06</a>
              </p>
          </div>
          <div class="col-md-3">
              <p>
                  <a class="fa fa-facebook link" href="https://www.facebook.com/internationallyonmun"></a>
                  <a class="fa fa-instagram link" href="https://www.instagram.com/_ilymun/"></a>
                  <a class="fa fa-youtube-play link" href="https://www.youtube.com/channel/UCFmcIYRifCNmHt9sjoWUDsA"></a>
              </p>
          </div>
          <div class="col-md-4">
              <p>
                  <i class="fa fa-calendar"></i> Next Event in: <span id="top-time"></span>
              </p>
          </div>
      </div>
  </div>

  <nav class="navbar navbar-static-top">


      <div class="container">
          <div class="navbar-header">
              <span class="tablet-navbar">{/*<!-- Something that appears only on tablets: next event? -->*/}</span>
              <button class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
        <i class="fa fa-bars"></i>
      </button>
              {/* <!-- TODO: Make Logo Pop-out on hover to let people know it is clickable --> */}
              <a class="navbar-brand" href="/"><img src="./wp-content/themes/ilymun-wp-theme/images/logo.png" alt="" /></a>
          </div>

          <div id="navbar" class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                  {/* <!-- <li class="active"><a href="#">Home</a></li> --> */}
                  <li class="dropdown">
                      <a href="/about" class="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">About <span class="caret"></span></a>
                      <ul class="dropdown-menu">
                          <li><a href="/about/">The Conference</a></li>
                          <li><a href="/committees/">Committees & Issues Debated</a></li>
                          <li><a href="/action-assembly/">Action Assembly</a></li>
                          <li><a href="/international-court-of-justice/">International Court of Justice</a></li>
                          {/* <!--<li><a href="/program">Programme</a></li>--> */}
                          <li><a class="scroll" href="/#team">Team</a></li>
                      </ul>
                  </li>
                  <li class="dropdown">
                      <a class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Get Ready <span class="caret"></span></a>
                      <ul class="dropdown-menu">
                          {/* <!--<li><a href="/country-fact-sheets">Country Fact Sheets</a></li>--> */}
                          <li><a href="/debate-help/">How to Act & Debate</a></li>
                          <li><a href="/dress/">How to Dress</a></li>
                          {/* <!--<li><a href="/social-events">Social Events</a></li>--> */}
                      </ul>
                  </li>
                  <li class="dropdown">
                      <a class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Press<span class="caret"></span></a>
                      <ul class="dropdown-menu">
                          <li><a href="/articles/">Articles</a></li>
                          <li><a href="/media/">Gallery</a></li>
                          <li><a href="/video/">Videos</a></li>
                          <li><a href="/school-photos/">School Photos</a></li>
                      </ul>
                  </li>
                  <li class="dropdown">
                      <a class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Partners<span class="caret"></span></a>
                      <ul class="dropdown-menu">
                          <li><a href="/partners/">Partners</a></li>
                          <li><a href="/other-muns/">Other MUNs</a></li>
                      </ul>
                  </li>
              </ul>
              <ul class="nav navbar-nav navbar-right">
                  <li><a class="scroll" href="/#contact-us">Contact Us</a></li>
                  <li><a href="/fund/">Help Fund</a></li>
              </ul>
          </div>
      </div>
    </nav>
  </div>);

    let front_page = true;

    // <div id="loader-wrapper"><div id="loader"></div></div>

    const upperNavBar =
      <div class="container upper-navbar">
        <div class="row">
          <div class="col-md-3"><p>
            <i class="fa fa-envelope"></i> <a href="mailto:support@ilymun.org">support@ilymun.org</a>
          </p></div>
          <div class="col-md-2"><p>
            <i class="fa fa-phone"></i> <a href="tel:+33478696006">+33 4 78 69 60 06</a>
          </p></div>
          <div class="col-md-3"><p>
            <a class="fa fa-facebook link" href="https://www.facebook.com/internationallyonmun"></a>
            <a class="fa fa-instagram link" href="https://www.instagram.com/_ilymun/"></a>
            <a class="fa fa-youtube-play link" href="https://www.youtube.com/channel/UCFmcIYRifCNmHt9sjoWUDsA"></a>
          </p></div>
          <div class="col-md-4"><p>
            <i class="fa fa-calendar"></i> Next Event in: <span id="top-time"></span>
          </p></div>
        </div>
      </div>;
    
    const header =
      <header>
        {front_page ? upperNavBar : ""}

        <nav class={"navbar " + front_page ? "navbar-static-top" : "navbar-fixed-top navbar-sm"}>
          <div class="container">
            <div class="navbar-header">
              <span class="tablet-navbar">{/*<!-- Something that appears only on tablets: next event? -->*/}</span>
              <button class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
                <i class="fa fa-bars"></i>
              </button>
              {/* <!-- TODO: Make Logo Pop-out on hover to let people know it is clickable --> */}
              <a class="navbar-brand" href="/"><img src={require('./images/logo.png')} alt="" /></a>
            </div>

            <div id="navbar" class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                {/* <!-- <li class="active"><a href="#">Home</a></li> --> */}
                <li class="dropdown">
                  <a href="/about" class="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">About <span class="caret"></span></a>
                  <ul class="dropdown-menu">
                        <li><a href="/about/">The Conference</a></li>
                        <li><a href="/committees/">Committees & Issues Debated</a></li>
                        <li><a href="/action-assembly/">Action Assembly</a></li>
                        <li><a href="/international-court-of-justice/">International Court of Justice</a></li>
                        {/* <!--<li><a href="/program">Programme</a></li>--> */}
                        <li><a class="scroll" href="/#team">Team</a></li>
                  </ul>
                </li>
                <li class="dropdown">
                  <a class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Get Ready <span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    {/* <!--<li><a href="/country-fact-sheets">Country Fact Sheets</a></li>--> */}
                    <li><a href="/debate-help/">How to Act & Debate</a></li>
                    <li><a href="/dress/">How to Dress</a></li>
                              {/* <!--<li><a href="/social-events">Social Events</a></li>--> */}
                  </ul>
                </li>
                <li class="dropdown">
                  <a class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Press<span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><a href="/articles/">Articles</a></li>
                    <li><a href="/media/">Gallery</a></li>
                      <li><a href="/video/">Videos</a></li>
                      <li><a href="/school-photos/">School Photos</a></li>
                  </ul>
                </li>
                  <li class="dropdown">
                  <a class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Partners<span class="caret"></span></a>
                  <ul class="dropdown-menu">
                      <li><a href="/partners/">Partners</a></li>
                      <li><a href="/other-muns/">Other MUNs</a></li>
                  </ul>
                </li>
              </ul>
              <ul class="nav navbar-nav navbar-right">
                <li><a class="scroll" href="/#contact-us">Contact Us</a></li>
                  <li><a href="/fund/">Help Fund</a></li>
              </ul>
            </div>
            {/* <!--/.nav-collapse --> */}
          </div>
        </nav>
      </header>;

    return header;
  }
}