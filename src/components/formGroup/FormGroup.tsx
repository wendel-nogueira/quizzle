import React from 'react';


interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

export default function FormGroup({ children, ...props }: FormGroupProps) {
    return (
        <div {...props} style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            ...props.style,
        }}>
            {children}
        </div>
    )
}