import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Button from '@/components/button/Button';
import Input from '@/components/input/Input';
import FormGroup from '@/components/formGroup/FormGroup';
import Label from '@/components/label/Label';
import Form from '@/components/form/Form';


const Login: NextPage = () => {
    const router = useRouter();

    return (
        <div className='login-page'>
            <aside className='login-aside'>
                <div className='login-container'>
                    <Image alt="Logo Quizzle - Uma ilustração de um cérebro juntamente com uma ilustração de uma lampada e dois balões de fala com um sinal de interrogação e exclamação em cada um deles." src="/logo.png" width={80} height={80} />

                    <Form>
                        <FormGroup>
                            <Label htmlFor="email">E-mail</Label>
                            <Input type="email" placeholder="E-mail" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Senha</Label>
                            <Input type="password" placeholder="Senha" />
                        </FormGroup>
                        <Button type="submit" style={{
                            marginTop: '12px',
                        }}
                        onClick={() => {
                            router.push('/painel');
                        }}>
                            Entrar
                        </Button>
                        <Button type="button" style={{
                            background: 'var(--foreground-color-quaternary)',
                        }}
                        onClick={() => {
                            console.log('Entrar com o Google');
                        }}>
                            <Image alt="Logo do Google" src="/google-logo.svg" width={20} height={20} />
                            <span>Entrar com o Google</span>
                        </Button>
                    </Form>
                </div>
            </aside>
        </div>
    )
}

export default Login;