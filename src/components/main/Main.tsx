import React from 'react';


interface MainProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

export default function Main({ children, ...props }: MainProps) {
    return (
        <main {...props} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            minHeight: 'calc(100vh - 164px)',
            maxWidth: '1280px',
            margin: '40px auto 0px',
            padding: '0px 20px',
            ...props.style,
        }}>
            {children}
        </main>
    )
}