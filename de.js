document.addEventListener('DOMContentLoaded', function () {
    // This script would dynamically fill the KPI details
    const kpiDetails = {
        name: 'Improve Project Completion Time',
        field: 'Work',
        description: 'Reducing the time taken to complete projects.',
        goal: 'Reduce project completion time by 20%',
        unit: 'Actual Time vs. Set Time',
        startDate: '2024-04-01',
        endDate: '2024-06-30',
        plans: [
            { name: 'Plan 1', importance: '30%' },
            { name: 'Plan 2', importance: '50%' },
            { name: 'Plan 3', importance: '20%' }
        ]
    };

    document.getElementById('de-kpiNameDetail').value = kpiDetails.name;
    document.getElementById('de-kpiFieldDetail').value = kpiDetails.field;
    document.getElementById('de-kpiDescriptionDetail').value = kpiDetails.description;
    document.getElementById('de-kpiGoalDetail').value = kpiDetails.goal;
    document.getElementById('de-kpiUnitDetail').value = kpiDetails.unit;
    document.getElementById('de-kpiStartDateDetail').value = kpiDetails.startDate;
    document.getElementById('de-kpiEndDateDetail').value = kpiDetails.endDate;

});

function updateStatus() {
    const statusSelect = document.getElementById('de-statusSelect');
    const progressFill = document.getElementById('de-progressFill');
    const progressText = document.getElementById('de-progressText');

    if (statusSelect.value === 'done') {
        progressFill.style.width = '100%';
        progressFill.style.backgroundColor = '#5BBFFF';
        progressText.style.color = '#FFFFFF';
        progressText.textContent = '100%';
    } else {
        progressFill.style.width = '80%';
        progressFill.style.backgroundColor = '#9C3CE7';
        progressText.textContent = '80%';
    }
}

function enableEditing() {
    // Ensure all relevant fields are enabled
    document.getElementById('de-kpiNameDetail').disabled = false;
    document.getElementById('de-kpiGoalDetail').disabled = false;
    document.getElementById('de-kpiDescriptionDetail').disabled = false;
    document.getElementById('de-kpiStartDateDetail').disabled = false;
    document.getElementById('de-kpiEndDateDetail').disabled = false;
    document.getElementById('de-kpiUnitDetail').disabled = false;
    document.getElementById('de-kpiFieldDetail').disabled = false;
    document.getElementById('de-kpiFieldDetail').addEventListener('change', function() {
        if (this.value === 'Custom') {
            document.getElementById('de-kpiFieldCustom').style.display = 'inline-block';
        } else {
            document.getElementById('de-kpiFieldCustom').style.display = 'none';
        }
    });
    const planPercentageInputs = document.querySelectorAll('.de-plan-percentage-input');
    planPercentageInputs.forEach(input => {
        input.disabled = false;
    });
}

function addMorePlans() {
    const additionalPlans = document.getElementById('de-additionalPlans');
    const plansData = [
        { title: 'Plan 4', importance: '%' },
        { title: 'Plan 5', importance: '%' },
        { title: 'Plan 6', importance: '%' },
        { title: 'Plan 7', importance: '%' },
        { title: 'Plan 8', importance: '%' },
        { title: 'Plan 9', importance: '%' },
        { title: 'Plan 10', importance: '%' }
    ];

    additionalPlans.innerHTML = '';  // Clear existing content

    plansData.forEach(plan => {
        const newPlanCard = document.createElement('div');
        newPlanCard.className = 'de-plan-card';
        newPlanCard.innerHTML = `
            <div class="de-plan-info">
                <h3>${plan.title}</h3>
                <a href="#" class="de-plan-details">See plan details</a>
            </div>
            <div class="de-plan-percentage">
                <label><strong>% Importance:</strong>
                    <input type="text" value="${plan.importance}" class="de-plan-percentage-input">
                </label>
            </div>
            <input type="checkbox" class="de-plan-checkbox" onclick="movePlan(this)">
        `;
        additionalPlans.appendChild(newPlanCard);
        newPlanCard.style.display = 'flex';
    });
}

function movePlan(checkbox) {
    const planCard = checkbox.parentElement;
    if (checkbox.checked) {
        planCard.style.display = 'flex';
        document.querySelector('.de-add-more-plans').before(planCard);
    }
}

function saveKPIDetails() {
    alert('KPI details saved successfully!');
}

function deleteKPIDetails() {
    if (confirm('Are you sure you want to delete this KPI?')) {
        alert('KPI deleted successfully!');
    }
}
