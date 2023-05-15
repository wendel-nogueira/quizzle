import React from 'react';
import '@fontsource/noto-sans/400.css';


export default function Input({ ...props}) {
    return (
        <input {...props} style={{
            padding: '8px 12px',
            background: 'var(--background-color-primary)',
            border: '1px solid var(--border-color-primary)',
            borderRadius: '8px',
            fontFamily: 'Noto Sans, sans-serif',
            fontSize: '14px',
            width: '100%',
            color: 'var(--text-color-primary)',
            

            ...props.style,
        }}/>
    )
}