import React from 'react';


interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    children?: React.ReactNode;
}

export default function Form({ children, ...props }: FormProps) {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <form {...props} style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            ...props.style,
        }} onSubmit={handleSubmit}>
            {children}
        </form>
    )
}