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
import Alert from '@/components/alert/Alert';
import InputError from '@/components/inputError/InputError';
import createTheme from '@/services/createTheme';



const New: NextPage = () => {
    const router = useRouter();
    const [openAlert, setOpenAlert] = useState(false);
    const [alertType, setAlertType] = useState('' as any);
    const [alertInfo, setAlertInfo] = useState('' as any);
    const [theme, setTheme] = useState({
        tema: '',
        descricao: '',
    });
    const [themeError, setThemeError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');

    const handleSubmit = () => {
        const error = validateFields();
        
        if (error) {
            return;
        }

        createTheme(theme).then((response: any) => {
            if (response) {
                setAlertType('success');
                setAlertInfo('Tema cadastrado com sucesso!');
                setOpenAlert(true);

                setTimeout(() => {
                    setOpenAlert(false);
                    router.push('/painel/temas');
                }, 3000);
            } else {
                setAlertType('error');
                setAlertInfo('Erro ao cadastrar tema!');
                setOpenAlert(true);
                setTimeout(() => {
                    setOpenAlert(false);
                }, 3000);
            }
        }).catch((error: any) => {
            setAlertType('error');
            setAlertInfo('Erro ao cadastrar tema!');
            setOpenAlert(true);
            setTimeout(() => {
                setOpenAlert(false);
            }, 3000);
        });
    };

    const validateFields = () => {
        let error = false;
        const regex = new RegExp('^[a-zA-ZÀ-ÿ0-9]+$');

        if (!theme.tema || theme.tema.length === 0 || theme.tema.trim().length === 0) {
            setThemeError('Preencha o tema!');
            error = true;
        } else {
            if (theme.tema.length > 255) {
                setThemeError('O tema deve ter no máximo 255 caracteres!');
                error = true;
            } else if (!regex.test(theme.tema)) {
                setThemeError('O tema deve conter apenas letras e números!');
                error = true;
            } else {
                setThemeError('');
            }
        }

        if (!theme.descricao || theme.descricao.length === 0) {
            setDescriptionError('Preencha a descrição!');
            error = true;
        } else {
            if (theme.descricao.length > 255) {
                setDescriptionError('A descrição deve ter no máximo 255 caracteres!');
                error = true;
            } else {
                setDescriptionError('');
            }
        }

        return error;
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
                    }}>cadastrar novo tema</h1>
                    <p style={{
                        fontFamily: 'Noto Sans, sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        color: 'var(--text-color-primary)',
                        marginBottom: '12px',
                    }}>utilize o formulário abaixo para cadastrar um novo tema</p>
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
                                <Label htmlFor='theme'>Tema</Label>
                                <Input type='text' id='theme' name='theme' placeholder='digite o tema' style={{
                                    minWidth: '300px',
                                    border: themeError.length > 0 ? '1px solid var(--alert-color-error)' : '1px solid var(--border-color-primary)',
                                }} value={theme.tema} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setTheme({
                                        ...theme,
                                        tema: event.target.value,
                                    });
                                }} />
                                <InputError message={themeError} id='error-theme'/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='description'>Descrição</Label>
                                <TextArea type='text' id='description' name='description' placeholder='digite a descrição' style={{
                                    minWidth: '300px',
                                    border: descriptionError.length > 0 ? '1px solid var(--alert-color-error)' : '1px solid var(--border-color-primary)',
                                }} onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                                    setTheme({
                                        ...theme,
                                        descricao: event.target.value,
                                    });
                                }} />
                                <InputError message={descriptionError} id='error-description'/>
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
                                    router.push('/painel/temas');
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
}

export default New;