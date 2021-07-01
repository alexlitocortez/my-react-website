import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



export default function RevenueChart() {
    const data = [
        {
          month: 'Jan',
          revenue: '$100',
          actual: '$120'
        },
        {
          month: 'Feb',
          revenue: '$200',
          actual: '$150'
        },
        {
          month: 'March',
          revenue: '$300',
          actual: '$230'
        }
      ];

    return (
        <div>
            <ResponsiveContainer width='100%' aspect={3}>
                <BarChart
                    data={data}
                >
                    <CartesianGrid strokeDasharray='3 3'/>
                    <XAxis dataKey='month' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='actual' fill='blue' />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
