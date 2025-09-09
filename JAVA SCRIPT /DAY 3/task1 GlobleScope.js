//Globle Scope:
//variable declared outside any function or block are in the globl scope. They are accesed anywhere in the script

let a = "77";

function Say() {
    console.log("hii I am Thilakshitha");
    console.log(a);
}

Say();
console.log(a);

