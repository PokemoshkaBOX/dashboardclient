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

const DiagD = () => {
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
          labels: ['Бак/Спец', 'Среднее'],
          datasets: [
            {
              label: 'Заявлений по уровням подготовки',
              data: [13994, 193],
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
        indexAxis: 'y',
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
    <div className="lineChartStyle" style={{ width: '100%', height: '100%'}}>
      <canvas ref={chartContainerRef} height='250px'></canvas>
    </div>
  );
};

export default DiagD;