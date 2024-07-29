import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { NextPage } from "next";
import Layout from "../components/Layout";

const LineChart = dynamic(() => import("../components/LineChartComponent"), {
  ssr: false,
});
const BarChart = dynamic(() => import("../components/BarChartComponent"), {
  ssr: false,
});
const DataTable = dynamic(() => import("../components/DataTableComponent"), {
  ssr: false,
});

interface DashboardSettings {
  theme: string;
  showLineChart: boolean;
  showBarChart: boolean;
  showDataTable: boolean;
}

const defaultSettings: DashboardSettings = {
  theme: "light",
  showLineChart: true,
  showBarChart: true,
  showDataTable: true,
};

const Dashboard: NextPage = () => {
  const [settings, setSettings] = useState<DashboardSettings>(defaultSettings);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedSettings = localStorage.getItem("dashboardSettings");
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return null;
  }

  const activeWidgets = [
    settings.showLineChart,
    settings.showBarChart,
    settings.showDataTable,
  ].filter(Boolean).length;

  return (
    <Layout theme={settings.theme}>
      <div className={`dashboard ${settings.theme}`}>
        <h1>Dashboard</h1>
        <div className={`widgets widgets-${activeWidgets}`}>
          {settings.showLineChart && <LineChart />}
          {settings.showBarChart && <BarChart />}
          {settings.showDataTable && <DataTable />}
        </div>
        <style jsx>{`
          .dashboard {
            padding: 20px;
            min-height: 100vh; /* Change height to min-height to allow scrolling */
            box-sizing: border-box;
          }
          .widgets {
            display: grid;
            grid-gap: 20px;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
          .dashboard.light {
            background-color: #fff;
            color: #000;
          }
          .dashboard.dark {
            background-color: #222;
            color: #fff;
          }
          h1 {
            font-size: 2.5rem;
            margin-bottom: 20px;
          }
          @media (max-width: 768px) {
            h1 {
              font-size: 1.5rem;
            }
          }
          @media (max-width: 480px) {
            h1 {
              font-size: 1.25rem;
            }
            .widgets {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default Dashboard;
