import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Chart.css'
import MediaQuery from 'react-responsive';

export default function Chart() {

    const data = [
        {
          name: '$10,000',
          amt: 1,
        },
        {
          name: '$20,000',
          amt: 2,
        },
        {
          name: '$30,000',
          amt: 3,
        },
        {
          name: '$40,000',
          amt: 4,
        }
      ];

    return (
        <div className='chart'>
            <h4 className='chartTitle'>Website Valuation Estimate</h4>
            <ResponsiveContainer width='99%' aspect={3}>
              <LineChart data={data}>
                <XAxis dataKey='name' stroke='#5550bd' />
                <YAxis dataKey='amt' stroke='#5550bd' />
                <Line type='monotone' dataKey='amt' stroke='#5550bd'></Line>
                <Tooltip />
                <CartesianGrid stroke='#e0dfdf'/>
              </LineChart>
            </ResponsiveContainer>
        </div>
    )
}


