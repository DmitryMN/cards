import React from 'react'

const Register: React.FC = () => {
  return (
    <div className="register">
    <div className="wrapper">
      <form className="form">
        <h4 className="form__title">It-incubator</h4>
        <p className="form__text">Sign up</p>
        <label className="form__label">Email:</label>
        <input className="form__input form__input-email" type="text" />
        <label className="form__label">Password:</label>
        <input className="form__input form__input-password" type="text" />
        <label className="form__label">Confirm password:</label>
        <input className="form__input form__input-password" type="text" />
        <button className="form__submit form__submit-cansel" type="submit">Cansel</button>
        <button className="form__submit" type="submit">Register</button>
      </form>
    </div>
  </div>
  )
}

export default Register;
