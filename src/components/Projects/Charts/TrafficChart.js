
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    {
        name: 'Jan',
        traffic: 3000
    },
    {
        name: 'Feb',
        traffic: 3500
    },
    {
        name: 'March',
        traffic: 5000
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
  );
}