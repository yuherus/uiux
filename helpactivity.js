
window.onclick = function(){
    modal.style.display = "block";
}

let overlay=document.getElementById("overlay");
let modal = document.getElementById("activityModal");
let helpActivity=document.getElementsByClassName("help-activity")[0];
let helpActCreate=document.getElementsByClassName("help-actcreate")[0];
overlay.addEventListener("click", function(){
    modal.style.display='block';
    modal.style.position='fixed';
    modal.style.backgroundColor="rgba(0, 0, 0, 0)";
    helpActivity.style.display="none";
    helpActCreate.style.display="block";
});

function closeHelp(){
    window.location.href = "howtouse.html";
}