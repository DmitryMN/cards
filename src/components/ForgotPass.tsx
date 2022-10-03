import React from 'react'

const ForgotPass: React.FC = () => {
  return (
  <div className="forgot">
    <div className="wrapper">
      <form className="form">
        <h4 className="form__title">It-incubator</h4>
        <p className="form__text">Forgot your password?</p>
        <label className="form__label">Email:</label>
        <input className="form__input form__input-email" type="text" />
        <p className="form__forgot">Enter your email address and we will send you further instructions</p>
        <button className="form__submit form__submit-forgot" type="submit">Send instructions</button>
      </form>
    </div>
  </div>
  )
}

export default ForgotPass;