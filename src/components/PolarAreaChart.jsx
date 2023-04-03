import React, { useEffect, useState } from 'react'
import { PolarArea } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // !very important without this chart will not work
import ChartDataLabels from 'chartjs-plugin-datalabels';

export default function PolarAreaChart({ parameters }) {
    Chart.register(ChartDataLabels);
    const [plot, setPlot] = useState({
        color: [],
        data: []
    });
    const labels = [
        'Originality',
        'IP_Protection',
        'Global_Patentability',
        'Concept',
        'Development',
        'Production_Feasibility',
        'Money',
        'Business',
        'Financial',
        'Customer',
        'Market',
        'Product'
    ];
    let color = [];
    let data = [];
    useEffect(() => {
        labels.forEach(element => {
            data.push(parameters[element]);
            if (parameters[element] <= 3) {
                color.push("rgba(229, 62, 48, 0.7)")
            } else if (parameters[element] > 3 && parameters[element] <= 7) {
                color.push("rgba(255, 174, 55, 0.7)")
            } else {
                color.push("rgba(27, 195, 87, 0.7)")
            }
        })
        setPlot({
            data: data,
            color: color
        })
    }, [parameters]);

    return (
        <>
            <div id='pieLabels' className='hidden relative top-[-5rem] left-[-3.5rem]'>
                <p className='absolute text-xs top-[8rem] left-[19rem] rotate-[-78deg]'>Originality</p>
                <p className='absolute text-xs top-[11.3rem] left-[23.5rem] rotate-[-50deg]'>IP Protection</p>
                <p className='absolute text-xs top-[16rem] left-[26rem] break-words w-[70px]'>Global Patentability</p>
                <p className='absolute text-xs top-[22rem] left-[28rem] rotate-[16deg]'>Concept</p>
                <p className='absolute text-xs top-[26rem] left-[23rem] rotate-[47deg]'>Development</p>
                <p className='absolute text-xs top-[28rem] left-[18.5rem] rotate-[74deg] break-words w-[62px]'>Production Feasibility</p>
                <p className='absolute text-xs left-[14rem] top-[30rem] rotate-[103deg]'>Money</p>
                <p className='absolute text-xs top-[27rem] left-[9rem] rotate-[136deg]'>Business</p>
                <p className='absolute text-xs top-[22rem] left-[6rem] rotate-[-12deg]'>Financial</p>
                <p className='absolute text-xs top-[16rem] left-[6rem] rotate-[14deg]'>Customer</p>
                <p className='absolute text-xs top-[11rem] left-[9rem] rotate-45'>Market</p>
                <p className='absolute text-xs top-[8rem] left-[14rem] rotate-[75deg]'>Product</p>
            </div>
            <PolarArea data={{
                labels: labels,
                datasets: [{
                    data: plot.data,
                    backgroundColor: plot.color,
                }]
            }} options={{
                plugins: {
                    datalabels: {
                        anchor: 'mid',
                        backgroundColor: (context) => {
                            return context.dataset.backgroundColor;
                        },
                        borderColor: 'white',
                        borderRadius: 25,
                        borderWidth: 2,
                        color: 'white',
                        font: {
                            weight: 'bold'
                        },
                        formatter: Math.round,
                        padding: 6
                    },
                    legend: {
                        display: false
                    },
                    layout: {
                        padding: 16
                    },
                    elements: {
                        line: {
                            fill: false
                        },
                        point: {
                            hoverRadius: 7,
                            radius: 5
                        }
                    }
                }
            }} />
        </>
    )
}