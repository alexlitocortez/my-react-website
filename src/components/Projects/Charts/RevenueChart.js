import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Jan",
    revenue: 120,
  },
  {
    name: "Feb",
    revenue: 300,
  },
  {
    name: "March",
    revenue: 200,
  }
];

export default function RevenueChart() {
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
        <Bar dataKey="revenue" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}