import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupForm({setShowModal}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [birthMonth, setBirthMonth] = useState("01");
    const [birthDay, setBirthDay] = useState("01");
    const [birthYear, setBirthYear] = useState("2023");
    const [gender, setGender] = useState("");

    if (sessionUser) return <Redirect to="/" />;

    let years = [];

    for (let i = 2023; i >= 1905; i--) {
        years.push(i);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password) {
            setErrors([]);
            const birthDayString = birthDay.toString().padStart(2,0);
            const birthYearString = birthYear.toString();
            const birthMonthString = birthMonth;
            const profileImage = "https://facebook85-seeds.s3.amazonaws.com/blank-head-profile-pic-for-a-man.jpg"
            const coverPhoto = "https://facebook85-seeds.s3.amazonaws.com/pexels-leah-kelley-3935703.jpg"


            const fullBirthday = `${birthYearString}-${birthMonthString}-${birthDayString}`

            return dispatch(sessionActions.signup({ email, password, firstName, lastName, fullBirthday, gender, profileImage, coverPhoto }))
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
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    return (
        <div className="modalBackground">
            <div className="signupContainer">
                <div className="header">
                    <div className="leftHeader">
                        <div className="title">
                            <h1>Sign Up</h1>
                        </div>
                        <div className="subTitle">
                            <p>It's quick and easy.</p>
                        </div>
                    </div>
                    <div className="rightHeader">
                        <div className="closeX">
                            <button onClick={() => setShowModal(false)} className="closeXButton"><span>X</span></button>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="signupFormDetails">
                    <ul className="errors">
                        {errors.map(error => <li key={error}>{error}</li>)}
                    </ul>
                    <div className="namesInput">
                        <input
                            type="text"
                            placeholder="First name"
                            className="firstNameInput"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Last name"
                            className="lastNameInput"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Email"
                            className="emailInput"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="New password"
                            className="passwordInput"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="birthdayLabel">
                            Birthday
                            <div className="birthdayInput">
                                <select value={birthMonth} onChange={(e) => setBirthMonth(e.target.value)} className="birthMonthInput">
                                    <option value="01">Jan</option>
                                    <option value="02">Feb</option>
                                    <option value="03">Mar</option>
                                    <option value="04">Apr</option>
                                    <option value="05">May</option>
                                    <option value="06">Jun</option>
                                    <option value="07">Jul</option>
                                    <option value="08">Aug</option>
                                    <option value="09">Sep</option>
                                    <option value="10">Oct</option>
                                    <option value="11">Nov</option>
                                    <option value="12">Dec</option>
                                </select>
                                <select value={birthDay} onChange={(e) => setBirthDay(e.target.value)} className="birthDayInput">
                                    {
                                        [...Array(31)].map((_, i) => i + 1)
                                            .map(i => <option key={i} value={i}>{i}</option>)
                                    }
                                </select>
                                <select value={birthYear} onChange={(e) => setBirthYear(e.target.value)} className="birthYearInput">
                                    {
                                        years.map(i => <option key={i} value={i}>{i}</option>)
                                    }
                                </select>
                            </div>
                        </label>
                    </div>
                    <div className="genderInputContainer">
                        <label className="genderLabel">
                            Gender
                            <div className="genderInput">
                                <div className="femaleInputContainer">
                                    <label className="femaleLabel">Female
                                        <input type="radio" value="F" name="gender" onChange={(e) => setGender(e.target.value)} className="femaleInput"/>
                                    </label>
                                </div>
                                <div className="maleInputContainer">
                                    <label className="maleLabel">Male
                                        <input type="radio" value="M" name="gender" onChange={(e) => setGender(e.target.value)} className="maleInput"/>
                                    </label>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className="disclaimer1">
                        <p>People who use our service may have uploaded your contact information to Facebook.</p>
                    </div>
                    <div className="disclaimer2">
                        <p>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.</p>
                    </div>
                    <div className="signUpButtonContainer">
                        <button type="submit" className="signUpButton">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignupForm;
