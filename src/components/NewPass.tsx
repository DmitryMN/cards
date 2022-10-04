import React from 'react'

const NewPass: React.FC = () => {
    return (
        <div className="newpass">
            <div className="wrapper">
                <form className="form">
                    <h4 className="form__title">It-incubator</h4>
                    <p className="form__text">Create new password</p>
                    <label className="form__label">Password</label>
                    <input className="form__input form__input-email" type="text" />
                    <p className="form__newpass">Create new password and we will send you further instructions to email</p>
                    <button className="form__submit form__submit-newpass" type="submit">Create new password</button>
                </form>
            </div>
        </div>
    )
}

export default NewPass;
