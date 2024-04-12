class User {
    

    constructor(userName, password){
        this.userName = userName;
        this.password = password;
    }

   

    CheckUserPassword(skickadpassword){
       return this.password == skickadpassword;
    }
}
let userObject = JSON.parse(localStorage.getItem('userList')) || [];

let userList = [];

for(let i in userObject){
    userList.push(new User(userObject[i].userName, userObject[i].password));
}

console.log(userList);
