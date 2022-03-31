/*
 * Script to collapse irrelevant menus in the sidebar.
 */
window.addEventListener('DOMContentLoaded', () => {
    /*
     * Hide elements in the sidebar that is unrelated to the currently shown page (marked with class name "active").
     */
    let activeListItem = document.querySelector('.sidebar-nav .active');
    if (activeListItem) {
        activeListItem.querySelector(':scope > ul') ? activeListItem.querySelector(':scope > ul').style.display = 'block' : null;

        // Traverse updwards from the active list and reveal the lists
        while (activeListItem.parentNode && activeListItem.parentNode.classList.contains('sidebar-nav') === false) {
            activeListItem = activeListItem.parentNode;
            if (activeListItem.tagName = 'li') {
                activeListItem.classList.add('visible');
            }
        }
    } else {
        document.querySelector('.sidebar-nav > li > ul').style.display = 'block';
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
