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

const DiagE = () => {
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
        labels: ['2024 г. август 1', '2024 г. август 2', '2024 г. август 3', '2024 г. август 4', '2024 г. август 5', '2024 г. август 6', '2024 г. август 7', '2024 г. август 8',],
        datasets: [{
          label: 'Зачисленно по институтам',
          data: [196, 351, 352, 166, 8, 66, 803, 70],
          borderWidth: 1,
        }],
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
    <div className="lineChartStyle" style={{ width: '100%', height: '100%' }}>
      <canvas ref={chartContainerRef}></canvas>
    </div>
  );
};

export default DiagE;
