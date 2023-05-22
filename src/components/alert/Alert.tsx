import React from 'react';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import '@fontsource/noto-sans/400.css';
import { Check, X, Info, Warning } from '@phosphor-icons/react';


interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    type: 'error' | 'info' | 'success' | 'warning';
    info: React.ReactNode;
    onClose: () => void;
    open: boolean;
}

export default function Alert({ ...props }: AlertProps) {
    return (
        <div style={{
            position: 'fixed',
            bottom: '100px',
            right: '0',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '500px',
            padding: '10px 16px',
            background: 'var(--background-color-secondary)',
            borderRadius: '8px 0px 0px 8px',
            boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.05)',
            transition: 'all 0.3s ease-in-out',
            transform: props.open ? 'translateX(0)' : 'translateX(100%)',
            opacity: props.open ? 1 : 0,
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '12px',
                width: '100%',
                color: props.type === 'error' ? 'var(--alert-color-error)' : props.type === 'info' ? 'var(--alert-color-info)' : props.type === 'success' ? 'var(--alert-color-success)' : props.type === 'warning' ? 'var(--alert-color-warning)' : 'var(--foreground-color-primary)',
            }}>
                {props.type === 'error' && <X size={20} weight="bold" />}
                {props.type === 'info' && <Info size={20} weight="bold" />}
                {props.type === 'success' && <Check size={20} weight="bold" />}
                {props.type === 'warning' && <Warning size={20} weight="bold" />}
                <span style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '16px',
                    fontWeight: 400,
                    color: props.type === 'error' ? 'var(--alert-color-error)' : props.type === 'info' ? 'var(--alert-color-info)' : props.type === 'success' ? 'var(--alert-color-success)' : props.type === 'warning' ? 'var(--alert-color-warning)' : 'var(--foreground-color-primary)',
                }}>{props.info}</span>
            </div>
        </div>
    )
}