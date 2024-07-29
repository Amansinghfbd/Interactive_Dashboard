import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";

interface Settings {
  theme: string;
  showLineChart: boolean;
  showBarChart: boolean;
  showDataTable: boolean;
}

const defaultSettings: Settings = {
  theme: "light",
  showLineChart: true,
  showBarChart: true,
  showDataTable: true,
};

const Settings: React.FC = () => {
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedSettings = localStorage.getItem("dashboardSettings");
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
    setIsLoaded(true);
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = event.target;
    const checked = (event.target as HTMLInputElement).checked;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    localStorage.setItem("dashboardSettings", JSON.stringify(settings));
    alert("Settings saved!");
  };

  if (!isLoaded) {
    return null;
  }

  return (
    <Layout theme={settings.theme}>
      <div className={`settings-container ${settings.theme}`}>
        <div className={`settings ${settings.theme}`}>
          <h1>Settings</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="theme">Theme:</label>
              <select
                name="theme"
                id="theme"
                value={settings.theme}
                onChange={handleChange}
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="showLineChart">
                <input
                  type="checkbox"
                  id="showLineChart"
                  name="showLineChart"
                  checked={settings.showLineChart}
                  onChange={handleChange}
                />
                Show Line Chart
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="showBarChart">
                <input
                  type="checkbox"
                  id="showBarChart"
                  name="showBarChart"
                  checked={settings.showBarChart}
                  onChange={handleChange}
                />
                Show Bar Chart
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="showDataTable">
                <input
                  type="checkbox"
                  id="showDataTable"
                  name="showDataTable"
                  checked={settings.showDataTable}
                  onChange={handleChange}
                />
                Show Data Table
              </label>
            </div>
            <button type="submit">Save Settings</button>
          </form>
        </div>
        <style jsx>{`
          .settings-container {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .settings {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            background: inherit;
            max-width: 600px;
            width: 100%;
          }
          .form-group {
            margin-bottom: 15px;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
            justify-content: flex-start;
            width: 100%;
          }
          label {
            font-weight: bold;
          }
          select,
          input[type="checkbox"] {
            border-radius: 5px;
            padding: 5px;
          }
          button {
            padding: 10px 15px;
            background-color: #0070f3;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 20px;
            font-weight: bold;
          }
          button:hover {
            background-color: #005bb5;
          }
          h1 {
            margin-bottom: 20px;
          }
          .settings.dark button {
            background-color: #444;
            color: #fff;
          }
          .settings.dark button:hover {
            background-color: #555;
          }
          @media (max-width: 768px) {
            .settings {
              padding: 10px;
            }
          }
          @media (max-width: 480px) {
            .settings {
              padding: 5px;
            }
            button {
              padding: 8px 12px;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default Settings;
