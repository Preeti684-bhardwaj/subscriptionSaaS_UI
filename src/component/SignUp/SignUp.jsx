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
import "./SignUp.css";
import axios from "axios";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const [error, setError] = useState("");
  const [phoneErr, setPhoneErr] = useState("");
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

  const handlePhoneChange = (value) => {
    setPhone(value);
    if (!isValidPhoneNumber(value)) {
      setPhoneErr("Invalid phone number");
    } else {
      setPhoneErr("");
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,15}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPhoneErr("");
    setEmailerr("");
    setPasswordErr("");

    if (!isValidPhoneNumber(phone)) {
      setPhoneErr("Invalid phone number");
      return;
    }

    if (!validateEmail(email)) {
      setEmailerr("Invalid email address");
      return;
    }

    if (!validatePassword(password)) {
      setPasswordErr(
        "Password should be strong with one number, one letter, one special character and between 8 to 15 characters"
      );
      return;
    }

    const item = { phone, email, password };
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
            // setError(" ");
            setPhoneErr(" ");
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

            <div className="input-card">
              <div className="phone-card">
                <p>Phone number</p>
                <PhoneInput
                  value={phone}
                  onChange={handlePhoneChange}
                  defaultCountry="US"
                  id="phone-input"
                  color="secondary"
                />
                {phoneErr && (
                  <p style={{ color: "red", fontSize: "12px", fontFamily: 'Inter' }}>
                    {phoneErr}
                  </p>
                )}
              </div>
              <div className="email-card">
                <p>Email</p>
                <TextField
                  className="email-textfield"
                  size="small"
                  color="secondary"
                  type="search"
                  value={email}
                  onChange={handleEmailChange}
                />
                <div style={{ color: "red", fontSize: "12px", fontFamily: 'Inter' }}>
                  {emailerr}
                </div>
              </div>
              <div className="password-card">
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
                <div style={{ color: "red", fontSize: "12px", fontFamily: 'Inter' }}>
                  {PasswordErr}
                </div>
              </div>
            </div>
          </CardContent>
          <CardActions className="button-card">
            <Button variant="contained" className="signup-button" onClick={handleSubmit}>
              Sign up
            </Button>
          </CardActions>
          <div className="last-option">
            <div style={{ fontFamily: 'Inter', fontWeight: '400' }}>Already have an account?</div>
            <div style={{ fontFamily: 'Inter', fontWeight: '400' }}>Sign in</div>
          </div>
        </Card>
      </div>
    </div>
  );
}
