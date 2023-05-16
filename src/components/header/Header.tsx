import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '@fontsource/noto-sans/400.css';
import Menu from '@/components/menu/Menu';
import UserMenu from '@/components/userMenu/userMenu';
import { List } from '@phosphor-icons/react';


export default function Header({ ...props }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (props.openMenu) {
            setOpen(true);
        }
    }, [props.openMenu]);

    return (
        <header className='header' {...props} style={{
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            maxWidth: '1280px',
            height: '80px',
            margin: '0 auto',
            ...props.style,
        }}>
            <div className='header-container' style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
            }}>
                <Link href="/painel" className='header-logo'>
                    <Image alt="Logo Quizzle - Uma ilustração de um cérebro juntamente com uma ilustração de uma lampada e dois balões de fala com um sinal de interrogação e exclamação em cada um deles." src="/logo.png" width={40} height={40} />
                </Link>
                <Menu openMenu={open} />
                <div className='open-menu' style={{
                    marginLeft: 'auto',
                    marginRight: '36px',
                }} onClick={() => setOpen(true)}>
                    <List weight='regular' style={{
                        width: '24px',
                        height: '24px',
                        color: 'var(--border-color-primary)',
                        cursor: 'pointer',
                    }} />
                </div>
                <UserMenu/>
            </div>
        </header>
    )
}