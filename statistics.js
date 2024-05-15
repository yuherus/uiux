const ctxMonthlyStats = document.getElementById('monthlyStats').getContext('2d');
const ctxExpectedRealityChart = document.getElementById('expectedRealityChart').getContext('2d');

const monthlyStats = new Chart(ctxMonthlyStats, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Completed',
                data: [120, 150, 180, 200, 220, 240, 250, 260, 270, 280, 290, 300],
                borderColor: '#6c63ff',
                fill: false
            },
            {
                label: 'Late',
                data: [80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
                borderColor: '#ff6384',
                fill: false
            },
            {
                label: 'Undue',
                data: [60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170],
                borderColor: '#4bc0c0',
                fill: false
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

const expectedRealityChart = new Chart(ctxExpectedRealityChart, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Expected',
                data: [1135, 1200, 1300, 1250, 1400],
                backgroundColor: '#6c63ff'
            },
            {
                label: 'Reality',
                data: [635, 700, 800, 750, 900],
                backgroundColor: '#ff6384'
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

document.getElementById('exportBtn').addEventListener('click', () => {
    const data = {
        statistics: {
            completedTasks: 3,
            totalHours: 12.5,
            incompleteTasks: 15,
            newTasks: 8
        },
        topActivity: [
            { name: "Home Decor Range", progress: 45 },
            { name: "Disney Princess Pink Bag 18'", progress: 29 },
            { name: "Bathroom Essentials", progress: 18 },
            { name: "Apple Smartwatches", progress: 25 }
        ]
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    saveAs(blob, 'dashboard-data.json');
});