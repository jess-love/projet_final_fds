function PasswordCheck() {
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm_password").value;
  console.log(password);
  console.log(confirmPassword);
  let message = document.getElementById("message").value;
  if (password.length !== 0) {
    if (password === confirmPassword) {
      message.textContent = "Password match";
      message.style.background = "#3ae374";
    } else {
      message.textContent = "Password don't match";
      message.style.background = "#ff4d4d";
    }
  }
  //   else {
  //     alert("Password can't be empty!");
  //     message.textContent = " ";
  //   }
}

export default PasswordCheck;
