import React from 'react';
import Link from 'next/link';
import '@fontsource/noto-sans/400.css';


interface LinkProps {
    href: string;
    className?: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
}

export default function LinkComponent({ href, className, children, ...props }: LinkProps) {
    return (
        <Link href={href} className={className} style={{
            fontFamily: 'Noto Sans, sans-serif',
            fontSize: '16px',
            fontWeight: 400,
            color: className === 'active' ? 'var(--text-color-quaternary)' : 'var(--text-color-secondary)',
            textDecoration: className === 'active' ? 'underline' : 'none',
            ...props.style,
        }}>{children}</Link>
    )
}