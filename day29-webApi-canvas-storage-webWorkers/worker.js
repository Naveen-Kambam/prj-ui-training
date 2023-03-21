/* WORKER.JS */

 addEventListener("message", function (event) {
   let result = 0;
   for (var i = 0; i < 8; i++) {
     result += i;
   }

   postMessage(result);
});
