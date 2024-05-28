document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("planModal");
    var btn = document.getElementById("btn-create-plan");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
    modal.style.display = "none";
    }

    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }


    var createPlanButton = document.querySelector('.submit-btn');
    createPlanButton.addEventListener('click', function(event) {
        event.preventDefault();
        showSuccessToast();
        modal.style.display = "none";
    });

    function showSuccessToast() {
        toast({
          title: "Thành công!",
          message: "Bạn đã tạo Plan thành công.",
          type: "success",
          duration: 5000
        });
      }
});

function toast({ title = "", message = "", type = "info", duration = 3000 }) {
    const main = document.getElementById("toast");
    if (main) {
      const toast = document.createElement("div");
  
      // Auto remove toast
      const autoRemoveId = setTimeout(function () {
        main.removeChild(toast);
      }, duration + 1000);
  
      // Remove toast when clicked
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
  // Hiển thị popup khi nhấp vào nút "Create Activity"
document.getElementById("create-activity-btn").addEventListener("click", function() {
  document.getElementById("successPopup").style.display = "block";
});

// Đóng popup khi nhấp vào nút "Back to Activity"
document.getElementById("backToActivity").addEventListener("click", function() {
  document.getElementById("successPopup").style.display = "none";
});

// Đóng popup khi nhấp vào nút "Continue with KPI"
document.getElementById("continueWithKPI").addEventListener("click", function() {
  document.getElementById("successPopup").style.display = "none";
});
document.getElementById("continueWithKPI").addEventListener("click", function() {
  window.location.href = "kpilist.html";
});
