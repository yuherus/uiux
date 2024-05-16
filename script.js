document.addEventListener('DOMContentLoaded', function () {
    const deleteBtn = document.getElementById('delete-btn');
    const confirmDialog = document.getElementById('confirm-dialog');
    const closeBtn = document.querySelector('.close');
    const confirmDeleteBtn = document.getElementById('confirm-delete');
    const cancelDeleteBtn = document.getElementById('cancel-delete');

    deleteBtn.addEventListener('click', function () {
        confirmDialog.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        confirmDialog.style.display = 'none';
    });

    cancelDeleteBtn.addEventListener('click', function () {
        confirmDialog.style.display = 'none';
    });

    confirmDeleteBtn.addEventListener('click', function () {
        // Handle the delete action here
        // alert('Deleted!');
        window.location.href = 'http://127.0.0.1:5500/activitylist_1.html';
        confirmDialog.style.display = 'none';
    });

    // Close the modal when clicking outside of it
    window.addEventListener('click', function (event) {
        if (event.target === confirmDialog) {
            confirmDialog.style.display = 'none';
        }
    });
});
