import React, { useState } from 'react';

const Login: React.FC = () => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <div className="login">
      <div className="wrapper">
        <form className="form">
          <h4 className="form__title">It-incubator</h4>
          <p className="form__text">Sign in</p>
          <label className="form__label">Email:</label>
          <input className="form__input form__input-email" type="text" />
          <label className="form__label">Password:</label>
          <input className="form__input form__input-password" type="text" />
          <p className="form__forgot">
            <a>
              Forgot password
            </a>
          </p>
          <button className="form__submit form__submit-login" type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login;