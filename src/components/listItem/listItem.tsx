import React from 'react';
import '@fontsource/noto-sans/400.css';


interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

export default function ListItem({ children, ...props }: ListItemProps) {
    return (
        <div {...props} style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
            padding: '8px 10px',
            gap: '10px',
            fontFamily: 'Noto Sans, sans-serif',
            fontSize: '14px',
            fontWeight: 400,
            color: 'var(--text-color-primary)',
            backgroundColor: 'var(--background-color-secondary)',
            borderRadius: '4px',
            boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.05)',
            ...props.style,
        }}>
            {children}
        </div>
    )
}