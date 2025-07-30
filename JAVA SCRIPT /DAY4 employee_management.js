let employees=[];
//add emp
function addEmp(id,name,salary = true){
    employees.push({id,name,salary});
    console.log("employee added:",employees);
}
addEmp(1,"akshaya",70000)
addEmp(2,"ami",50000)
addEmp(3,"vasantha",60000)

//update
function updateEmp(id,newDetail){
    const emp = employees.find(e => e.id === id)
    if(emp){
        Object.assign(emp,newDetail);
        console.log("update:",employees);
    }else{
        console.log("employee not found");
    }
}
updateEmp(2, { name: "Amilthini", salary: 55000 });

//delect
function delectEmp(id){
    const index = employees.findIndex((e) => e.id === id)
    if(index !== -1){
        employees.splice(index,id)
        console.log("Employee Removed:",employees);
    }else{
        console.log("Employee not found");
    }
}
delectEmp(3)
