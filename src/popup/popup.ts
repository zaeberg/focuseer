async function bootstrap() {
  const currentTab = await getCurrentTab();
  console.log(currentTab);
  // document.getElementById('title').textContent = currentTab.title;
  // document.getElementById('favicon').src = '';
}

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

window.addEventListener('DOMContentLoaded', () => {
  bootstrap();
});
