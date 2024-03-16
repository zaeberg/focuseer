const blackList = ["twitter.com", "youtube.com", "facebook.com", "dtf.ru"];
const whiteList = ["https://google.com"];

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (!changeInfo.url) return;

  const host = new URL(changeInfo.url).host;

  if (blackList.includes(host)) {
    const newUrl = whiteList[0];
    chrome.tabs.update(tabId, { url: newUrl });
  }
});

