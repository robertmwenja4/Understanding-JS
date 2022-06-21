function first() {
    console.log(this.firstName+ ' '+ this.lastName);
}

let customer1 = {
    firstName: 'Robert',
    lastName: 'Mwenja',
    print: first
};

let customer2 = {
    firstName: 'Obed',
    lastName: 'ondimu',
    print: first
};

console.log(customer1.firstName);