import React from 'react';
import logo from '../../src/images/profile.png';


const Profile = () => {
    return (
        <div className="profile">
            <div className="wrapper">
                <form className="form">
                    <h4 className="form__title">Personal information</h4>
                    <div className="form__image-profile">
                        <img className='form__img' src={logo} alt="profile"/>
                    </div>
                    <p className="form__profile-name">Dmitrii</p>
                    <p className="form__profile-email">m18dm.dm@gmail.com</p>
                    <button className="form__submit form__submit-profile" type="submit">Log out</button>
                </form>
            </div>
        </div>
    )
}

export default Profile;