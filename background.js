chrome.browserAction.onClicked.addListener(function () {
    chrome.bookmarks.getChildren("2", function (nodes) {
        nodes = nodes.filter(node => node.title.includes("unread"))
        chrome.tabs.create({ "url": nodes[Math.floor(Math.random() * nodes.length)].url });
    });
});
