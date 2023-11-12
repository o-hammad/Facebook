import './LoginForm.css';
import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SignupForm from '../SignupForm/index';

function LoginForm() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [showModal, setShowModal] = useState(false);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                let data;
                try {
                    // .clone() essentially allows you to read the response body twice
                    data = await res.clone().json();
                } catch {
                    data = await res.text(); // Will hit this case if the server is down
                }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
            });
    }

    return (
        <div className='background'>
            <div className='upperBackground'>
                <div className='leftInnerBox'>
                    <img className="fbLogo" src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="Facebook"></img>
                </div>
                <div className='rightInnerBox'>
                    <div className='loginBox'>
                        <form onSubmit={handleSubmit}>
                            <ul>
                                {errors.map(error => <li key={error}>{error}</li>)}
                            </ul>
                            <div className='emailBox'>
                                <input
                                    type="text"
                                    value={credential}
                                    placeholder='Email'
                                    className='emailField'
                                    onChange={(e) => setCredential(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='passwordBox'>
                                <input
                                    type="password"
                                    value={password}
                                    className='passwordField'
                                    placeholder='Password'
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='loginButtonContainer'>
                                <button type="submit" className='loginButton'>Log In</button>
                            </div>
                        </form>
                        <div className='createAccountContainer'>
                            <button onClick={() => setShowModal(true)} className='createAccountButton'>Create new account</button>
                            {showModal && <SignupForm setShowModal={setShowModal} />}
                        </div>
                    </div>
                </div>
            </div>
            <div className='lowerBackGround'>
            </div>
        </div>
    );
}

export default LoginForm;