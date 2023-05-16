import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import LinkComponent from '@/components/link/Link';
import { X } from '@phosphor-icons/react';


interface MenuProps {
    style?: React.CSSProperties;
    openMenu?: boolean;
}

export default function Menu({ style, openMenu, ...props }: MenuProps) {
    const router = useRouter();
    const route = router.pathname;
    const [active, setActive] = useState(route);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setActive(route);
    }, [route]);

    useEffect(() => {
        if (openMenu) {
            setOpen(true);
        }
    }, [openMenu]);

    return (
        <div className='header-menu' style={{
            marginLeft: 'auto',
            marginRight: '48px',
        }}>
            <nav className={open ? 'header-menu-nav open' : 'header-menu-nav'}>
                <div className='close-menu' style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    zIndex: 1,
                    transition: 'all 0.2s ease-in-out',
                    display: open ? 'flex' : 'none',
                }} onClick={() => setOpen(false)}>
                    <X style={{
                        width: '24px',
                        height: '24px',
                        color: 'var(--border-color-primary)',
                    }} weight='regular' />
                </div>
                <ul className='header-menu-nav-list' style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '24px',
                }}>
                    <li style={{
                        width: '100%',
                    }}>
                        <LinkComponent href="/painel" className={active === '/painel' ? 'active' : ''}>home</LinkComponent>
                    </li>
                    <li style={{
                        width: '100%',
                    }}>
                        <LinkComponent href="/painel/ranking" className={active.includes('/ranking') || active === '/painel/ranking' ? 'active' : ''}>ranking</LinkComponent>
                    </li>
                    <li style={{
                        width: '100%',
                    }}>
                        <LinkComponent href="/painel/questoes" className={active.includes('/questoes') || active === '/painel/questoes' ? 'active' : ''}>questões</LinkComponent>
                    </li>
                    <li style={{
                        width: '100%',
                    }}>
                        <LinkComponent href="/painel/temas" className={active.includes('/temas') || active === '/painel/temas' ? 'active' : ''}>temas</LinkComponent>
                    </li>
                </ul>
            </nav>
        </div>
    )
}