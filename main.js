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
    

