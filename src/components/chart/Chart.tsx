import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import '@fontsource/poppins/500.css';


interface ChartProps {
    chartTitle: string;
    children?: React.ReactNode;
    styleDiv?: React.CSSProperties;
    styleTitle?: React.CSSProperties;
    styleChart?: React.CSSProperties;
    chartData?: any;
}

const chartColors = [
    '#630FFF',
    '#478BF8',
    '#39E1C0',
];

export default function LinkComponent({ chartTitle, chartData, ...props }: ChartProps) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            width: '100%',
            height: '100%',
            maxWidth: '200px',
        }}>
            <h2 style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '16px',
                fontWeight: 500,
                color: 'var(--text-color-primary)',
                ...props.styleTitle,
            }}>{chartTitle}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '200px',
                height: '200px',
            }}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart onMouseEnter={undefined} onMouseLeave={undefined}>
                        <Pie
                            data={chartData}
                            width={200}
                            height={200}
                            dataKey="value"
                            stroke='#fafafa'
                        >
                            {chartData.map((entry: any, index: any) => (
                                <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}