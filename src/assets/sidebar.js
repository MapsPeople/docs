/*
 * Script to collapse irrelevant menus in the sidebar.
 */
window.addEventListener('DOMContentLoaded', () => {
    /*
     * Hide lists in the sidebar that are unrelated to the currently shown page (marked with class name "active").
     */
    let activeList = document.querySelector('.sidebar-nav .active');
    if (activeList) {
        // Traverse upwards from the active list and reveal the lists
        while (activeList.parentNode && activeList.parentNode.classList.contains('sidebar-nav') === false) {
            activeList = activeList.parentNode;
            if (activeList.tagName = 'li') {
                activeList.classList.add('visible');
            }
        }
    } else {
        // In case no list is active, set the first one as visible
        document.querySelector('.sidebar-nav > li:first-child > ul').style.display = 'block';
    }

    /*
     * Decorate menu items that have children with an indicator
     */
    const collapsibleMenuItems = document.querySelectorAll('.sidebar-nav a + ul');
    collapsibleMenuItems.forEach(node => {
        if (node.previousElementSibling && node.previousElementSibling.tagName.toLowerCase() === 'a') {
            node.previousElementSibling.insertAdjacentHTML('beforeend', ' &raquo;');
        }
    });
});
