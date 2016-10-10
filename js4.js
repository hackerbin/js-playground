var myvalue = 0;

var p1 = new Promise(
    // The resolver function is called with the ability to resolve or
    // reject the promise
    function(resolve, reject) {

        setTimeout(
            function() {
                myvalue +=1;

                resolve(myvalue);
            }, 5000);
    }
);


p1.then(function (resolvedValue) {
    console.log(resolvedValue);
}).catch(function (exception) {
    console.log(exception);
});