import React from 'react';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import Logo from "../../assets/images/icon - facemash.jpg"
import { Link } from 'react-router-dom';


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
                <Link to="/">
                    <img src={Logo} alt="Logo" className='navLogo'/>
                </Link>
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