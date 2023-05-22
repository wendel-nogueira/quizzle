import React, { useState } from 'react';
import { User } from '@phosphor-icons/react';


export default function UserMenu({ ...props }) {
    const [open, setOpen] = useState(false);

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
        }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'var(--background-color-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                border: '1px solid var(--border-color-primary)',
                cursor: 'pointer',
            }}>
                <User style={{
                    width: '24px',
                    height: '24px',
                    color: 'var(--border-color-primary)',
                }} weight='light' />
            </div>
            <nav style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                width: '78px',
                height: 'auto',
                zIndex: 1,
                transition: 'all 0.2s ease-in-out',
                display: open ? 'block' : 'none',
            }}>
                <ul style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    background: 'var(--background-color-secondary)',
                    borderRadius: '8px',
                    padding: '8px 0',
                    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.05)',
                    marginTop: '12px',
                }}>
                    <li style={{
                        width: '100%',
                        textAlign: 'center',
                        padding: '4px 0',
                        cursor: 'pointer',
                    }}>
                        <p>sair</p>
                    </li>
                </ul>
            </nav>
        </div>
    )
}