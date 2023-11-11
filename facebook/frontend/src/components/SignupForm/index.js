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
    const [birthMonth, setBirthMonth] = useState("");
    const [birthDay, setBirthDay] = useState("");
    const [birthYear, setBirthYear] = useState("");
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

            const fullBirthday = `${birthYearString}-${birthMonthString}-${birthDayString}`

            return dispatch(sessionActions.signup({ email, password, firstName, lastName, fullBirthday, gender }))
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
                <button onClick={() => setShowModal(false)}> X </button>
                <form onSubmit={handleSubmit}>
                    <ul>
                        {errors.map(error => <li key={error}>{error}</li>)}
                    </ul>
                    <div>
                        <input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="New Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>
                            Birthday
                            <select value={birthMonth} onChange={(e) => setBirthMonth(e.target.value)}>
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
                            <select value={birthDay} onChange={(e) => setBirthDay(e.target.value)}>
                                {
                                    [...Array(31)].map((_, i) => i + 1)
                                        .map(i => <option key={i} value={i}>{i}</option>)
                                }
                            </select>
                            <select value={birthYear} onChange={(e) => setBirthYear(e.target.value)}>
                                {
                                    years.map(i => <option key={i} value={i}>{i}</option>)
                                }
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            Gender
                            <input type="radio" value="M" name="gender" onChange={(e) => setGender(e.target.value)}/> Male
                            <input type="radio" value="F" name="gender" onChange={(e) => setGender(e.target.value)} /> Female
                            <input type="radio" value="Other" name="gender" /> Other
                        </label>
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignupForm;
