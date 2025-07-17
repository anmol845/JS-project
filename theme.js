let btn=document.querySelector("#btn");
let currmode="dark";
document.addEventListener('click',()=>{
  if(currmode==="dark"){
    currmode="light";
    document.querySelector("body").classList.add("dark");

  }
  else{
    currmode="dark";
     document.querySelector("body").classList.remove("dark");
  }
  console.log(currmode);

});
