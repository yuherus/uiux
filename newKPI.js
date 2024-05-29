document.addEventListener('DOMContentLoaded', function () {
    const formSteps = document.querySelectorAll('.form-step');
    const nextButtons = document.querySelectorAll('.btn-next');
    const prevButtons = document.querySelectorAll('.btn-prev');
    const submitButton = document.querySelector('.btn-submit');
    const modal = document.getElementById('confirmModal');
    const confirmButton = document.querySelector('.btn-confirm');
    const cancelButton = document.querySelector('.btn-cancel');
    const kpiField = document.getElementById('kpiField');
    const customFieldContainer = document.getElementById('customFieldContainer');

    let currentStep = 0;

    function updateFormSteps() {
        formSteps.forEach((formStep, index) => {
            formStep.classList.toggle('form-step-active', index === currentStep);
        });

        document.querySelectorAll('.step').forEach((step, index) => {
            step.querySelector('.step-number').classList.toggle('active', index <= currentStep);
            step.classList.toggle('active', index === currentStep);
        });
    }

    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentStep++;
            updateFormSteps();
        });
    });

    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentStep--;
            updateFormSteps();
        });
    });

    submitButton.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    confirmButton.addEventListener('click', () => {
        // Handle form submission here
        modal.style.display = 'none';
        alert('KPI created successfully!');
    });

    cancelButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    kpiField.addEventListener('change', function () {
        if (this.value === 'custom') {
            customFieldContainer.style.display = 'block';
        } else {
            customFieldContainer.style.display = 'none';
        }
    });
});
