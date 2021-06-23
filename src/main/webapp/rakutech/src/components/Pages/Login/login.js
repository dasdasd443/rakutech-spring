import LoginCSS from './login.css';
import Image from '../../exportFiles/exportImages';
import {Link} from 'react-router-dom';
let images = new Image();
const Login = () => {
    const LoginUser = (e) => {
        e.preventDefault();
        document.querySelectorAll(".error").forEach((elem,index) => {
            elem.innerText = " ";
        });
        let email = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;

        let error = 0;

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

            if(users !== null){
                let found = 0;
                users.forEach((user,index) => {
                    if(user.email == email && user.password == password){
                        sessionStorage.setItem("user",JSON.stringify(user));
                        window.location.href = "/";
                        found = 1;
                    }else if(user.email == email && user.password !=password){
                        document.querySelector("#password-error").innerText = "The password is incorrect";
                    }
                });
                if(found === 0){
                    document.querySelector("#email-error").innerText = "Email is not found!";
                }
            }
        }
    }

    const Background = {
        backgroundImage: `url(${images.Background()})`
    }
    return (
        <section style={LoginCSS}>
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
                            <h1>Sign In</h1>
                            <button><i><img src={images.AppleLogo()} alt=""/></i><span>Sign in with apple</span></button>
                            <button><i><img src={images.FacebookLogo()} alt=""/></i><span>Sign in with facebook</span></button>
                            
                            <section className="separator">
                                <hr/>
                                <span>OR</span>
                            </section>
                            <section className="login__form">
                                <form action="">
                                    <div className="input-group">
                                        <label htmlFor="email">Email <span id="email-error" className='error'></span></label>
                                        <input type="text" id="email"/>
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="password">Password <span id="password-error" className='error'></span></label>
                                        <input type="password" id='password'/>
                                    </div>
                                    <input type="submit" value="SIGN IN" onClick={LoginUser}/>
                                </form>
                                <span className='terms'>
                                    By continuing, you agree to accept our Privacy Policy & Terms of Service.
                                </span>
                                <span className='signup'>Don't have an account? <Link to="/signup">Create a new account</Link></span>
                            </section>
                        </section>
                    </section>
                </section>
        </section>
    );
}

export default Login;