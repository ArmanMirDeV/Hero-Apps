import React from 'react';
import useAppDetails from '../Hooks/useAppDetails';
// import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';



const ChartData = () => {


    const { appData } = useAppDetails();
    // const { ratings } = appData;

    console.log(appData.ratings)

    return (
        <div className='space-y-3' >
            <h3 className='text-xl font-semibold'>Apps Review Chart</h3>
            <div className='bg-base-100 border rounded-xl p-4 h-80' >
                {/* <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={ChartData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar
                         dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                        <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                    </BarChart>
                </ResponsiveContainer> */}

            </div>
        </div>
    );
};

export default ChartData; <h2>This is chart</h2>