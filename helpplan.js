
window.onclick = function(){
    modal.style.display = "block";
}

let overlay=document.getElementById("overlay");
let modal = document.getElementById("planModal");
let helpPlan=document.getElementsByClassName("help-plan")[0];
let helpPlanCreate=document.getElementsByClassName("help-plan-create")[0];
overlay.addEventListener("click", function(){
    modal.style.display='block';
    modal.style.position='fixed';
    modal.style.backgroundColor="rgba(0, 0, 0, 0)";
    helpPlan.style.display="none";
    helpPlanCreate.style.display="block";
});

function closeHelp(){
    window.location.href = "howtouse.html";
}