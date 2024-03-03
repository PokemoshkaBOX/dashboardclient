import React, { useEffect, useRef } from 'react';
import 'chart.js/auto';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from 'chart.js';

Chart.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
);

const ChartD = () => {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const canvas = chartContainerRef.current;
    const ctx = canvas.getContext('2d');

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Целевой приём', 'Полное возмещение затрат', 'Бэджетная основа'],
        datasets: [
          {
            label: '2022',
            data: [1904, 2705, 175],
            backgroundColor: 'rgb(255, 99, 132)', // Цвет для 2022 года
            borderWidth: 1,
          },
          {
            label: '2021',
            data: [1690, 2343, 164],
            backgroundColor: 'rgb(54, 162, 235)', // Цвет для 2023 года
            borderWidth: 1,
          },
          {
            label: '2020',
            data: [1408, 2159, 109],
            backgroundColor: 'rgb(255, 205, 86)', // Цвет для 2024 года
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          zoom: {
            pan: {
              enabled: true,
              mode: 'xy',
            },
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true,
              },
              mode: 'xy',
            },
          },
        },
      },
    });

    const resizeHandler = () => {
      chartRef.current.resize();
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <div className="lineChartStyle" style={{ width: '100%', height: '450px'}}>
      <canvas ref={chartContainerRef}></canvas>
    </div>
  );
};

export default ChartD;
