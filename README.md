# 🧠 Mistral Chrome Extension

A lightweight Chrome extension that lets you highlight text on any webpage, send it to a **locally running Mistral model** (via Ollama), and view the response as a tooltip — all without the cloud. Fast, private, and offline.

---

## 🛠️ Prerequisites

This project assumes you're using **Windows, macOS, or Linux** with basic Python and Git knowledge.

### ✅ Tools You Need:

- [Ollama](https://ollama.com) (to run Mistral locally)
- Python 3.8+ (to run the local API server)
- Chrome (or Edge, Brave, etc.)
- Git

---

## 🚀 Step 1: Install Ollama and Mistral Model

### 1. Install Ollama

Visit: [https://ollama.com/download](https://ollama.com/download)

Or use the command below on macOS/Linux:

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

On Windows, just run the `.exe` installer.

### 2. Pull the Mistral Model

Open a terminal and run:

```bash
ollama run mistral
```

This will:

- Download the Mistral 7B model (~4GB)
- Launch an interactive local chat
- Start a local inference server at `http://localhost:11434`

Leave this terminal **running**.

## 🧠 Step 2: Run the Local Mistral API Server (Flask)

### 1. Clone this repo

```bash
git clone https://github.com/kcho2027/Mistral-Extension.git
cd Mistral-Extension
```

### 2. Install Python dependencies

```bash
pip install flask requests
```

### 3. Run the local server

```bash
python mistral_server.py
```

This exposes a helper API at:

```
http://localhost:11435/ask
```

Leave this terminal running too.

## 🌐 Step 3: Load the Chrome Extension

### 1. Open Chrome and go to:

```
chrome://extensions
```

### 2. Enable Developer Mode (top right)

### 3. Click **"Load Unpacked"**

Select the `Mistral-Extension` folder containing:

- `manifest.json`
- `background.js`
- `icon.png`

You should now see the extension installed.

## 🧪 How to Use

1. Open **any webpage**.
2. Highlight some text.
3. Right-click → select **"Ask Mistral about this text"**.
4. The tooltip will appear in the top-right corner with Mistral's response.

🖱️ The response box supports **scrolling** and auto-disappears after 15 seconds.

## 📂 Folder Structure

```
Mistral-Extension/
├── manifest.json    # Chrome extension config
├── background.js    # Extension logic & tooltip injection
├── icon.png         # Extension icon
├── mistral_server.py # Flask API server that connects to Ollama
└── README.md        # You're reading this
```

## ✅ Features

- ✅ Completely **local** and **offline**
- ✅ Uses the powerful **Mistral 7B** model
- ✅ Runs via Ollama
- ✅ No external API keys or OpenAI account needed
- ✅ Auto-injected **scrollable response box**
- ✅ Supports any Chromium browser

## 🔒 Privacy

All your text, prompts, and model responses stay **on your device** — nothing is sent to any cloud service. Perfect for private research and local AI tooling.

## 🧩 Coming Soon Ideas

- Show response near cursor instead of top-right
- Keep chat history per session
- Add keyboard shortcut (e.g. Ctrl+M) to trigger prompt
- Add a dismiss (X) button to tooltip
- Automatically resize response box for long outputs
- Add multi-model support via Ollama (`mistral`, `llama2`, etc.)

## 🙌 Author

Created by Kyoungbin Cho
Pull requests, ideas, and contributions welcome!


## 📜 License

MIT License. Free for personal or commercial use.

---

Let me know if you want help formatting this as a GitHub Pages page, generating preview badges, or adding images!
