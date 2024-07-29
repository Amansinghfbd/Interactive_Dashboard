import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
  { name: "May", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Aug", uv: 3000, pv: 2400, amt: 2400 },
  { name: "Sep", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Oct", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Nov", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Dec", uv: 3490, pv: 4300, amt: 2100 },
];

const LineChartComponent: React.FC = () => (
  <div>
    <h2>Line Chart</h2>
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
    <style jsx>{`
      h2 {
        text-align: center;
        font-size: 1.5rem;
        margin-bottom: 20px;
      }
      @media (max-width: 768px) {
        h2 {
          font-size: 1.25rem;
        }
      }
      @media (max-width: 480px) {
        h2 {
          font-size: 1rem;
        }
      }
    `}</style>
  </div>
);

export default LineChartComponent;
