document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const shortcutsList = document.getElementById('shortcutsList');

    // Fetch shortcuts from shortcuts.json
    fetch(chrome.runtime.getURL('shortcuts.json'))
        .then(response => response.json())
        .then(shortcuts => {
            for (const [shortcut, replacement] of Object.entries(shortcuts)) {
                addShortcutToList(shortcut, replacement);
            }

            // Search functionality
            searchInput.addEventListener('input', () => {
                const query = searchInput.value.toLowerCase();
                const items = shortcutsList.getElementsByTagName('li');
                Array.from(items).forEach(item => {
                    const text = item.textContent.toLowerCase();
                    item.style.display = text.includes(query) ? '' : 'none';
                });
            });
        });

    // Add shortcut to the list
    function addShortcutToList(shortcut, replacement) {
        const li = document.createElement('li');
        li.textContent = `${shortcut} -> ${replacement}`;
        shortcutsList.appendChild(li);
    }
});
