import React from 'react';
import '@fontsource/noto-sans/400.css';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export default function Button({ children, ...props}: ButtonProps) {
    return (
        <button {...props} style={{
            padding: '10px 24px',
            background: 'var(--foreground-color-tertiary)',
            color: 'var(--text-color-primary)',
            borderRadius: '8px',
            border: '1px solid var(--foreground-color-tertiary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            width: '100%',
            fontFamily: 'Noto Sans, sans-serif',
            fontSize: '14px',
            textAlign: 'center',
            ...props.style,
        }}>
            {children}
        </button>
    )
}