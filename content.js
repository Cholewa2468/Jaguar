async function loadShortcuts() {
    const response = await fetch(chrome.runtime.getURL("shortcuts.json"));
    const shortcuts = await response.json();
    return shortcuts;
}

loadShortcuts().then((shortcuts) => {
    document.addEventListener("input", (event) => {
        const target = event.target;

        // Sprawdź, czy to pole tekstowe Jira
        if (target.tagName === "TEXTAREA" || 
            (target.tagName === "INPUT" && target.type === "text") ||
            target.classList.contains("jira-wikifield") || // Dodaj specyficzną klasę Jira
            target.classList.contains("ProseMirror")) { // Inny przykład pola w Jira
            
            const text = target.value || target.innerText; // Obsługa pól z innerText
            Object.keys(shortcuts).forEach(shortcut => {
                if (text.endsWith(shortcut)) {
                    if (target.value !== undefined) {
                        target.value = text.replace(shortcut, shortcuts[shortcut]); // Dla input/textarea
                    } else {
                        target.innerText = text.replace(shortcut, shortcuts[shortcut]); // Dla ProseMirror
                    }
                }
            });
        }
    });
});

