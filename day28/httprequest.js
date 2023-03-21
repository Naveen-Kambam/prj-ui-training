function makeRequest(method, url, data, successCallBack, errorCallBack) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function() {
        if(xhr.status === 200) {
            successCallBack(xhr.responseText);
        } else {
            errorCallBack(xhr.statusText);
        }
    }
    xhr.onerror = function() {
        errorCallBack(xhr.statusText);
    }
    xhr.send(JSON.stringify(data));
}

makeRequest("GET",
            "https://jsonplaceholder.typicode.com/users/2",
            null,
            function (response){
                createUI(response);
            },
            function (error){
                console.log("Failed", error);
            }
);

function createUI(userData) {
    console.log(userData);
    const d = JSON.parse(userData);
    console.log(d);
}