
export default {
  validateName(name) {
    if (name !== null && name === "") return "Name is required.";
    if (name && name.length < 4) return "Name should be greater then 4 characters.";
    if (name && name.length > 30) return "Name can't be greater then 30 characters.";
    return "";
  },
  validateEmail(email) {
    if (email !== null && email === "") return "Email is required.";
    if (email && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) return "Email is invalid";
    return "";
  },
  validatePhoneNumber(phoneNumber) {
    if (phoneNumber !== null && phoneNumber === "") return "Phone Number is required.";
    if (phoneNumber && !/^[0-9]/.test(phoneNumber)) return "Phone Number is not numeric";
    if (phoneNumber && phoneNumber.length !== 10) return "Phone Number is invalid";
    return "";
  },
  validatePassword(password, confirmPassword) {
    if (password != null && password == "") return "Password is required.";
    if (password != null && password.length < 6) return "Atleast 6 characters required.";
    if (confirmPassword != null && password != confirmPassword) return "Please confirm your password.";
    return "";
  },
};
