import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import tinycolor from 'tinycolor2';
import { useColorMode } from '@chakra-ui/react';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DataPointType {
  _id: string;
  count: number;
}

export const DBStats = () => {
  const [dataPoints, setDataPoints] = useState<DataPointType[]>([]);
  const { colorMode } = useColorMode();

  const fetchDataPoints = async () => {
    const response = await axios.get('http://localhost:8000/pie_chart');
    setDataPoints(response.data);
  };

  useEffect(() => {
    fetchDataPoints();
  }, []);

  const labels = dataPoints.map((dataPoint) => dataPoint._id);

  const generateRandomColor = () => {
    const randomColor = tinycolor.random().setAlpha(0.7).toRgbString();
    return randomColor;
  };

  const data = {
    labels: labels,
    datasets: [
      {
        data: dataPoints.map((dataPoint) => dataPoint.count),
        backgroundColor: dataPoints.map(() => generateRandomColor()),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    radius: 250,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        // Customize tooltip appearance and content here
      },
    },
    layout: {
      padding: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
      },
      labels: {
        color: colorMode === 'dark' ? 'white' : 'black',
      },
    },
    // scales: {
    //   // You can customize scales if needed
    // },
  };

  return <Pie data={data} options={options} />;
};
