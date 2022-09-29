import React from 'react'

const Navbar: React.FC = () => {
  return (
    <header className="header">
        <div className="container">
            <div className="heder__logo">It-incubator</div>
            <div className="header__menu">
                <button className="header_btn">Sign in</button>
            </div>
        </div>
    </header>
  )
}


export default Navbar;