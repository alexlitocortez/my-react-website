
import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const data = [
    { name: 'Affiliate', value: 70 },
    { name: 'Display Ads', value: 30 }
]

const COLORS = [ '#0088FE', '#00C49F' ];


const useStyles = makeStyles((theme) => ({
    legendAdjustment: {
        position: 'relative',
        left: '50px'
    }
})) 


export default function RevenuePie() {

    const classes = useStyles();

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


