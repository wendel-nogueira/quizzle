import React from 'react';
import '@fontsource/poppins/500.css';


interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children?: React.ReactNode;
}

export default function FormGroup({ children, ...props }: LabelProps) {
    return (
        <label {...props} style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '14px',
            fontWeight: 500,
            color: 'var(--text-color-primary)',
            ...props.style,
        }}>
            {children}
        </label>
    )
}