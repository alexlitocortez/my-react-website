
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        traffic: 120
    },
    {
        name: 'Feb',
        traffic: 300
    },
    {
        name: 'March',
        traffic: 200
    }
];



export default function TrafficChart() {
  return (
      <ResponsiveContainer width={'99%'} height={300} className='chartPosition'>
        <BarChart
          className='chart'
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="traffic" fill="#4169e1" />
        </BarChart>
      </ResponsiveContainer>
  );
}