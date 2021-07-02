
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    {
        name: 'Jan',
        traffic: 10000
    },
    {
        name: 'Feb',
        traffic: 9000
    },
    {
        name: 'March',
        traffic: 9700
    }
];

export default function TrafficChart() {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="traffic" fill="#4169e1" />
    </BarChart>
  );
}