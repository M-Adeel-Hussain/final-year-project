import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "../css/wbarGraph.css"; // Import the CSS file

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const WBarGraph = () => {
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem("activeTab") || "Time";
  });

  // Update localStorage whenever activeTab changes
  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);
  // Graph labels
  const labels = [
    "Mon, 01",
    "Tue, 02",
    "Wed, 03",
    "Thu, 04",
    "Fri, 05",
    "Sat, 06",
    "Sun, 07",
  ];

  // Data for Time and Amount
  const timeData = [2.18, 2, 1.88, 2.48, 4, 1.18, 3]; // Working hours
  const amountData = [1.18, 2, 1.88, 2.48, 4, 1.18, 3]; // Earnings in dollars

  // Data configuration based on the active tab
  const data = {
    labels,
    datasets: [
      {
        label: activeTab === "Time" ? "Time (hrs)" : "Amount ($)",
        data: activeTab === "Time" ? timeData : amountData,
        backgroundColor:
          activeTab === "Time"
            ? "rgba(75, 192, 192, 0.6)"
            : "rgba(54, 162, 235, 0.6)",
        borderColor:
          activeTab === "Time"
            ? "rgba(75, 192, 192, 1)"
            : "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Graph options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true }, // Disable tooltip to avoid overlap with custom labels
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: activeTab === "Time" ? "Hours" : "Amount ($)",
        },
      },
      x: {
        grid: { display: false },
        ticks: { color: "#333" },
      },
    },
  };

  // Values above bars
  const customLabels = activeTab === "Time" ? timeData : amountData;

  return (
    <div className="graph-container">
      {/* Tabs */}
      <div className="gctabs">
        <button
          className={`gtab ${activeTab === "Time" ? "gactiv" : ""}`}
          onClick={() => setActiveTab("Time")}
        >
          Show Time
        </button>
        <button
          className={`gtab ${activeTab === "Amount" ? "gactiv" : ""}`}
          onClick={() => setActiveTab("Amount")}
        >
          Show Amount
        </button>
      </div>

      {/* Bar Graph */}
      <div className="chart-container">
        <div className="bar-values">
          {labels.map((_, index) => (
            <div
              key={index}
              className="bar-value"
              style={{
                left: `${(index + 0.5) * (100 / labels.length)}%`, // Dynamically position values
              }}
            >
              {activeTab === "Time"
                ? `${customLabels[index]} hrs`
                : `$${customLabels[index]}`}
            </div>
          ))}
        </div>

        <Bar data={data} options={options} height={280} />
      </div>
    </div>
  );
};

export default WBarGraph;
