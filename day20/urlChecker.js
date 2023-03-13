const URL1="http://www.google.com?id=abc";
checkUrlType(URL1);
const URL2="https://www.ksrtc.gov";
checkUrlType(URL2);
const URL3="https://www.google.php?id=abc";
checkUrlType(URL3);

function checkUrlType(url) {
  if(url.startsWith('http:')) {
    console.log("external website " + url);
  } else if(url.endsWith('.gov')) {
    console.log("government website "+ url);
  } else if(url.includes('.php')) {
    console.log("Internal Website " + url);
  }
}