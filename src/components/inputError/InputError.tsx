import React, { useEffect, useState } from 'react';
import '@fontsource/noto-sans/400.css';


interface InputErrorProps {
    message: string;
    style?: React.CSSProperties;
}

export default function InputError(props: InputErrorProps) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (props.message.length > 0) {
            setShow(true);
        } else {
            setShow(false);
        }
    }, [props.message]);

    return (
        <div className='input-error' {...props} style={{
            display: show ? 'flex' : 'none',
            width: '100%',
            ...props.style,
        }}>
            <div className='input-error-container' style={{
                display: 'flex',
                alignItems: 'flex-start',
                width: '100%',
            }}>
                <p className='input-error-icon' style={{
                    color: 'var(--alert-color-error)',
                    fontSize: '14px',
                    fontWeight: '400',
                }}>
                    {props.message}
                </p>
            </div>
        </div>
    )
}