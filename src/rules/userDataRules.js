export default {
  validateEmail(email) {
    const pattern = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
    if (email !== null && email === "") return "Email is required.";
    if (email && !pattern.test(email)) return "Email is invalid";
    return "";
  },
  validatePassword(password) {
    if (password != null && password === "") return "Password is required.";
    if (password && password.length < 6) return "Atleast 6 characters required.";
    return "";
  },
  validateName(name) {
    if (name !== null && name === "") return "Name is required.";
    if (name && name.length < 4) return "Name should be greater then 4 characters.";
    if (name && name.length > 30) return "Name can't be greater then 30 characters.";
    return "";
  },
  validateCode(code) {
    if (code !== null && code === "") return "Verification Code is required.";
    if (code && !/^[0-9]/.test(code)) return "Verification Code is not numeric";
    if (code && code.length !== 6) return "Verification Code is should be 6 digits.";
    return "";
  },
  validatePhoneNumber(phoneNumber) {
    if (phoneNumber !== null && phoneNumber === "") return "Phone Number is required.";
    if (phoneNumber && !/^[0-9]/.test(phoneNumber)) return "Phone Number is not numeric";
    if (phoneNumber && phoneNumber.length !== 10) return "Phone Number is should be 10 digits.";
    return "";
  },
  validateConfirmPassword(password, confirmPassword) {
    if (confirmPassword !== null && confirmPassword === "") return "Confirm Password is required.";
    if (confirmPassword !== null && confirmPassword.length < 6)
      return "Atleast 6 characters required.";
    if (confirmPassword !== null && password !== confirmPassword)
      return "Please confirm your password.";
    return "";
  },
};
