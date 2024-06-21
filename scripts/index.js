function createPopup(data, style) {
    clearPopup();
    let popup = document.createElement("div");
    popup.id = "gossipaid-popup";
    Object.assign(popup.style, style);
    for (const name of data) {
        popup.innerHTML += `<p>${name}</p>`;
    }
    document.body.appendChild(popup);
}

function clearPopup() {
    let popup = document.getElementById("gossipaid-popup");
    if (popup) {
        popup.remove();
    }
}

function getStyle(element, rect) {
    const padding = 5;
    return {
        position: "fixed",
        zIndex: 1000,
        top: rect.bottom + "px",
        left: rect.left - padding + "px",
        backgroundColor: "white",
        padding: padding + "px",
        borderRadius: "5px",
        fontFamily: window.getComputedStyle(element).getPropertyValue("font-family"),
        fontSize: window.getComputedStyle(element).getPropertyValue("font-size"),
    };
}

function selectionCallback() {
    const selection = window.getSelection();
    const text = selection.toString().toLowerCase().trim();

    if (text.length > 0 && text in nameDB) {
        const rect = selection.getRangeAt(0).getBoundingClientRect();
        const element = selection.focusNode.parentElement;
        createPopup(nameDB[text], getStyle(element, rect));
    } else {
        clearPopup();
    }
}

window.addEventListener("load", function() {
    chrome.storage.sync.get({"enabled": true}, function(data) {
        if (data.enabled) {
            this.document.addEventListener("dblclick", selectionCallback);
            this.document.addEventListener("mouseup", selectionCallback);
            this.document.addEventListener("scroll", clearPopup);
        }
    });
})