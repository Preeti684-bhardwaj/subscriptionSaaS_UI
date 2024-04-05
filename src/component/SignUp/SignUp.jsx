import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./SignUp.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [error, setError] = useState("");
  const [emailerr, setEmailerr] = useState("");
  const [PasswordErr, setPasswordErr] = useState("");
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    console.log(newPassword)
    setPassword(newPassword);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    console.log(newEmail)
    setEmail(newEmail);
  };

  const handlePhoneChange = (e) => {
    const newPhone = e.target.value;
    console.log(newPhone);
    setPhone(newPhone);
  };

    const validateEmail = (email) => {
    // Use a regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Password should be strong, with at least one number, one upper case, one lower case,
    // and one special character, and characters should be between 8 to 15 only.
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,15}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailerr("");
    let item = { phone,email, password };

    if (!validateEmail(email)) {
        setEmailerr('Invalid email address');
        return;
      } else {
        setEmailerr(''); // Clear the error state when a valid email is entered
      }
  
  
      if (!validatePassword(password)) {
        setPasswordErr('Password should be strong, with one number, one upper case, one lower case, one special character, and between 8 to 15 characters.');
        return;
      } else {
        setPasswordErr(''); // Clear the password error state when it's strong
      }

    const headerObject = {
      "Content-Type": "application/json",
      Accept: "*/*",
    };
    const SignUpApi = "https://stream.xircular.io/customer/signup";

    axios
      .post(SignUpApi, item, { headers: headerObject })
      .then((res) => {
        console.log("signupai res", res);
        console.log("successmsg", res.data.message);
        navigate("/");
      })
      .catch((err) => {
        console.log("errors", err);
        if (err.response && err.response.data) {
          if (err.response.data.message === "Email is already in use.") {
            setEmailerr("*Email is already in use");
          } else {
            setError(" ");
            setEmailerr(" ");
            setPasswordErr("");
          }
        }
      });
  };

  const loginhandle = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="signup">
        <Card className="signup-card">
          <CardContent>
            <Typography className="cardTitle" component="div">
              Signup
            </Typography>
            <Typography className="sub-Title" component="div">
              Please fill the details to create account
            </Typography>
          </CardContent>
          {/* ========================================================= */}
          <div className="input-card">
          <div className="phone-card">
            <p>Phone number</p>
            <TextField
              size="small"
              color="secondary"
              type="search"
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>
          <div className="email-card">
            <p>Email</p>
            <TextField
              size="small"
              color="secondary"
              type="search"
              value={email}
              onChange={handleEmailChange}
            />
            <div style={{color:"red",fontSize:"12px",fontFamily:'Inter'}}>{emailerr}</div>
          </div>
          <div className="password-card">
            <p>Password</p>
            <FormControl size="small" variant="outlined" color="secondary">
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={password} // Bind the value of the password state
                onChange={handlePasswordChange} // Call handlePasswordChange when the password changes
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
            <div style={{color:"red",fontSize:"12px"}}>{ PasswordErr}</div>
            </div>
          </div>
          <CardActions className="button-card">
              <Button variant="contained" className="signup-button" onClick={handleSubmit}>
                Sign up
              </Button>
          </CardActions>
          <div className="last-option">
            <div style={{fontFamily:'Inter',fontWeight:'400'}}>Already have an account?</div>
          <div style={{fontFamily:'Inter',fontWeight:'400'}}>Sign in</div>
          </div>
        </Card>
      </div>
    </div>
  );
}
