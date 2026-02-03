(function() {
    // 1. Immediate execution to apply theme before DOM is ready
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }

    // 2. Setup toggle button when DOM is ready
    window.addEventListener('DOMContentLoaded', () => {
        let toggleBtn = document.getElementById('theme-toggle');
        const body = document.body;

        // If button doesn't exist, try to find a place to inject it
        if (!toggleBtn) {
            toggleBtn = document.createElement('button');
            toggleBtn.id = 'theme-toggle';
            toggleBtn.className = 'theme-toggle';
            toggleBtn.setAttribute('aria-label', 'Toggle Theme');

            // Find a suitable container
            const container = document.querySelector('.top-bar, .nav-bar, .nav-container, .back-nav, header, .container, .app-container, .sidebar') || body;

            // Try to find a back link to insert after/before
            const backLink = container.querySelector('.back-link, .back-nav');
            if (backLink) {
                backLink.parentNode.insertBefore(toggleBtn, backLink.nextSibling);
            } else if (container !== body) {
                container.appendChild(toggleBtn);
            } else {
                // Last resort: fixed position
                toggleBtn.style.position = 'fixed';
                toggleBtn.style.top = '20px';
                toggleBtn.style.right = '20px';
                toggleBtn.style.zIndex = '1000';
                body.appendChild(toggleBtn);
            }
        }

        // Initialize button text
        updateBtnText(toggleBtn, body.classList.contains('light-mode'));

        // Add event listener
        toggleBtn.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            const isLight = body.classList.contains('light-mode');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            updateBtnText(toggleBtn, isLight);
        });
    });

    function updateBtnText(btn, isLight) {
        btn.innerHTML = isLight ? '<span>🌙</span> Dark Mode' : '<span>☀️</span> Light Mode';
    }
})();
