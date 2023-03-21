function makeRequest(method, url, data) {
    return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function() {
        if(xhr.status === 200) {
            resolve(xhr.responseText);
        } else {
            reject(xhr.statusText);
        }
    }
    xhr.onerror = function() {
        reject(xhr.statusText);
    }
    xhr.send(JSON.stringify(data));
})
};

makeRequest("GET",
            "https://jsonplaceholder.typicode.com/users/2",
            null).then(
            function (response){
                console.log("SUCCESS", response);
            }).catch(
            function (error) {
                console.log("Failed", error);
            });