
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        chrome.windows.getCurrent(function (currentWindow) {
            chrome.tabs.query({ active: true, windowId: currentWindow.id }, function (activeTabs) {
                activeTabs.map(function (tab) {
                    chrome.tabs.executeScript(tab.id, { file: 'content_script.js', allFrames: false });
                });
            });
        });
      
    //   if (request.greeting == "hello")
        sendResponse();
    }
  );