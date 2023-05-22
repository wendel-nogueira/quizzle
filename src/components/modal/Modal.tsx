import React from 'react';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import '@fontsource/noto-sans/400.css';
import { Trash, Info, Check } from '@phosphor-icons/react';
import Button from '@/components/button/Button';



interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    type: 'delete' | 'info' | 'success';
    title: string;
    info: React.ReactNode;
    onClose: () => void;
    onConfirm: () => void;
    open: boolean;
}

export default function Modal({ ...props }: ModalProps) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 9999,
            visibility: props.open ? 'visible' : 'hidden',
            opacity: props.open ? 1 : 0,
            transition: 'all 0.3s ease-in-out',
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                maxWidth: '500px',
                padding: '20px 26px',
                backgroundColor: 'var(--background-color-primary)',
                borderRadius: '8px',
                boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s ease-in-out',
                transform: props.open ? 'translateY(0)' : 'translateY(-100%)',
                opacity: props.open ? 1 : 0,
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    gap: '12px',
                    color: props.type === 'delete' ? 'var(--alert-color-error)' : props.type === 'info' ? 'var(--alert-color-info)' : props.type === 'success' ? 'var(--alert-color-success)' : 'var(--foreground-color-primary)',
                }}>
                    {
                        props.type === 'delete' ?
                            <Trash size={32} weight="regular" />
                            :
                            props.type === 'info' ?
                                <Info size={32} weight="regular" />
                                :
                                props.type === 'success' ?
                                    <Check size={32} weight="regular" />
                                    :
                                    <></>
                    }
                    <h1 style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '20px',
                        fontWeight: 600,
                        color: 'var(--text-color-primary)',
                    }}>
                        {props.title}
                    </h1>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    marginTop: '16px',
                }}>
                    {props.info}
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    width: '100%',
                    gap: '24px',
                    marginTop: '32px',
                }}>
                    <Button style={{
                        background: 'var(--alert-color-error)',
                        color: 'var(--text-color-tertiary)',
                        border: 'none',
                    }} onClick={props.onClose}>
                        cancelar
                    </Button>
                    <Button style={{
                        background: 'var(--alert-color-success)',
                        color: 'var(--text-color-tertiary)',
                        border: 'none',
                    }} onClick={props.onConfirm}>
                        confirmar
                    </Button>
                </div>
            </div>
        </div>
    )
}