async function makeRequest(method, url, data) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("content-type", "application/json");
    try {
        await new Promise(function (resolve, reject) {
            xhr.onload = function () {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject(xhr.statusText);
                }
            };
            xhr.onerror = function () {
                reject(xhr.statusText);
            };
            xhr.send(JSON.stringify(data));
        });
    } catch (error) {
        throw new Error("Failed");
    }
}
(async function () {
    try {
        const response = await makeRequest(
            "GET",
            "https://jsonplaceholder.typicode.com/users",
            null
        );
        console.log(response);
    } catch (error) {
        console.log("error");
    }
})();