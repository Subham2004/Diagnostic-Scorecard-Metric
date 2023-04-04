import React, { useEffect, useState } from 'react'
import { PolarArea } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // !very important without this chart will not work

export default function PolarAreaChart({ parameters }) {
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

    const thresholdLines = {
        id: "thresholdLines",
        afterDatasetsDraw(chart) {
            const { ctx, chartArea: { top }, scales: { r } } = chart;

            const trueHeight = r.yCenter - top;
            const radius = trueHeight / r.end;
            const angle = Math.PI / 180;

            for (let i = 1; i <= 10; i++) {
                ctx.save();
                ctx.beginPath();
                ctx.lineWidth = 2;
                ctx.strokeStyle = 'rgba(39, 39, 39, 0.15)';
                ctx.arc(r.xCenter, r.yCenter, radius * i, angle * 0, angle * 360, false);
                ctx.stroke();
                ctx.closePath();
                ctx.restore();
            }
        }
    }

    return (
        <>
            <div id='pieLabels' className='hidden relative top-[-5rem] left-[-3.5rem]'>
                <p className='absolute text-xs top-[8rem] left-[18.5rem] rotate-[-78deg]'>
                    Originality ({parameters["Originality"]})
                </p>
                <p className='absolute text-xs top-[11.3rem] left-[22.5rem] rotate-[-50deg]'>
                    IP Protection ({parameters["IP_Protection"]})
                </p>
                <p className='absolute text-xs top-[16rem] left-[26rem] break-words w-[90px]'>
                    Global Patentability ({parameters["Global_Patentability"]})
                </p>
                <p className='absolute text-xs top-[22rem] left-[26.5rem] rotate-[16deg]'>
                    Concept ({parameters["Concept"]})
                </p>
                <p className='absolute text-xs top-[26rem] left-[22rem] rotate-[47deg]'>
                    Development ({parameters["Development"]})
                </p>
                <p className='absolute text-xs top-[29rem] left-[18.5rem] rotate-[74deg] break-words w-[70px]'>
                    Production Feasibility ({parameters["Production_Feasibility"]})
                </p>
                <p className='absolute text-xs left-[13.2rem] top-[30rem] rotate-[103deg]'>
                    Money ({parameters["Money"]})
                </p>
                <p className='absolute text-xs top-[26.5rem] left-[8.5rem] rotate-[-48deg]'>
                    Business ({parameters["Business"]})
                </p>
                <p className='absolute text-xs top-[21.5rem] left-[5.5rem] rotate-[-12deg]'>
                    Financial ({parameters["Financial"]})
                </p>
                <p className='absolute text-xs top-[16.5rem] left-[5.5rem] rotate-[14deg]'>
                    Customer ({parameters["Customer"]})
                </p>
                <p className='absolute text-xs top-[11rem] left-[8rem] rotate-45'>
                    Market ({parameters["Market"]})
                </p>
                <p className='absolute text-xs top-[8rem] left-[13rem] rotate-[75deg]'>
                    Product ({parameters["Product"]})
                </p>
            </div>
            <PolarArea data={{
                labels: labels,
                datasets: [
                    {
                        data: plot.data,
                        backgroundColor: plot.color,
                    },
                    {
                        data: [10],
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderWidth: 0,
                        animations: null
                    }
                ],
            }} options={{
                scales: {
                    r: {
                        ticks: {
                            display: false
                        }
                    }
                },
                interaction: {
                    mode: []
                },
                plugins: {
                    tooltip: {
                        enabled: false,
                    },
                    legend: {
                        display: false
                    },
                }
            }} plugins={[thresholdLines]} />
        </>
    )
}