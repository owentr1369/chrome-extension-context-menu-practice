searchTerapeak = function () {
  console.log("Triggered");
};

chrome.contextMenus.removeAll(function () {
  chrome.contextMenus.create({
    id: "1",
    title: "Sync data from buff 163",
    contexts: ["all"], // ContextType
  });
});

chrome.contextMenus.onClicked.addListener(searchTerapeak);
