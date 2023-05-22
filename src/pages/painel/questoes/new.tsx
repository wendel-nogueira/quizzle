import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Header from '@/components/header/Header';
import Main from '@/components/main/Main';
import Footer from '@/components/footer/Footer';
import Button from '@/components/button/Button';
import Form from '@/components/form/Form';
import FormGroup from '@/components/formGroup/FormGroup';
import Label from '@/components/label/Label';
import Input from '@/components/input/Input';
import TextArea from '@/components/textArea/TextArea';
import Select from '@/components/select/Select';
import Alert from '@/components/alert/Alert';
import getThemeList from '@/services/getThemeList';
import createQuestion from '@/services/createQuestion';
import '@fontsource/noto-sans/400.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/500.css';



const New: NextPage = () => {
    const router = useRouter();
    const [openAlert, setOpenAlert] = useState(false);
    const [alertType, setAlertType] = useState('' as any);
    const [alertInfo, setAlertInfo] = useState('' as any);
    const [themeList, setThemeList] = useState([]);
    const [question, setQuestion] = useState({
        pergunta: '',
        alternativas: ['', '', ''],
        resposta: '',
        tema: '',
    });

    useEffect(() => {
        getThemeList().then((response: any) => {
            setThemeList(response);
        });
    }, []);

    const handleSubmit = () => {
        console.log(question);

        createQuestion(question).then((response: any) => {
            if (response) {
                setAlertType('success');
                setAlertInfo('Pergunta cadastrada com sucesso!');
                setOpenAlert(true);

                setTimeout(() => {
                    setOpenAlert(false);
                    router.push('/painel/questoes');
                }, 3000);
            } else {
                setAlertType('error');
                setAlertInfo('Erro ao cadastrar pergunta!');
                setOpenAlert(true);
                setTimeout(() => {
                    setOpenAlert(false);
                }, 3000);
            }
        }).catch((error: any) => {
            setAlertType('error');
            setAlertInfo('Erro ao cadastrar pergunta!');
            setOpenAlert(true);
            setTimeout(() => {
                setOpenAlert(false);
            }, 3000);
        });
    };

    const handleAlternatives = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        if (!value || value.length === 0) {
            return;
        }

        const index = parseInt(event.target.id.split('alternativa')[1]) - 1;
        let alternativesTemp = question.alternativas;

        alternativesTemp[index] = value;

        setQuestion({
            ...question,
            alternativas: alternativesTemp
        });
    };

    return (
        <>
            <Header />
            <Main>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    gap: '12px',
                }}>
                    <h1 style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '20px',
                        fontWeight: 600,
                        color: 'var(--text-color-primary)',
                    }}>cadastrar nova pergunta</h1>
                    <p style={{
                        fontFamily: 'Noto Sans, sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        color: 'var(--text-color-primary)',
                        marginBottom: '12px',
                    }}>utilize o formulário abaixo para cadastrar uma nova pergunta!</p>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '24px 32px',
                        background: 'var(--background-color-secondary)',
                        width: '100%',
                        maxWidth: '380px',
                        borderRadius: '8px',
                        boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.05)',
                    }}>
                        <Form>
                            <FormGroup>
                                <Label htmlFor='pergunta'>Pergunta</Label>
                                <TextArea type='text' id='pergunta' name='pergunta' placeholder='digite a pergunta' style={{
                                    minWidth: '300px',
                                }} onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                                    setQuestion({
                                        ...question,
                                        pergunta: event.target.value,
                                    });
                                }} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='alternativa1'>Alternativa 1</Label>
                                <Input type='text' id='alternativa1' name='alternativa1' placeholder='digite a alternativa 1' style={{
                                    minWidth: '300px',
                                }} value={question.alternativas[0]} onChange={handleAlternatives} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='alternativa2'>Alternativa 2</Label>
                                <Input type='text' id='alternativa2' name='alternativa2' placeholder='digite a alternativa 2' style={{
                                    minWidth: '300px',
                                }} value={question.alternativas[1]} onChange={handleAlternatives} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='alternativa3'>Alternativa 3</Label>
                                <Input type='text' id='alternativa3' name='alternativa3' placeholder='digite a alternativa 3' style={{
                                    minWidth: '300px',
                                }} value={question.alternativas[2]} onChange={handleAlternatives} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='resposta'>Resposta</Label>
                                <Input type='text' id='resposta' name='resposta' placeholder='digite a resposta' style={{
                                    minWidth: '300px',
                                }} value={question.resposta} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setQuestion({
                                        ...question,
                                        resposta: event.target.value,
                                    });
                                }} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='tema'>Tema</Label>
                                <Select id='tema' name='tema' placeholder='selecione o tema' styleSelect={{
                                    padding: '8px 12px',
                                    background: 'var(--background-color-secondary)',
                                    border: '1px solid var(--border-color-primary)',
                                    borderRadius: '8px',
                                    fontFamily: 'Noto Sans, sans-serif',
                                    fontSize: '14px',
                                    width: '100%',
                                    minWidth: '300px',
                                    color: 'var(--text-color-primary)',
                                    resize: 'vertical',
                                }} styleDiv={{
                                    gap: '0px',
                                }} value={question.tema} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                                    setQuestion({
                                        ...question,
                                        tema: event.target.value,
                                    });
                                }}>
                                    <option value=''>selecione o tema</option>
                                    {
                                        themeList && themeList.map((theme: any, index: number) => {
                                            return (
                                                <option key={index} value={theme}>{theme}</option>
                                            );
                                        })
                                    }
                                </Select>
                            </FormGroup>

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
                                }} onClick={() => {
                                    router.push('/painel/questoes');
                                }}>
                                    cancelar
                                </Button>
                                <Button style={{
                                    background: 'var(--alert-color-success)',
                                    color: 'var(--text-color-tertiary)',
                                    border: 'none',
                                }} type='submit' onClick={handleSubmit}>
                                    confirmar
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </Main>
            <Alert type={alertType} info={alertInfo} onClose={() => setOpenAlert(false)} open={openAlert} />
            <Footer />
        </>
    );
};

export default New;