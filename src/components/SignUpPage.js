import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import GeneralServices from "../Services/GeneralServices";

const SignUpPage = ({updateLogIn, initialData}) => {

  const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        username : "",
        password: "",
        email: ""
    })

    const handleInputCreds = (e) =>{
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        })
    }

    async function handleSubmit (e) {
        e.preventDefault();
        let req = {
            userName : credentials.username,
            password : credentials.password,
            email: credentials.email
        }
        const data = await GeneralServices.newUser(req);
        console.log("data: ",data);
        if(data.message == "User added Successfully"){
            initialData(data.initialTodos)
            updateLogIn();
            navigate("/");
        }
    }

  return (
    <div className="loginPage glass2">
      <div className="login-container glass2">
        <h3>Sign up</h3>
        <form onSubmit={handleSubmit}>
              <div class="txt_field">
                  <input type="text" name="username" onChange= {handleInputCreds} required/>
                  <label>Username</label>
              </div>
              <div class="txt_field">
                  <input type="password" name="password" onChange= {handleInputCreds} required/>
                  <label>Password</label>
              </div>
              <div class="txt_field">
                  <input type="email" name="email" onChange= {handleInputCreds} required/>
                  <label>Email</label>
              </div>
              <input name="submit" type="Submit" value="Sign Up"/>
              <div class="signup_link">
                  Already a Member ? <Link to="/login">Login</Link>
              </div>
          </form>
    </div>
    </div>
  );
};

export default SignUpPage;
