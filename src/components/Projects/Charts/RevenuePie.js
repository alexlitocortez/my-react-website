
import React from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import { makeStyles } from '@material-ui/core/styles';

const data = [
    { name: 'Affiliate', value: 70 },
    { name: 'Display Ads', value: 30 }
]

const COLORS = [ '#0088FE', '#00C49F' ];



export default function RevenuePie() {

    return (
        <div>
            <ResponsiveContainer width={'99%'} height={300}>
                <PieChart>
                <Legend layout='horizontal' verticalAlign='top' align='center' />
                    <Pie
                        height={300}
                        data={data}
                        cx={200}
                        cy={185}
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
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}


