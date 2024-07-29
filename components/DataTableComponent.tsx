import React from "react";

const data = [
  { name: "John", age: 28, city: "New York" },
  { name: "Jane", age: 22, city: "Los Angeles" },
  { name: "Mike", age: 32, city: "Chicago" },
  { name: "Sara", age: 24, city: "San Francisco" },
  { name: "Tom", age: 30, city: "Houston" },
  { name: "Anna", age: 27, city: "Miami" },
];

const DataTable: React.FC = () => (
  <div>
    <h2>Data Table</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <style jsx>{`
      table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        border-radius: 10px;
        overflow: hidden;
      }
      th,
      td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: center;
      }
      th {
        background-color: inherit;
      }
      tbody tr:last-child td:first-child {
        border-bottom-left-radius: 10px;
      }
      tbody tr:last-child td:last-child {
        border-bottom-right-radius: 10px;
      }
      h2 {
        text-align: center;
        margin-bottom: 25px;
      }
    `}</style>
  </div>
);

export default DataTable;
