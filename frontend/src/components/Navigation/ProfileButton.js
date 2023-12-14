import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css';
import { Link } from "react-router-dom";

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const sessionUser = useSelector(state => state.session.user)
    const userId = sessionUser.id
    const currentUser = useSelector(state => state.users[userId])

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
                <img src={currentUser?.profileImage} alt="Icon Placeholder" className="icon"/>
            </button>
            {showMenu && (
                <div className="profileDropdownContainer">
                    <ul className="profile-dropdown">
                        <li>
                            <div className="miniProfile">
                                <img src={currentUser?.profileImage} className="profileButtonImage"></img><Link to={`/users/${user.id}`}>{user.firstName} {user.lastName}</Link>
                            </div>
                        </li>
                        <li>
                            <button onClick={logout}>Log Out</button>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}

export default ProfileButton;