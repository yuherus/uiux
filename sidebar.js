document.addEventListener('DOMContentLoaded', function () {
    var menuItems = document.querySelectorAll('.sidebar-menu > li > a');
    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener('click', function (e) {
            var icons = menuItem.querySelector('.chevron-icon');
            var submenu = menuItem.nextElementSibling;

            if (submenu && submenu.classList.contains('submenu')) {
                e.preventDefault();
                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            }
            if (icons) {
                icons.style.transform = icons.style.transform === 'rotate(90deg)' ? 'rotate(0deg)' : 'rotate(90deg)';
            }
        });      
    });
    var selectedSubmenu = document.querySelector('.submenu > li > a.menu-active');
    if (selectedSubmenu) {
        var submenu = selectedSubmenu.closest('.submenu');
        var menuItem = submenu.previousElementSibling;
        menuItem.style.color = '#6c63ff';
        var icons = menuItem.querySelector('.chevron-icon');
        if (submenu && submenu.classList.contains('submenu')) {
            submenu.style.display = 'block';
        }
        if (icons) {
            icons.style.transform = 'rotate(90deg)';
        }
    }
});