import React, { useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Forecasting = () => {
  const [site, setSite] = useState("");
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSiteChange = (event) => {
    setSite(event.target.value);
  };

  const fetchForecast = async () => {
    if (!site) {
      alert("Please select a site.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/forcast", {
        site_name: site,
      });
      console.log(response.data.predictions);
      setPredictions(response.data.predictions);
    } catch (error) {
      console.log("Error fetching forecast:", error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  const chartData = {
    labels: predictions.map((_, index) => `Hour ${index + 1}`), // Customize labels as needed
    datasets: [
      {
        label: "Energy Forecast (kWh)",
        data: predictions,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      title: {
        display: true,
        text: "Energy Consumption Forecast",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time (Hours)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Energy Consumption (kWh)",
        },
      },
    },
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Energy Consumption Forecast</h1>

      <div className="mb-4">
        <label htmlFor="site" className="block mb-2">
          Select Site:
        </label>
        <select
          id="site"
          value={site}
          onChange={handleSiteChange}
          className="p-2 border rounded"
        >
          <option value="">-- Choose a Site --</option>
          <option value="s1">Site 1</option>
          <option value="s2">Site 2</option>
          <option value="s3">Site 3</option>
          <option value="s4">Site 4</option>
          <option value="s5">Site 5</option>
          <option value="s6">Site 6</option>
          <option value="s7">Site 7</option>
          <option value="s8">Site 8</option>
          <option value="s9">Site 9</option>
          <option value="s10">Site 10</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <button
        onClick={fetchForecast}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? "Loading..." : "Fetch Forecast"}
      </button>

      {predictions.length > 0 && (
        <div className="mt-6">
          <Line data={chartData} options={chartOptions} />
        </div>
      )}
    </div>
  );
};

export default Forecasting;
