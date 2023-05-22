import React from 'react';


interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode;
    stylebutton?: React.CSSProperties;
    styleicon?: React.CSSProperties;
}

export default function IconButton({ ...props }: IconButtonProps) {
    return (
        <button {...props} style={{
            padding: '8px',
            fontFamily: 'Noto Sans, sans-serif',
            fontSize: '14px',
            background: 'var(--background-color-primary)',
            color: 'var(--text-color-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.05)',
            borderRadius: '5px',
            ...props.stylebutton,
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ...props.styleicon,
            }}>
                {props.icon}
            </div>
        </button>
    )
}