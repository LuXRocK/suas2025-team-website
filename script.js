document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.mobile-nav');
    const searchToggle = document.getElementById('search-toggle');
    const searchContainer = document.getElementById('search-container');

    // Mobile menu toggle
    toggleButton?.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    // Search bar toggle
    searchToggle?.addEventListener('click', () => {
        if (searchContainer.style.display === 'none') {
            searchContainer.style.display = 'block';
            searchToggle.style.display = 'none';
        } else {
            searchContainer.style.display = 'none';
            searchToggle.disabled = false;
        }
    });
});
