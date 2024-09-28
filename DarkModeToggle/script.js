let containerEl=document.querySelector(".container");
let inputEl=document.querySelector(".input");

inputEl.checked=JSON.parse(localStorage.getItem("mode"));
function updateBody(){
    if(inputEl.checked){
        containerEl.style.background="black";
    }
    else{
        containerEl.style.background="white";
    }
}
updateBody();

inputEl.addEventListener("input",()=>{
    updateBody();
    updateLocalStorage();
})

function updateLocalStorage(){
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}