/* eslint-disable import/no-anonymous-default-export */
export default {
  validatePassword(password) {
    if (password !== null && password === "") return "Password is required.";
    if (password !== null && password.length < 6) return "Atleast 6 characters required.";
    return "";
  },
  validateConfirmPassword(password, confirmPassword){
    if (confirmPassword !== null && confirmPassword === "") return "Confirm Password is required.";
    if (confirmPassword !== null && confirmPassword.length < 6) return "Atleast 6 characters required.";
    if (confirmPassword !== null && password !== confirmPassword) return "New & Confirm Password should match.";
    return "";
  }
};
