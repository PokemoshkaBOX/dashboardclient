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

const Donat = () => {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const canvas = chartContainerRef.current;
    const ctx = canvas.getContext('2d');

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [
          `Очная`,
          'Очно-заочная',
          'Заочная'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [64.64, 62.17, 61.88],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      },
      options: {
        scales: {
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
    <div className="chartContainer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
      <div className="lineChartStyle" style={{ width: '400px', height: '100%' }}>
        <canvas ref={chartContainerRef}></canvas>
      </div>
    </div>
  );
};

export default Donat;
