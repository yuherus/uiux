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


document.addEventListener('DOMContentLoaded', function() {
var createKPIButton = document.getElementById("createKPIButton");
    createKPIButton.addEventListener('click', function(event) {
        event.preventDefault();
        showSuccessToast();
        closeModal();
    });

    function showSuccessToast() {
        toast({
          title: "Thành công!",
          message: "Bạn đã tạo KPI thành công.",
          type: "success",
          duration: 5000
        });
      }
});

function toast({ title = "", message = "", type = "info", duration = 3000 }) {
    const main = document.getElementById("toast");
    if (main) {
      const toast = document.createElement("div");
  
      const autoRemoveId = setTimeout(function () {
        main.removeChild(toast);
      }, duration + 1000);
  
      toast.onclick = function (e) {
        if (e.target.closest(".toast__close")) {
          main.removeChild(toast);
          clearTimeout(autoRemoveId);
        }
      };
  
      const icons = {
        success: "fas fa-check-circle",
        info: "fas fa-info-circle",
        warning: "fas fa-exclamation-circle",
        error: "fas fa-exclamation-circle"
      };
      const icon = icons[type];
      const delay = (duration / 1000).toFixed(2);
  
      toast.classList.add("toast", `toast--${type}`);
      toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
  
      toast.innerHTML = `
                      <div class="toast__icon">
                          <i class="${icon}"></i>
                      </div>
                      <div class="toast__body">
                          <h3 class="toast__title">${title}</h3>
                          <p class="toast__msg">${message}</p>
                      </div>
                      <div class="toast__close">
                          <i class="fas fa-times"></i>
                      </div>
                  `;
      main.appendChild(toast);
    }
  }
  