const axios = require("axios");
const functions = {
  add: (x, y) => x + y,
  isNull: () => null,
  checkValue: num => num,
  createUser: () => {
    const user = { firstName: "Wafi", lastName: "Mohamed" };

    return user;
  },
  LessThan: (x, y) => x + y,
  regEx: word => word,
  arr: username => {
    const user = ["wafi", "mohamed", "ali", "moe"];
    return user;
  },

  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then(res => res.data)
      .catch(err => console.log(err))
};
module.exports = functions;
