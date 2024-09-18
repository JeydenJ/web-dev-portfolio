document.addEventListener("DOMContentLoaded", () => {
    const headerSelector = 'header';
    const headerUrl = 'header.html';
    const pageTitles = {
        'index.html': 'Hi, I am Jeyden Johnson.<br>I do Web Development.',
        'evaheld.html': 'Evaheld',
        'cirqus.html': 'CirQuS Project',
        'sbprealty.html': 'Sydney Boutique Property',
        'flashcardGO.html': 'FlashCardGO Design Project',
        'contact.html': 'Contact Me'
    };

    // Load and update header content
    const loadHeaderContent = async () => {
        try {
            const response = await fetch(headerUrl);
            if (!response.ok) throw new Error('Network response was not ok.');
            const data = await response.text();
            document.querySelector(headerSelector).innerHTML = data;

            // Set page-specific title
            updateHeaderTitle();
        } catch (error) {
            console.error('Error loading header:', error);
        }
    };

    // Update header title based on the current page
    const updateHeaderTitle = () => {
        const currentPage = window.location.pathname.split('/').pop();
        const headerTitle = document.querySelector('.header-title h1');
        if (headerTitle) {
            headerTitle.innerHTML = pageTitles[currentPage] || 'Default Title';
        } else {
            console.error('Header title element not found.');
        }
    };

    // Initialize
    loadHeaderContent();
});
