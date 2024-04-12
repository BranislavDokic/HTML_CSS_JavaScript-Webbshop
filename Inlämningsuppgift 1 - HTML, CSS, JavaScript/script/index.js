const createUserName = document.getElementById("userName");
const createUserPassword = document.getElementById("userPassword");
const createButton = document.getElementById("createAccButton");
const createMessage = document.getElementById("message");

function saveUserList() {
    localStorage.setItem('userList', JSON.stringify(userList));
}







createButton.addEventListener("click", function(event) {
    let name = createUserName.value;
    let password = createUserPassword.value;
    userList.push(new User(name, password));
    saveUserList(); 
    
    for (let i in userList) {
        console.log(userList[i]);
    }
    createMessage.textContent = "Ditt konto är skapad!";
});


