//Block Scope
//the block scope of a variable means that the variable accessible within the block that is btw the curly braces.

function Vote(age){
    if(age>=18){
        let iscloudy=true;
        var israining=true;
        console.log("Eligible");
        console.log(iscloudy);
        console.log(israining); 

    }
    console.log(israining);

}
Vote(18)
