import React from "react";
import zxcvbn from "zxcvbn";

export const PasswordStrengthMeter = ({ password }) => {
  const testResult = zxcvbn(password);
  const num = (testResult.score * 100) / 4;
  console.log(num);
  const createPassLabel = () => {
    switch (testResult.score) {
      case 0:
        return " ";
      case 1:
        return "Weak";
      case 2:
        return "Fear";
      case 3:
        return "Good";
      case 4:
        return "Strong";
      default:
        return " ";
    }
  };
  const funcProgressColor = () => {
    switch (testResult.score) {
      case 0:
        return "#828282";
      case 1:
        return "#EA1111";
      case 2:
        return "#FFAD00";
      case 3:
        return "#9bc158";
      case 4:
        return "#02706b";
      default:
        return "none";
    }
  };
  const changePasswordColor = () => ({
    background: funcProgressColor(),
    width: `${num}%`,
    height: "7px",
  });
  return (
    <>
      <div className="password-progression">
        <div className="progress" style={{ height: "7px" }}>
          <div className="progress-bar" style={changePasswordColor()}></div>
        </div>
        <p className="password_txt" style={{ color: funcProgressColor() }}>
          {createPassLabel()}
        </p>
      </div>
    </>
  );
};
export default PasswordStrengthMeter;
