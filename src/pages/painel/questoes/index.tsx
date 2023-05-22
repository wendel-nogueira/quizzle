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
import { Plus, MagnifyingGlass, Pencil, Trash } from '@phosphor-icons/react';
import getQuestions from '@/services/getQuestions';
import deleteQuestionById from '@/services/deleteQuestionById';
import '@fontsource/noto-sans/400.css';
import Alert from '@/components/alert/Alert';


const Index: NextPage = () => {
    const router = useRouter();
    const [questions, setQuestions] = useState([]);
    const [questionsFiltered, setQuestionsFiltered] = useState([]);
    const [question, setQuestion] = useState({} as any);
    const [openModal, setOpenModal] = useState(false);
    const [openAlert, setOpenAlert] = useState(true);
    const [alertType, setAlertType] = useState('' as any);
    const [alertInfo, setAlertInfo] = useState('' as any);

    useEffect(() => {
        getQuestions().then((response) => {
            response.forEach((question: any, index: number) => {
                question['ações'] = <>
                    <IconButton key={'edit' + index} icon={
                        <Pencil size={16} weight="regular" />
                    }
                        stylebutton={{
                            background: 'var(--alert-color-warning)',
                            color: 'var(--text-color-tertiary)',
                        }}
                        onClick={() => {
                            return router.push(`/painel/questoes/edit/${question.id}`);
                        }} />
                    <IconButton key={'delete' + index} icon={
                        <Trash size={16} weight="regular" />
                    }
                        stylebutton={{
                            background: 'var(--alert-color-error)',
                            color: 'var(--text-color-tertiary)',
                        }}
                        onClick={() => {
                            setQuestion(question);
                            setOpenModal(true);
                        }} />
                </>
            });

            setQuestions(response);
            setQuestionsFiltered(response);
        });
    }, [router]);

    useEffect(() => {
        setQuestionsFiltered(questions);
    }, [questions]);

    const handleSearch = (event: any) => {
        const value = event.target.value.toLowerCase();
        const questionsFiltered = questions.filter((question: any) => {
            return question.pergunta.toLowerCase().includes(value) ||
                question.tema.toLowerCase().includes(value);
        });

        setQuestionsFiltered(questionsFiltered);

        if (value === '') {
            setQuestionsFiltered(questions);
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
                <div className="question-container" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    gap: '32px',
                }}>
                    <div className="question-header" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                    }}>
                        <Button style={{
                            padding: '10px',
                            width: 'max-content',
                            marginRight: 'auto',
                        }} onClick={() => router.push('/painel/questoes/new')}>
                            <Plus size={20} weight="bold" />
                            <span>cadastrar</span>
                        </Button>

                        <InputIcon className='search' type='search' placeholder='pesquisar' icon={<MagnifyingGlass size={20} weight="light" />} stylediv={{
                            width: '300px',
                        }} onChange={handleSearch} />
                    </div>
                    <div className="question-list" style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <Table
                            data={questionsFiltered}
                            columns={['pergunta', 'tema', 'ações']}
                            thwidth={[
                                '60%',
                                '20%',
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
                    }}>Deseja realmente excluir esta pergunta?</p>
                    <p style={{
                        fontFamily: 'Noto Sans, sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        color: 'var(--foreground-color-primary)',
                    }}>{question.pergunta}</p>
                </>
            } onClose={() => {
                setOpenModal(false);
                //setQuestion({} as any);
            }} onConfirm={() => {
                console.log(question);
                setOpenModal(false);
                //setQuestion({} as any);

                deleteQuestionById(question.id).then((response) => {
                    handleAlert('success', 'Pergunta excluída com sucesso!');
                }).catch((error) => {
                    handleAlert('error', 'Erro ao excluir pergunta!');
                });
            }} open={openModal} />
            <Alert type={alertType} info={alertInfo} onClose={() => setOpenAlert(false)} open={openAlert} />
            <Footer />
        </>
    );
};

export default Index;