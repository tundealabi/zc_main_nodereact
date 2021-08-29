
import { PluginContent } from './components/PluginContent';
import { Sidebar } from './components/Sidebar';
import { Topbar } from './components/Topbar';
import styles from './styles/Home.module.css';
import React, { useState } from 'react';

export const URLContext = React.createContext(null);

export default function App() {
  const [url, setUrl] = useState("https://api.zuri.chat");

  return (
    <div className={styles.container}>
      <URLContext.Provider value={{ setUrl, url }}>
        <Sidebar />
        <div className={styles.room}>
          <Topbar />
          <div className={styles.pluginContent}>
            <PluginContent />
          </div>
        </div>
      </URLContext.Provider>
    </div>
  );
}

