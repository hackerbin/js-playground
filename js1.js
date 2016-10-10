"use strict";

(function (window) {
    var a = "";
    var fn1,
        fn2,
        fn3;


    fn1 = function () {
        return fn3();
    }
    
    fn2 = function () {
        return "fn2";
    }

    fn3 = function () {
        return "fn3"
    }



    window.service1 = {
        fn1 : fn1,
        function1 : fn1,
        fn2 : fn2
    }




})(window);