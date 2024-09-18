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

    const loadHeaderContent = async () => {
        try {
            const response = await fetch(headerUrl);
            if (!response.ok) throw new Error('Network response was not ok.');
            const data = await response.text();
            document.querySelector(headerSelector).innerHTML = data;

            updateHeaderTitle();
        } catch (error) {
            console.error('Error loading header:', error);
        }
    };

    const updateHeaderTitle = () => {
        const currentPage = window.location.pathname.split('/').pop();
        const headerTitle = document.querySelector('.header-title h1');
        if (headerTitle) {
            headerTitle.innerHTML = pageTitles[currentPage] || 'Hi, I am Jeyden Johnson.<br>I do Web Development.';
        } else {
            console.error('Header title element not found.');
        }
    };
    loadHeaderContent();
});
