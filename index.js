function receivesAFunction(name){
return name();
}
receivesAFunction(function () { return 'Hello, ' + `Natalies`; });

function returnsANamedFunction(){
    return function namedFunction(){
        return `Hello, world`
    }
}





function returnsAnAnonymousFunction(){

return function(power){
    return num*5
}

}