function fetchUser(callback) {
  const userData = { name: "Alice", age: 25 };

  setTimeout(() => {
    callback(userData);
  }, 500);
}

function transformUser(user, callback) {
  const userData = user;

  if (userData.age >= 18) {
    userData.isAdult = true;
  } else {
    userData.isAdult = false;
  }

  callback(userData);
}

function displayUser(user) {
  console.log(user);
}

fetchUser(user => {
    transformUser(user, () => {
        displayUser(user);
    })
})
