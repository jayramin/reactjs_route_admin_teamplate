import React from "react";
import { useState } from "react";
import ValidationHook from "./../customHook/validationHook";
import { useCookies } from 'react-cookie'
import "./login.css";
import { useNavigate } from "react-router-dom";

const LoginCompo = () => {
  const [active, setActive] = useState(true)
  const [cookies, setCookie] = useCookies()
  const navigate = useNavigate();

  // const {inputs,checkValid,errors,setDataToState} = ValidationHook({username:''},{})
  const { inputs, checkValid, errors, setDataToState } = ValidationHook({}, {})
  let toggleForm = () => {
    console.log(active);
    setActive(!active)
  }
  let LoginData = (event) => {
    event.preventDefault();
    // console.log(inputs);
    // console.log("LoginData")
    fetch(`https://justjayapi.000webhostapp.com/login?username=${inputs.username}&password=${inputs.password}`).then((jsonres) => jsonres.json()).then((result) => {

      // console.log(result);
      if (result.Code == 1) {
        setCookie('login_status', true)
        setCookie('userid', result.Data[0].id)
        if (result.Data[0].role_id == 1) {
          navigate("/admin-dashboard");
        } else {
          navigate("/user-dashboard");
        }
      } else {
        alert("Invalid user")
      }
    })
  }
  let RegistrationData = (event) => {
    console.log("RegistrationData");
    event.preventDefault();
    console.log(inputs);
    console.log("LoginData")
    fetch(`https://justjayapi.000webhostapp.com/registrationgetmethod?username=${inputs.username}&password=${inputs.password}&email=${inputs.email}&mobile=${inputs.mobile}`).then((jsonres) => jsonres.json()).then((result) => {

      console.log(result);
      if (result.Code == 1) {
        alert("Register Success")
        setActive(!active)
        // navigate("/login");
        // setCookie('login_status', true)
        // setCookie('userid', result.Data[0].id)
        // if (result.Data[0].role_id == 1) {
        //   navigate("/admin-dashboard");
        // } else {
        // }
      } else {
        alert("Invalid user")
      }
    })
  }
  return (
    <>
      <section>
        <div className={(active) ? "container" : "container active"}>
          <div className="user signinBx">
            <div className="imgBx">
              <img
                src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg"
                alt=""
              />
            </div>
            <div className="formBx">
              <form action="" onSubmit={LoginData}>
                <h2>Sign In</h2>
                <input type="text" name="username" placeholder="Username" onChange={setDataToState} onBlur={checkValid} value={inputs.username} />
                <span>{errors.usernameError}</span>
                <input type="password" name="password" onChange={setDataToState} onBlur={checkValid} placeholder="Password" />
                <span>{errors.passwordError}</span>
                <br />
                
                <input type="submit" name="" value="Login" />
                <p className="signup">
                  Don't have an account ?
                  <span className="link" onClick={toggleForm}> Signup</span>
                </p>
              </form>
            </div>
          </div>
          <div className="user signupBx">
            <div className="formBx">
              <form action="" onSubmit={RegistrationData}>
                <h2>Create an account</h2>
                <input type="text" name="username" placeholder="Username" onChange={setDataToState} onBlur={checkValid} value={inputs.username} />
                <input type="email" name="email" placeholder="Email Address" onChange={setDataToState} onBlur={checkValid} value={inputs.email} />
                <input type="password" name="password" placeholder="Password" onChange={setDataToState} onBlur={checkValid} value={inputs.password} />
                <input type="tel" name="mobile" onChange={setDataToState} onBlur={checkValid} placeholder="Mobile Number" />
                <span>{errors.mobileError}</span>
                <br />
                {/* <input type="password" name="" placeholder="Confirm Password" /> */}
                <input type="submit" name="" value="Sign Up" />
                <p className="signup">
                  Already have an account ?
                  <span className="link" onClick={toggleForm}> Signin</span>
                </p>
              </form>
            </div>
            <div className="imgBx">
              <img
                src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginCompo;
