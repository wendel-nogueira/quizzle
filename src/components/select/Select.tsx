import React from 'react';
import '@fontsource/poppins/500.css';
import '@fontsource/noto-sans/400.css';


interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    options?: string[];
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    styleDiv?: React.CSSProperties;
    styleLabel?: React.CSSProperties;
    styleSelect?: React.CSSProperties;
}

export default function Select({ label, options, value, onChange, ...props }: SelectProps) {
    return (
        <div className='select-container' style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            width: '100%',
            ...props.styleDiv,
        }}>
            <label className='select-label' htmlFor='select' style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '16px',
                fontWeight: 500,
                color: 'var(--text-color-primary)',
                ...props.styleLabel,
            }}>{label}</label>
            <select id='select' name='select' className='select' style={{
                ...props.styleSelect,
            }} value={value} onChange={onChange}>
                {
                    options && options.map((option: string, index: number) => {
                        return (
                            <option key={index} value={option}>{option}</option>
                        );
                    })
                }
            </select>
        </div>
    )
}
