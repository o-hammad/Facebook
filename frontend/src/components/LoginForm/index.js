import './LoginForm.css';
import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SignupForm from '../SignupForm/index';
import LinkedIn from "../../assets/images/linkedinicon.png";
import gitHub from "../../assets/images/github-logo.png";
import Facemash from "../../assets/images/logo - facemash.png"

function LoginForm() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [showModal, setShowModal] = useState(false);

    if (sessionUser) return <Redirect to="/newsfeed" />;

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

    const handleDemoLogin = (e) => {
        e.preventDefault();

        return dispatch(sessionActions.login({credential: "demo@user.io", password: "password"}))
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
        <div className='background1'>
            <div className='upperBackground3'>
                <div className='leftInnerBox'>
                    <img className="fbLogo" src={Facemash} alt="Facebook"></img>
                    <h2>Connect with friends and the world around you on Facemash.</h2>
                </div>
                <div className='rightInnerBox'>
                    <div className='loginBox'>
                        <form onSubmit={handleSubmit}>
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
                            <ul className='errors'>
                                {errors.map(error => <li key={error}>{error}</li>)}
                            </ul>
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
                        <div className='demoLoginContainer'>
                            <button type="submit" className='demoLoginButton' onClick={handleDemoLogin}>Demo Login</button>
                        </div>
                        <div className='createAccountContainer'>
                            <button onClick={() => setShowModal(true)} className='createAccountButton'>Create new account</button>
                            {showModal && <SignupForm setShowModal={setShowModal} />}
                        </div>
                    </div>
                </div>
            </div>
            <div className='lowerBackGround'>
                <a href="https://www.linkedin.com/in/omar-hammad-93810413b/" target="_blank"><img src={LinkedIn} className='linkedInIcon'></img></a>
                <a href="https://github.com/o-hammad/Facebook.git" target="_blank"><img src={gitHub} className='gitHubIcon'></img></a>
            </div>
        </div>
    );
}

export default LoginForm;

{/* 
 */}