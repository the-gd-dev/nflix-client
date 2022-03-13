export default {
  validateEmail(email) {
    if (email !== null && email === "") return "Email is required.";
    if (email && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      return "Email is invalid";
    return "";
  },
  validatePassword(password) {
    if (password != null && password == "") return "Password is required.";
    if (password && password.length < 6) return "Password should be more then 6 characters.";
    return "";
  },
};
