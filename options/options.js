document.addEventListener("DOMContentLoaded", function() {
    chrome.storage.sync.get({"enabled": true}, function(data) {
        if (data.enabled) {
            document.getElementById("enable-gossipaid").style.display = "none";
            document.getElementById("disable-gossipaid").style.display = "inline-block";
        } else {
            document.getElementById("enable-gossipaid").style.display = "inline-block";
            document.getElementById("disable-gossipaid").style.display = "none";
        }
    });
});

document.getElementById("enable-gossipaid").addEventListener("click", function() {
    chrome.storage.sync.set({enabled: true});
    document.getElementById("enable-gossipaid").style.display = "none";
    document.getElementById("disable-gossipaid").style.display = "inline-block";
})

document.getElementById("disable-gossipaid").addEventListener("click", function() {
    chrome.storage.sync.set({enabled: false});
    document.getElementById("enable-gossipaid").style.display = "inline-block";
    document.getElementById("disable-gossipaid").style.display = "none";
})

document.getElementById('open-homepage').addEventListener('click', () => {
    chrome.tabs.create({url: 'https://github.com/gaogaotiantian/gossipaid'});
});
