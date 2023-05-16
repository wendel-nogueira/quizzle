import React from 'react';


interface HeadlineProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

export default function Headline({ children, ...props }: HeadlineProps) {
    return (
        <h3 {...props} style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '16px',
            fontWeight: 500,
            color: 'var(--text-color-primary)',
            ...props.style,
        }}>
            {children}
        </h3>
    )
}