import React, {useState} from 'react';
import {Chart} from 'primereact/chart';

export default function Detail() {
    const [chartData] = useState({
        labels: ['HP', 'Att.SPE', 'Def.SPE', 'Speed', 'Def', 'Att'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: [65, 59, 90, 81, 56, 55]
            },
            {
                label: 'My Second dataset',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: [28, 48, 40, 19, 96, 27]
            }
        ]
    });

    // add intersect option to show the tooltip when the mouse is over the chart
    const [lightOptions] = useState({
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            },
            tooltip: {
                intersect: false
            }
        },
        scales: {
            r: {
                pointLabels: {
                    color: '#495057',
                },
                grid: {
                    color: '#ebedef',
                },
                angleLines: {
                    color: '#ebedef'
                }
            }
        },
        interaction: {
            mode: 'nearest'
        }

    });

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <Chart type="radar" data={chartData} options={lightOptions} style={{position: 'relative', width: '40%'}}/>
        </div>
    );
}
                 