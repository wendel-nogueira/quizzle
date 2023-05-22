import React from 'react';
import '@fontsource/noto-sans/400.css';


interface InputIconProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon: React.ReactNode;
    styleIcon?: React.CSSProperties;
    styleInput?: React.CSSProperties;
    stylediv?: React.CSSProperties;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export default function InputIcon({ ...props }: InputIconProps) {
    return (
        <div className="input-icon" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.05)',
            ...props.stylediv,
        }}>
            <label htmlFor="input" style={{
                position: 'absolute',
                left: '10px',
                width: '20px',
                height: '20px',
                ...props.styleIcon,
            }}>
                {props.icon}
            </label>
            <input id="input" {...props} style={{
                padding: '10px 10px 10px 40px',
                background: 'var(--background-color-secondary)',
                borderRadius: '8px',
                fontFamily: 'Noto Sans, sans-serif',
                fontSize: '14px',
                width: '100%',
                color: 'var(--text-color-primary)',
                outline: 'none',
                ...props.styleInput,
            }}/>
        </div>
    )
}