export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/auth", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    //ToDo: on server it will only return some info of user(not password)
    resolve({ data });
  });
}

export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    const email = loginInfo.email;
    const password = loginInfo.password;
    const response = await fetch("http://localhost:8080/users?email" + email);
    const data = await response.json();
    console.log({data})
    if (data.length) {
      if (password === data[0].password) {
        resolve({ data: data[0] });
      } else {
        reject({ message: "wrong credentials" });
      }
    } else {
      reject({ message: "user not found" });
    }
    //ToDo: on server it will only return some info of user(not password)
  });
}

export function signOut(userId) {
  return new Promise(async (resolve) => {
    //ToDo: on server we will remove user session info
    resolve({ data: "success" });
  });
}
