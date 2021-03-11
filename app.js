var codes=document.getElementById("codes");
var remove=document.getElementById("remove");
var codes=document.getElementById("codes");
var play=document.getElementById("play");
var result=document.getElementById("result");


play.onclick=()=>{
result.innerHTML=codes.value;
localStorage.setItem("data",codes.value);
};
remove.onclick=()=>{
result.innerHTML="";
//codes.value="";
};
onload=()=>{
   result.innerHTML=codes.value;
   codes.value=localStorage.getItem("data");
  
};
