
import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const data = [
    { name: 'Affiliate', value: 70 },
    { name: 'Display Ads', value: 30 }
]

const COLORS = [ '#0088FE', '#00C49F' ];


export default function RevenuePie() {
    return (
        <div>
            <PieChart width={800} height={400}>
                <Pie
                    data={data}
                    cx={120}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill='#8884d8'
                    paddingAngle={5}
                    dataKey='value'
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Legend />
            </PieChart>
        </div>
    )
}