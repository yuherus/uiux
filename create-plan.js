document.addEventListener("DOMContentLoaded", function() {
    var createPlanButton = document.querySelector('.submit-btn');
    var toast = document.getElementById('toast');

    createPlanButton.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của form

        // Hiển thị toast và sau đó chuyển hướng trang
        showToastAndRedirect();
    });

    function showToastAndRedirect() {
        // Hiển thị toast
        toast.classList.add('show');
        
        // Chờ 2 giây trước khi chuyển hướng trang
        setTimeout(function() {
            // Ẩn toast
            toast.classList.remove('show');
            
            // Chuyển hướng về trang plan.html
            window.location.href = "plan.html";
        }, 2000); 
    }
});
