import React from 'react'
import '../LandingPage/styles.css';

const Header = () => {
  return (
<header className="header">
  <div className="logo">
    {/* <img src="./png/logo-no-background.png" alt="logo image" width="100px" height="120px" > */}
    <h1>MotoGlazer</h1>
  </div>
  <div className="right-header">
    <button className="header-components1">
      Developers
    </button>
    <button className="header-components">
      FAQS
    </button>
    {/* <button>Add your own bike details</button> */}
    <span>
      <a href="login-page"><button className="login">
          <img src="./assets/enter.svg" alt="Login" style={{height: 25, marginTop: 2, marginRight: 3, verticalAlign: 'middle'}} />
          Login</button>
      </a>
      <a href="signup-page"><button className="signup">SignUp
          <img src="./assets/sign-up.svg" alt="signup" style={{height: 25, marginTop: 2, marginRight: 3, verticalAlign: 'middle'}} />
        </button>
      </a>
    </span>
  </div>
</header>


  )
}

export default Header;