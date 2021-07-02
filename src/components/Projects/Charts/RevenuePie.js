
import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const data = [
    { name: 'Affiliate', value: 70 },
    { name: 'Display Ads', value: 30 }
];

const COLORS = ['#0088FE', '#00C49F']

export default function RevenuePie() {
    return (
        <PieChart width={800} height={400}>
            <Legend />
            <Pie
                data={data}
                cx={420}
                cy={200}
                startAngle={360}
                endAngle={0}
                innerRadius={60}
                outerRadius={80}
                fill='#8884d8'
                paddingAngle={5}
                dataKey='value'
            >
                {data.map((index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
        </PieChart>
    )
}