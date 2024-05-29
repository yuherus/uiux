document.addEventListener('DOMContentLoaded', function() {
    const createActivityBtn = document.getElementById('save-btn');

    createActivityBtn.addEventListener('click', function() {
        alert("successful! You've created an activity");
        setTimeout(function() {
            window.location.href = 'activitylist.html';
        }, 3000); // 3 seconds
    });

    // Initialize DatePicker
    flatpickr("#beginDate", {
        enableTime: false,
        dateFormat: "d/m/Y",
        onClose: function(selectedDates, dateStr, instance) {
            document.getElementById("beginDate").innerText = "Begin: " + dateStr;
        }
    });

    flatpickr("#endDate", {
        enableTime: false,
        dateFormat: "d/m/Y",
        onClose: function(selectedDates, dateStr, instance) {
            document.getElementById("endDate").innerText = "End: " + dateStr;
        }
    });

    // Create the Contribution Chart
    const ctx1 = document.getElementById('contributionChart').getContext('2d');
    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April'],
            datasets: [{
                label: 'Contributions',
                data: [12, 19, 3, 5],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Create the Progress Chart
    const ctx2 = document.getElementById('progressChart').getContext('2d');
    new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Progress',
                data: [65, 59, 80, 81],
                fill: false,
                borderColor: 'rgba(153, 102, 255, 1)',
                tension: 0.1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
