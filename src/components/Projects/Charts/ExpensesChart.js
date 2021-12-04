
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        expenses: 50
    },
    {
        name: 'Feb',
        expenses: 75
    },
    {
        name: 'March',
        expenses: 50
    }
]

export default function ExpensesChart() {
    return (
        <ResponsiveContainer width={'99%'} height={300} className='chartPosition'>
            <BarChart 
                className='chart'
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 10,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Bar dataKey='expenses' fill='#FF0000' />
            </BarChart>
        </ResponsiveContainer>
    )
}