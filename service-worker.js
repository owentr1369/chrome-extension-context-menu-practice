chrome.contextMenus.create({
  id: "foo",
  title: "Click me",
  contexts: ["action"],
});

function contextClick(info, tab) {
  const { menuItemId } = info;

  console.log(menuItemId);
  if (menuItemId === "foo") {
    // do something
    console.log("Clicked from context menu");
  }
}

chrome.contextMenus.onClicked.addListener(contextClick);
