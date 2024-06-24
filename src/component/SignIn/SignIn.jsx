import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
// import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./SignIn.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailerr, setEmailerr] = useState("");
  const [PasswordErr, setPasswordErr] = useState("");
  const navigate = useNavigate();


  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };


  function handleSubmit(e) {
    e.preventDefault();


    if (!email.trim()) {
      setEmailerr('*Email cannot be empty'); // Frontend error for empty username
      return;
    } else {
      setEmailerr(''); // Clear the frontend error when the username is not empty
    }


    if (!password.trim()) {
      setPasswordErr('*Password cannot be empty'); // Frontend error for empty username
      return;
    } else {
      setPasswordErr(''); // Clear the frontend error when the username is not empty
    }


    const details = {
      email: email,
      password: password,
    };

    const headerObject = {
      "Content-Type": "application/json",
      Accept: "*/*",
    };

               
    axios.post('https://stream.xircular.io/api/v1/customer/signin', details, { headers: headerObject })
      .then((res) => {
        console.log("data", res.data);
        // Store the access token
        const userId = res.data.id
        const userName = res.data.email
        const accessToken = res.data.token;
        console.log("accesstoken", accessToken)
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('userId', userId);
        localStorage.setItem('userName', userName);

        window.alert("success");

        setIsAuthenticated(true);

        navigate('/'); // Use navigate 
      })
      .catch((err) => {
        console.log("siginerror", err.response.data.message)
        if (err.response.data.message === "Customer not found.") {
          setEmailerr(err.response.data.message);
        }
        else if (err.response.data.message === "Invalid password.") {
          setPasswordErr(
            err.response.data.message
          )
        }
        else {
          // Handle other types of errors or set a generic error message
          setEmailerr("");
          setPasswordErr("")
        }
      });
  }

  const handlleSignup = () => {
    navigate('/SignUp')
  }

  // const handlePassword = () =>{
  //   navigate('/forgotpassword')
  // }

  return (
    <div>
      <div className="signIn-page">
        <Card className="signIn-card">
          <CardContent>
            <Typography className="signIn-cardTitle" component="div">
              Sign In
            </Typography>
            <Typography className="signIn-sub-Title" component="div">
              Please fill your detail to access your account.
            </Typography>

            <div className="signIn-input-card">
              <div className="signIn-email-card">
                <p className="signIn-email-title">Email</p>
                <TextField
                  className="signIn-email-textfield"
                  size="small"
                  color="secondary"
                  type="search"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                />

                <div style={{ color: "red", fontSize: "12px", fontFamily: 'Inter', marginBottom: '0px' }}>
                  {emailerr}
                </div>
              </div>
              <div className="signIn-password-card">
                <p>Password</p>
                <FormControl size="small" variant="outlined" color="secondary">
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handlePasswordChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <div style={{ color: "red", fontSize: "12px", fontFamily: 'Inter', marginBottom: '0px' }}>
                  {PasswordErr}
                </div>
              </div>
            </div>
          </CardContent>
          <CardActions className="signIn-button-card">
            <Button variant="contained" className="signIn-button" onClick={handleSubmit}>
              Sign In
            </Button>
          </CardActions>
          <div className="signIn-last-option">
            <div style={{ fontFamily: 'Inter', fontWeight: '400' }}>Don't have an account?</div>
            <div style={{ fontFamily: 'Inter', fontWeight: '600', cursor: 'pointer' }}><a onClick={handlleSignup} >
              Sign Up
            </a></div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default SignIn
