import { React, useState } from "react";
import "./../App.css";
import { Link } from "react-router-dom";
import { Divider, FormControlLabel, TextField } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import Checkbox from "@mui/material/Checkbox";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { PasswordStrengthMeter } from "./PasswordStrengthMeter";
import PasswordCheck from "../user_auth/PasswordCheck";

export const Signup = () => {
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  // PasswordCheck();

  return (
    <div className="signup-class">
      <div className="icon">
        <div className="icon_class">
          <PersonAddIcon fontsize="large" />
        </div>
        <div className="text">Sign up</div>
      </div>

      <div className="row-m-2 mass">
        <div className="col-6 p-2">
          <TextField
            id="first_name"
            className="p-2"
            type="text"
            variant="outlined"
            label="Enter First Name"
            fullWidth
          />
        </div>
        <div className="col-6 p-2">
          <TextField
            id="last_name"
            className="p-2"
            type="text"
            variant="outlined"
            label="Enter Last Name"
            fullWidth
          />
        </div>
        <div className="col-6 p-2">
          <TextField
            id="email"
            className="p-2"
            type="text"
            variant="outlined"
            label="Enter Email"
            fullWidth
          />
        </div>
        <div className="col-6 p-2 mb-1">
          <TextField
            id="password"
            onClick=""
            className="p-2 shadow-none"
            type={passwordShown ? "text" : "password"}
            variant="outlined"
            label="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
          <PasswordStrengthMeter password={password} />
          <FormControlLabel
            control={
              <Checkbox
                onClick={togglePassword}
                icon={<CheckBoxOutlineBlankIcon fontsize="small" />}
                checkedIcon={<CheckBoxIcon fontsize="small" />}
                name="checkedI"
              />
            }
            label="Show Password"
          />
        </div>

        <div className="col-6 p-2">
          <TextField
            onClick={PasswordCheck}
            id="confirm_password"
            className="p-2"
            type="password"
            variant="outlined"
            label="Re-enter Password"
            fullWidth
          />
        </div>
        <p id="message">{PasswordCheck}</p>

        <FormControlLabel
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontsize="small" />}
              checkedIcon={<CheckBoxIcon fontsize="small" />}
              name="checkedI"
            />
          }
          label="I agree to all Terms & Conditions"
        />

        <a className="btn_login" href=" ">
          <button className="btn" variant="contained">
            Create Account
          </button>
        </a>

        <p className="text-center">
          <Divider variant="middle" />
          <Link to="/login" className="create-account">
            <h5 className="create-account"> Already have an Account</h5>
          </Link>
        </p>
      </div>
    </div>
  );
};
