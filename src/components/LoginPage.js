import React, { useState } from "react";
import { Link, useNavigate  } from 'react-router-dom';
import GeneralServices from "../Services/GeneralServices";
const LoginPage = ({updateLogIn, initialData}) => {

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        username : "",
        password: ""
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
            password : credentials.password
        }
        const data = await GeneralServices.authUser(req);
        console.log("data: ",data);
        if(data.message == "User found Successfully"){
            initialData(data.todos)
            updateLogIn();
            navigate("/");
        }
    }



  return (
    <div className="loginPage glass2">
      <div className="login-container glass2">
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
              <div class="txt_field">
                  <input type="text" name="username" onChange= {handleInputCreds}required/>
                  <label>Username</label>
              </div>
              <div class="txt_field">
                  <input type="password" name="password" onChange= {handleInputCreds} required/>
                  <label>Password</label>
              </div>
              <input name="submit" type="Submit" value="Login"/>
              <div class="signup_link">
                  Not a Member ? <Link to="/signup">Signup</Link>
              </div>
          </form>
    </div>
    </div>
  );
};

export default LoginPage;
