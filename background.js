chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "mistralExplain",
    title: "Ask Mistral about this text",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === "mistralExplain") {
    const prompt = `Explain this text:\n\n"${info.selectionText}"`;

    try {
      const response = await fetch("http://localhost:11435/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
      });
      const text = await response.json();

      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (text) => {
          const existing = document.getElementById('mistral-tooltip');
          if (existing) existing.remove();

          const div = document.createElement('div');
          div.id = 'mistral-tooltip';
          div.textContent = text;
          div.style.position = 'fixed';
	  div.style.top = '20px';
	  div.style.right = '20px';
	  div.style.width = '350px';
	  div.style.maxHeight = '300px';
	  div.style.overflowY = 'auto'; 
	  div.style.padding = '12px';
	  div.style.background = '#f9f9f9';
	  div.style.border = '1px solid #999';
	  div.style.borderRadius = '8px';
	  div.style.fontFamily = 'sans-serif';
	  div.style.boxShadow = '0px 4px 10px rgba(0,0,0,0.15)';
	  div.style.zIndex = 99999;
	  div.style.whiteSpace = 'pre-wrap';
          div.style.whiteSpace = 'pre-wrap';
          document.body.appendChild(div);

          setTimeout(() => {
            const el = document.getElementById('mistral-tooltip');
            if (el) el.remove();
          }, 15000);
        },
        args: [text]
      });
    } catch (error) {
      console.error("❌ Error injecting tooltip:", error);
    }
  }
});
