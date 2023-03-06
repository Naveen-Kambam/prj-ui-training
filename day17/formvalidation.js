const USER_NAME = "  Keannaemilyelizebeth Romanadveratrelunder  ";
USER_NAME = USER_NAME.trim(); // clean the data before any operation
const USER_EMAIL = "naveenkambam.gmail.com";
validateUser(USER_NAME, USER_EMAIL);

function validateUser(username, useremail) {
  if(username.length > 20) {
    console.log("User Name exceeds acceptable limit, Please enter max 20 characters");
  }
  if(!useremail.includes('@')){
    console.log("Please enter a valid email");
  }
  if(username.startsWith(" ") || username.endsWith(" ")) {
    console.log("Empty spaces not allowed in user name");
  }
}
