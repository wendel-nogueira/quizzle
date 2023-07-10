import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Header from '@/components/header/Header';
import Main from '@/components/main/Main';
import Footer from '@/components/footer/Footer';
import Button from '@/components/button/Button';
import InputIcon from '@/components/inputIcon/InputIcon';
import Table from '@/components/table/Table';
import IconButton from '@/components/iconButton/IconButton';
import Modal from '@/components/modal/Modal';
import Alert from '@/components/alert/Alert';
import { Plus, MagnifyingGlass, Pencil, Trash } from '@phosphor-icons/react';
import getThemes from '@/services/getThemes';
import deleteThemeById from '@/services/deleteThemeById';


const Index: NextPage = () => {
    const router = useRouter();
    const [themes, setThemes] = useState([]);
    const [themesFiltered, setThemesFiltered] = useState([]);
    const [theme, setTheme] = useState({} as any);
    const [openModal, setOpenModal] = useState(false);
    const [openAlert, setOpenAlert] = useState(true);
    const [alertType, setAlertType] = useState('' as any);
    const [alertInfo, setAlertInfo] = useState('' as any);

    const updateThemes = () => {
        getThemes().then((response) => {
            response.forEach((theme: any, index: number) => {
                theme['acoes'] = <>
                    <IconButton key={'edit' + index} icon={
                        <Pencil size={16} weight="regular" />
                    }
                        stylebutton={{
                            background: 'var(--alert-color-warning)',
                            color: 'var(--text-color-tertiary)',
                        }}
                        onClick={() => {
                            return router.push(`/painel/temas/edit/${theme.id}`);
                        }} />
                    <IconButton key={'delete' + index} icon={
                        <Trash size={16} weight="regular" />
                    }
                        stylebutton={{
                            background: 'var(--alert-color-error)',
                            color: 'var(--text-color-tertiary)',
                        }}
                        onClick={() => {
                            setTheme(theme);
                            setOpenModal(true);
                        }} />
                </>
            });

            setThemes(response);
            setThemesFiltered(response);
        });
    };

    useEffect(() => {
        updateThemes();
    }, [router]);

    useEffect(() => {
        setThemesFiltered(themes);
    }, [themes]);

    const handleSearch = (event: any) => {
        const value = event.target.value.toLowerCase();
        const themesFiltered = themes.filter((theme: any) => {
            return theme.tema.toLowerCase().includes(value);
        });

        setThemesFiltered(themesFiltered);

        if (value === '') {
            setThemesFiltered(themes);
        }
    };

    const handleAlert = (
        type: 'error' | 'info' | 'success' | 'warning',
        info: string,
    ) => {
        setOpenAlert(true);
        setAlertType(type);
        setAlertInfo(info);

        setTimeout(() => {
            setOpenAlert(false);
            setAlertType('');
            setAlertInfo('');
        }, 3000);
    };

    return (
        <>
            <Header />
            <Main>
                <div className="theme-container" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    gap: '32px',
                }}>
                    <div className="theme-header" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                    }}>
                        <Button style={{
                            padding: '10px',
                            width: 'max-content',
                            marginRight: 'auto',
                        }} onClick={() => router.push('/painel/temas/new')}>
                            <Plus size={20} weight="bold" />
                            <span>cadastrar</span>
                        </Button>

                        <InputIcon className='search' type='search' placeholder='pesquisar' icon={<MagnifyingGlass size={20} weight="light" />} stylediv={{
                            width: '300px',
                        }} onChange={handleSearch} />
                    </div>
                    <div className="theme-list" style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <Table
                            data={themesFiltered}
                            columns={{
                                'tema': 'Tema',
                                'descricao': 'Descrição',
                                'acoes': 'Ações',
                            }}
                            columnsQuantity={3}
                            thwidth={[
                                '20%',
                                '60%',
                                '10%',
                            ]}
                        />
                    </div>
                </div>
            </Main>
            <Modal type='delete' title='Excluir' info={
                <>
                    <p style={{
                        fontFamily: 'Noto Sans, sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        color: 'var(--text-color-primary)',
                        marginBottom: '16px',
                    }}>Deseja realmente excluir este tema?</p>
                    <p style={{
                        fontFamily: 'Noto Sans, sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        color: 'var(--foreground-color-primary)',
                    }}>{theme.tema}</p>
                </>
            } onClose={() => {
                setOpenModal(false);
                //setTheme({} as any);
            }} onConfirm={() => {
                console.log(theme);
                setOpenModal(false);
                //setTheme({} as any);

                deleteThemeById(theme.id).then((response) => {
                    handleAlert('success', 'Tema excluído com sucesso!');

                    updateThemes();
                }).catch((error) => {
                    handleAlert('error', 'Erro ao excluir tema!');
                });
            }} open={openModal} />
            <Alert type={alertType} info={alertInfo} onClose={() => setOpenAlert(false)} open={openAlert} />
            <Footer />
        </>
    );
}

export default Index;