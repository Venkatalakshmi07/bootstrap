//      var x=10;
//       var x=20;
//   document.write(x);
//    const firstName="web";
//     const lastName="development";
//     console.log(firstName +" " + lastName);
    // window.alert("submit succefully");
    // document.getElementById("demo").innerHTML = firstName + " " + lastName;
    // const firstName="tripurna";
    // const lastName="bantu";
    // window.prompt( lastName);
    // window.confirm(lastName);
    // operaters
    // arithematic operators
    // var x=2;
    // var y=3;
    // var z=x+y;
    // var q=x-y;
    // var p=x*y;
    // var r=x/y;
    // var t=x**y;
    // var n=x%y;
    // console.log(z);
    // console.log(q);
    // console.log(p);
    // console.log(r);
    // console.log(t);
    // console.log(n);
    // // assignment operators
    // var x=2;
    // x +=10;
    // y -=10;
    // p *=10;
    // q /=10;
    // t %=10;
    // r**=10;
    // console.log(x);
    // console.log(y);
    // console.log(p);
    // console.log(q);
    // console.log(t);
    // console.log(r);
    // comparison operator
    // const p="10";
    // const q="10";
    // console.log(p>q);
    // console.log(p<q);
    // console.log(p>=q);
    // console.log(p<=q);
    // console.log(p==q);
    // console.log(p === q);
    // logical operator
    // and operator
    // let x=20;
    // let y=30;
    // console.log(x>y&&x<y);
    // console.log(x<y&&x>y);
    // console.log(x<y&&x<y);
    // console.log(x>y&&x>y);
    // or operator
    // const c=40;
    // const d=50;
    // console.log(c>d||c<d);
    // console.log(c<d||c>d);
    // console.log(c<d||c<d);
    // console.log(c>d||c>d);
    // // not operator
    // var t=10;
    // var s=20;
    // console.log(!(t<s));
    // // type operator
    // let name="web";
    // let n=true;
    // console.log(typeof(n));
    // ternary
    // console.log((x<y ? "tripurna" : "srinu"));
    // functions
    // function myFunction(x,y)
    // {
    //     return console.log(x+y);
    // }
    // myFunction(3,4);
    // const x= 40;
    // function myFunction()
    // {
    //     console.log(x);
    // }
    // myFunction();
//     // datatypes
//     const x=50;
//   console.log(typeof(x));
//   const y= "webdevelopment";
    // console.log(typeof(y));
//    let z;
//    console.log(typeof(z));
//    const t= " ";
//    console.log(typeof(t));
//    const p= true;
//    console.log(typeof(p));
//    const r ={Name: "web",age:20, designation:" development"};
//    console.log(r.Name + " " + r.designation);
//    const q=["webdevelopment", "appdevelopment", "digitalmarketing"];
//    console.log(q);
// const clickBtn=document.querySelector(".clickbtn");                                                                                                                                                          
// const headTag=document.querySelector(".hidehead");

// clickBtn.addEventListener("click", function myFunction(){
//     return headTag.classList.toggle("hidehead-active");
// });

const headTag=document.querySelector(".hidehead");

function myFunction(){
    return headTag.classList.toggle("hidehead-active");
}
                                                                                                                                                       


const icon=document.querySelector(".icon");
const formInput=document.querySelector(".password-input");

icon.addEventListener("click", function button(){
    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");
    formInput.type = formInput.type === "password" ? "text": "password";
});
// array methods
// to string
const array = ["web","digital","marketing","developer","app","mobile","ios"];
const array1 = array.toString();
console.log(array1);
// array push
const array2= ["rose","lilly","jasmine","marigold"];
const flowers1 =array2.push("lotus");
console.log(array2);
// array pop
const array3= ["rose","lilly","jasmine","marigold"];
const flowers2 = array3.pop();
console.log(array3);
// array shift
const array4 = ["rose","lilly","jasmine","marigold"];
const flowers3= array4.shift();
console.log(array4);
// array unshift
const array5= ["rose","lilly","jasmine","marigold"];
const flowers4 = array5.unshift("tulip");
console.log(array5);
// array sort
const array6= ["rose","lilly","jasmine","marigold", "lotus","hibicus"];
const flowers5 = array6.sort();
console.log(array6);
// array length
const array7= ["rose","lilly","jasmine","marigold", "lotus","hibicus"];
const flowers6 = array7.length;
console.log(flowers6);
// array splice
const  items= ["chicken","biryani","noodles","panipuri", "porota","chapathi"];
const items1 = items.splice(2,3,"mutton");
console.log(items);
// array slice
const  items2= ["chicken","biryani","noodles","panipuri", "porota","chapathi"];
const items3 = items2.slice(2,5);
console.log(items3);
// array length
const  items4= ["chicken","biryani","noodles","panipuri", "porota","chapathi"];
console.log(items4[items4.length-3]);
console.log(items4.length-4);
// array maximum
const number= [356,58787,342669,1350,478,234567878];
console.log(Math.max.apply(null,number));
// array minimum
const number1= [356,58787,342669,1350,478,234567878];
console.log(Math.min.apply(null,number1));
// map function
const obj ={name:"web",age:20, designation:"developer"}

const objarray =[
    { id:0, name:"web",age:20, designation:"developer"},
    { id:1, name:"olo",age:43, designation:"dgbyddhb"},
    { id:2, name:"mii",age:27, designation:"ksmijmoa"},
    { id:3, name:"hah",age:14, designation:"asmnsjmo"},
    { id:4, name:"hee",age:10, designation:"amsododo"},
    { id:5, name:"hus",age:15, designation:"amsoldol"},
    { id:6, name:"nou",age:16, designation:"mjjhigmh"},
    { id:7, name:"ohh",age:18, designation:"naififfn"},
    { id:8, name:"haa",age:19, designation:"mnfofmom"}
];
const map = objarray.map(function myFunction(item){
    return item.age *2;
});
console.log(map);
// filter function
const filter = objarray.filter(function myFunction(item){
    return item.age<20;
});
console.log(filter);
// find function
const finddata = objarray.find(function myFunction(item){
    return item.age>20;
});
console.log(finddata);
// reduce function
const reducedata = objarray.reduce(function myFunction( name,item){
return item.age+name;
},0);
    console.log(reducedata);
    // foreach
    objarray.forEach(function myFunction(item){
        console.log(item.age);
    });
    









    

