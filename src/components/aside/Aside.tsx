import React from 'react';


interface AsideProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

export default function Aside({ children, ...props }: AsideProps) {
    return (
        <aside {...props} style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            ...props.style,
        }}>
            {children}
        </aside>
    )
}