var textarea=document.getElementById("textarea");
var select=document.getElementById("select");
var result=document.getElementById("result");

textarea.addEventListener("input",()=>{
     make_result();
});
select.addEventListener("change",()=>{
     make_result();
});
function make_result(){
    if(select.value=="decode"){
result.value=window.atob(textarea.value);
    }
    else{
        result.value=window.btoa(textarea.value);

    }
    
}