import React, { useEffect, useRef } from 'react';
import 'chart.js/auto';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { BarElement, CategoryScale, Legend, LinearScale, Tooltip } from 'chart.js';

Chart.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ChartDataLabels
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
        labels: ['Туркмения', 'Украина', 'Таджикистан', 'Узбекистан', 'Казахстан', 'Камерун', 'Китай'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [4, 16, 12, 12, 20, 4, 4],
            backgroundColor: generateRandomColors(7),
            hoverOffset: 4,
          },
        ],
      },
      options: {
        layout: {
        padding: {
          left: 0,
          right: 100, // Установите нужный отступ справа
          top: 0,
          bottom: 0
        }
        },
        plugins: {
          legend: {
            position: 'left',
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return context.label + ': ' + context.formattedValue + '%';
              },
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
  const generateRandomColors = (numColors) => {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
      const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, 0.6)`;
      colors.push(color);
    }
    return colors;
  };

  return (
    <div className="chartContainer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
      <div className="lineChartStyle" style={{ width: '600px', height: '100%' }}>
        <canvas ref={chartContainerRef}></canvas>
      </div>
    </div>
  );
};

export default Donat;
