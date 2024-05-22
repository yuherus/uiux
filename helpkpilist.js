let overlay=document.getElementById("overlay");
let modalCreateKpi=document.getElementById("id01");
let helpKpiList=document.getElementsByClassName("help-kpilist")[0];
let helpKpiCreate=document.getElementsByClassName("help-kpicreate")[0];
overlay.addEventListener("click", function(){
    modalCreateKpi.style.display='block';
    modalCreateKpi.style.position='fixed';
    modalCreateKpi.style.backgroundColor="rgba(0, 0, 0, 0)";
    helpKpiList.style.display="none";
    helpKpiCreate.style.display="block";
});