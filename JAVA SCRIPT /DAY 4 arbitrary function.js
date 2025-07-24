//array
let number=[1,2,"three",true];
let names=new Array("thilakshitha","pandi");
console.log(number[2]);
console.log(names.length);

//filter() - it filtered result arguments
let result=number.filter(result=>number[1]);
console.log(result);

//slice - delect the element based on the index value
let num=[1,2,3,4,5,6,7,8];
let r = num.slice(1,7);
console.log(num);
console.log(r);

//splice - changes the orginal array by adding or removing items at a specific index 
numb = [10,20,30,40,50,60,70,80,90,100];
numb.splice(1,2,"BTS");
console.log(numb);

//object
let obj = {
    name: "BTS",
    totalmark: "97",
    subject: {
        song: "300",
        albums: "20+"
    },  // <-- COMMA here is required
    avg: function() {
        let songCount = parseInt(this.subject.song);      // 300
        let albumCount = parseInt(this.subject.albums);   // 20 (ignores '+')
        return songCount + albumCount;    
    }
};

console.log(obj.totalmark);
console.log(obj["name"]);
console.log(obj.subject.song);
console.log(obj.subject.albums);
console.log(obj.avg());

const person = {
    name:"thilakshitha",
    age:"18",
    city:"Theni"
};
const { name,age,city} = person;
console.log(name);
console.log(age);
console.log(city);

//in array
const arr = [name,age,city];
console.log(arr);

emo ="👌😎✨";
console.log(emo);
