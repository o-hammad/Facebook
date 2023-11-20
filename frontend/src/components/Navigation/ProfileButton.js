import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css'

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <>
            <button onClick={openMenu} className="profileLogoutIcon">
                <img src="https://facebook85-seeds.s3.amazonaws.com/blank-head-profile-pic-for-a-man.jpg" alt="Icon Placeholder" className="icon"/>
            </button>
            {showMenu && (
                <ul className="profile-dropdown">
                    <li>
                        <div className="miniProfile">
                            <li>{user.firstName} {user.lastName}</li>
                        </div>
                    </li>
                    <li>
                        <button onClick={logout}>Log Out</button>
                    </li>
                </ul>
            )}
        </>
    );
}

export default ProfileButton;