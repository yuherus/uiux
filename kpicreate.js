function openCreateKpi(){
    const modalCreateKpi=document.getElementById("id01");
    modalCreateKpi.style.display='block';
    modalCreateKpi.style.position='fixed';
}

function closeModal(){
    const modalCreateKpi=document.getElementById("id01");
    modalCreateKpi.style.display='none';
}

function toggleDropdown() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

function selectPlan(plan) {
    const selectedPlansContainer = document.getElementById('selected-plans');
    
    // Check if the plan is already selected
    if (Array.from(selectedPlansContainer.children).some(child => child.textContent.includes(plan))) {
        return; // Do nothing if the plan is already selected
    }

    const planElement = document.createElement('div');
    planElement.className = 'selected-plan';
    planElement.innerHTML = `
        <span>${plan}</span>
        <span class="remove-plan" onclick="removePlan(this)">&#10005;</span>
    `;

    selectedPlansContainer.appendChild(planElement);
}

function removePlan(element) {
    const selectedPlansContainer = document.getElementById('selected-plans');
    selectedPlansContainer.removeChild(element.parentElement);
}

window.onclick = function(event) {
    if (!event.target.matches('.dropdown') && !event.target.matches('.dropdown *')) {
        const dropdownMenu = document.querySelector('.dropdown-menu');
        dropdownMenu.style.display = 'none';
    }
}

let createKPIButton = document.getElementById("createKPIButton");
createKPIButton.addEventListener("click", function(){
    window.location.href = "kpilist.html";
})
