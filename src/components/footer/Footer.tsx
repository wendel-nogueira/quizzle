import React from 'react';


export default function Footer({ ...props }) {
    return (
        <footer {...props} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '24px',
            maxWidth: '1280px',
            margin: '20px auto 0px',
            ...props.style,
        }}>
            <p style={{ fontSize: '12px' }}>❤️</p>
        </footer>
    )
}