import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
let { chrome } = window;
function App() {
  useEffect(() => {
    chrome.runtime.onMessage.addListener(function (req, sender) {
      chrome.storage.local.set({ 'address': req.address })
      chrome.pageAction.show(sender.tab.id);
      chrome.pageAction.setTitle({ tabId: sender.tab.id, title: req.address });
    });
  }, [])
  return (
    <div className="App">
      <p>HEKKO</p>
    </div>
  );
}

export default App;
