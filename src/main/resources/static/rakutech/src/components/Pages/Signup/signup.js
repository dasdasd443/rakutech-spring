import SignupCSS from './signup.css';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import Images from '../../exportFiles/exportImages';
import { useCallback } from 'react';
let images = new Images();

const Signup = () => {
    const ShowPassword = useCallback(() => {
        let password = document.querySelector("#password");
        let icon = document.querySelector("i");
        if(password.type === "password"){
            password.type = "text";
            icon.className = "fas fa-eye-slash show-password";
        }else if(password.type === "text"){
            password.type = "password";
            icon.className = "fas fa-eye show-password";
        }
    })

    const SignupUser = useCallback((e) => {
        e.preventDefault();
        document.querySelectorAll(".error").forEach((elem,index) => {
            elem.innerText = " ";
        });
        let fullName = document.querySelector("#fullname").value;
        let email = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;

        let error = 0;

        
        
        let fNameCheck = fullName.split(" ");

        console.log(fNameCheck);

        if(fullName.length === 0){
            document.querySelector("#fullname-error").innerText = "Please input a value";
            error = 1;
        }else if(fNameCheck.length < 2){
            document.querySelector("#fullname-error").innerText = "Please input your first name and second name";
            error = 1;
        }else{
            document.querySelector("#fullname-error").innerText = " ";
        }

        if(email.length === 0){
            document.querySelector("#email-error").innerText = "Please input an email";
            error = 1;
        }else{
            document.querySelector("#email-error").innerText = " ";
        }

        if(password.length < 8){
            document.querySelector("#password-error").innerText = "The password must be at least 8 characters!";
            error = 1;
        }else{
            document.querySelector("#password-error").innerText = " ";
        }

        if(error === 0){
            let users = localStorage.getItem("users");
            users = JSON.parse(users);

            let user = {
                fullName:fullName,
                email:email,
                password:password
            }

            if(users != null){
                let found = 0;
                users.forEach((user,index) => {
                    if(user.email === email){
                        document.querySelector("#email-error").innerText = "Email already exists!";
                        found = 1;
                        error = 1;
                    }
                });
                if(found === 0){
                    let users = JSON.parse(localStorage.getItem("users"));
                    users.push(user);
                    localStorage.setItem("users",JSON.stringify(users));
                }
            }else{
                let users = [];
                users.push(user);
                localStorage.setItem("users",JSON.stringify(users));
            }

            if(error === 0){
                sessionStorage.setItem("user",JSON.stringify(user));
                window.location.href = "/";
            }
        }
    })

    const Background = {
        backgroundImage: `url(${images.Background()})`
    }
    return (
        <section style={SignupCSS}>
            <section className="login-container--background"></section>
            <section className="container-background" style={Background}>
            </section>
            <section className="login-container">
                <section className="login-container--text">
                    <section className="login-container--text__text-container">
                        <Link to="/">
                            <section className="login-container--text__text-container--title">
                                <h1>RAKU</h1>
                                <h1>TECH</h1>
                            </section>
                        </Link>
                        <h1>Browse from over 500 devices in your area</h1>
                    </section>
                </section>
                <section className="login-container__login">
                    <section className="login-container__login--card">
                        <section className='arrow-container'>
                            <i className="fas fa-arrow-left backarrow"></i>
                        </section>
                        <h1>Sign Up</h1>
                        <span className='existing-account--text'>Already have an account? <Link to="/login">Log in</Link></span>
                        <section className="login__form">
                            <form action="">
                                <div className="input-group">
                                    <label htmlFor="fullname">Full Name <span id="fullname-error" className='error'></span></label>
                                    <input type="text" id="fullname" required/>
                                    
                                </div>
                                <div className="input-group">
                                    <label htmlFor="email">Email <span id="email-error" className='error'></span></label>
                                    <input type="text" id="email" required className='error'/>
                                    
                                </div>
                                <div className="input-group">
                                    <label htmlFor="password">Password <span id="password-error" className='error'></span></label>
                                    <input type="password" id='password' placeholder="Must be at least 6 characters" required className='error'/>
                                    <FontAwesomeIcon icon={faEye} className= "show-password" onClick={ShowPassword}/>
                                        
                                </div>
                                <div className='input-group'>
                                    <input type="checkbox" id="email"/>
                                    <label htmlFor="email">Signup for email updates</label>
                                </div>
                                <input type="submit" value="SIGN UP" onClick={SignupUser}/>
                                
                            </form>
                            <span className='terms'>
                                By continuing, you agree to accept our Privacy Policy & Terms of Service.
                            </span>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    );
}

export default Signup;