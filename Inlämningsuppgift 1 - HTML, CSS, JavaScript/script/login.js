const loginName = document.getElementById("loginname");
const loginPassword = document.getElementById("loginpassword");
const loginButton = document.getElementById("loginButton");
const loginMessage = document.getElementById("messagelogin"); 

userList.push(new User("milica", "milica"));

function GetUserToLogIn(userToLogIn){
    for (let i in userList) {
        if (userList[i].userName == userToLogIn) {
            return userList[i];
        }
    }
    return null; 
}

loginButton.addEventListener("click", function(event){
    let username = loginName.value;
    let password = loginPassword.value;
    let user = GetUserToLogIn(username);
    if(user != null && user.CheckUserPassword(password)){
        let userJson = JSON.stringify(user);
        localStorage.setItem("user", userJson);
        sessionStorage.setItem("key", loginName.value);
        let params = new URLSearchParams();
        params.append("key", loginName.value)
        window.location = "webbshoppage.html?" + params.toString();
    }
})
