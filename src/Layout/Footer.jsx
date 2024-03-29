import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
  <div className="footer__addr">
    <h1 className="footer__logo">Something</h1>
    <h2>Contact</h2>
    <address>
      Address: <br />
      <a className="footer__btn" href="mailto:example@gmail.com">Email Us</a>
    </address>
  </div>
  <ul className="footer__nav">
    <li className="nav__item">
      <h2 className="nav__title">Media</h2>
      <ul className="nav__ul">
        <li>
          <a href="#">Online</a>
        </li>
        <li>
          <a href="#">Print</a>
        </li>
        <li>
          <a href="#">Alternative Ads</a>
        </li>
      </ul>
    </li>
    <li class="nav__item nav__item--extra">
      <h2 class="nav__title">Technology</h2>
      
      <ul class="nav__ul nav__ul--extra">
        <li>
          <a href="#">Hardware Design</a>
        </li>
        
        <li>
          <a href="#">Software Design</a>
        </li>
        
        <li>
          <a href="#">Digital Signage</a>
        </li>
        
        <li>
          <a href="#">Automation</a>
        </li>
        
        <li>
          <a href="#">Artificial Intelligence</a>
        </li>
        
        <li>
          <a href="#">IoT</a>
        </li>
      </ul>
    </li>
    <li className="nav__item">
      <h2 className="nav__title">Legal</h2>
      <ul className="nav__ul">
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Terms of Use</a>
        </li>
        <li>
          <a href="#">Sitemap</a>
        </li>
      </ul>
    </li>
  </ul>
  <div className="legal">
    <p>© 2024 MotoGlazer. All rights reserved.</p>
    <div className="legal__links">
      <span>Engineered with <span className="heart">♥</span>  for Motorbike Enthusiasts </span>
    </div>
  </div>
</footer>

  )
}

export default Footer;