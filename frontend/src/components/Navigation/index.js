import React from 'react';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import Logo from "../../assets/images/facebook logo.jpg"


function Navigation() {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    }

    return (
        <div className='navContainer'>
            <div>
                <img src={Logo} alt="Logo" className='navLogo'/>
            </div>
            <div className='dropDownContainer'>
                <ul className='dropDown'>
                    <li>
                        {sessionLinks}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;