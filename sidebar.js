document.addEventListener('DOMContentLoaded', function () {
    var menuItems = document.querySelectorAll('.sidebar-menu > li > a');
    var submenuItems = document.querySelectorAll('.submenu > li > a');
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

});