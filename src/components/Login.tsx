import React from 'react'

const Login: React.FC = () => {
  return (
    <div className="login">
      <div className="wrapper">
        <form className="form">
          <h4 className="form__title">It-incubator</h4>
          <p className="form__text">Sign in</p>
          <label className="form__label">Email:</label>
          <input className="form__input" type="text" />
          <label className="form__label">Password:</label>
          <input className="form__input" type="text" />
        </form>
      </div>
    </div>
  )
}

export default Login;