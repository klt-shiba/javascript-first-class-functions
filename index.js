function spy(spyname = "james") {
    console.log(`The spy is ${spyname}`);
};


// function nameFunction(name) {
//     console.log(`hi:${name}`);
// };

function receivesAFunction(spy) {
    spy();
}

function returnsANamedFunction() {
    function nameOfFunction() {
        console.log("")
    }
    return nameOfFunction;
}

returnsANamedFunction();


function returnsAnAnonymousFunction() { 
    return function() {
        console.log(`Nom nom nom, this ${breakfast} is delicious!`);
    }
}
