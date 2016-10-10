function cbfn1() {

}

function mycbfn(arg){
    console.log("arg is: ",arg);
}


function testfn1(cbtanvir){
    var x = "robin";
    // console.log("l1: ",x);
    setTimeout(function () {
        x = "tanvir";
        cbtanvir(x);
        // console.log("l2: ",x);
    },2000);
}



testfn1(mycbfn);