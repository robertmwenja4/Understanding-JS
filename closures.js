function sayHello(name) {
    return function(){
        return function(){
            console.log('Hello '+name);
        }
    }
}

let roba = sayHello('Robert')();
roba();