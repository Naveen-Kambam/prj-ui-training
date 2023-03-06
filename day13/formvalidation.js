document.getElementById('submit').addEventListener("click", function(e) {
e.preventDefault();
let username = document.getElementById('userName').value;
let email = document.getElementById('emailHelp').value;
let password = document.getElementById('exampleInputPassword1').value;
let checked = document.getElementById('exampleCheck1').value;
var feedback = document.getElementById('feedback').value;

let userDetails = {};
userDetails['username'] = username;
userDetails['email'] = email;
userDetails['password'] = password;
userDetails['checked'] = checked;
userDetails['feedback'] = feedback;

sendMessage(username);
});

const sendMessage = (username) => {
    const message = `Thank you ${username}, Your form has been successfully submitted.`;
    document.getElementById('thankyou-message').innerHTML = message;
}