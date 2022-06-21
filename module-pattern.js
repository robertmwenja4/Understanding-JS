var counter = (function(){

    //private properties
    let count = 0;

    function print(message) {
        console.log(message+''+count);
    }

    return {
        get: function(){
            return count;
        },
        set: function(value){
            count = value;
        },
        increment: function(){
            print('Before Increment: ');
            count = count+1;
            print('After Increment: ');
        },
        reset: function(){
            print('Value before: ');
            count = 0;
            print('Value After: ');
        }
    }

})();
counter.increment();
counter.increment();
counter.increment();
counter.set(7);
console.log(counter.get());
counter.reset();