import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import io from 'socket.io-client';
import Header from '@/components/header/Header';
import Main from '@/components/main/Main';
import Footer from '@/components/footer/Footer';
import Chart from '@/components/chart/Chart';
import ListItem from '@/components/listItem/listItem';
import Headline from '@/components/headline/Headline';
import Aside from '@/components/aside/Aside';

import getCountQuestionByThemesRegistered from '@/services/getCountQuestionByThemesRegistered';
import getHitsByTheme from '@/services/getHitsByTheme';
import getWrongByTheme from '@/services/getWrongByTheme';
import getCountGamesPlayed from '@/services/getCountGamesPlayed';
import getCountRegisteredQuestions from '@/services/getCountRegisteredQuestions';
import getHighestScore from '@/services/getHighestScore';
import getRecentGames from '@/services/getRecentGames';

const Index: NextPage = () => {
    const [countQuestionByThemesRegistered, setcountQuestionByThemesRegistered] = useState([]);
    const [hitsByTheme, setHitsByTheme] = useState([]);
    const [wrongByTheme, setWrongByTheme] = useState([]);

    const [countGamesPlayed, setCountGamesPlayed] = useState(0);
    const [countRegisteredQuestions, setCountRegisteredQuestions] = useState(0);
    const [highestScore, setHighestScore] = useState([0, '']);
    const [recentGames, setRecentGames] = useState([]);

    useEffect(() => {
        getCountQuestionByThemesRegistered().then((response) => {
            setcountQuestionByThemesRegistered(response);
        });
    }, []);

    useEffect(() => {
        getHitsByTheme().then((response) => {
            setHitsByTheme(response);
        });
    }, []);

    useEffect(() => {
        getWrongByTheme().then((response) => {
            setWrongByTheme(response);
        });
    }, []);

    useEffect(() => {
        getCountGamesPlayed().then((response) => {
            setCountGamesPlayed(response);
        });
    }, []);

    useEffect(() => {
        getCountRegisteredQuestions().then((response) => {
            setCountRegisteredQuestions(response);
        });
    }, []);

    useEffect(() => {
        getHighestScore().then((response) => {
            setHighestScore(response);
        });
    }, []);

    useEffect(() => {
        getRecentGames().then((response) => {
            setRecentGames(response);
        });
    }, []);

    return (
        <>
            <Header></Header>
            <Main>
                <div className='dashboard-container' style={{
                    display: 'flex',
                    //alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'space-between',
                    gap: '3rem',
                }}>
                    <Aside className="dashboard-aside">
                        <div className="dashboard-aside-left" style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%',
                        }}>
                            {
                                countQuestionByThemesRegistered.length > 0 && (
                                    <Chart chartTitle="perguntas por tema" chartData={countQuestionByThemesRegistered}></Chart>
                                )
                            }

                            {
                                hitsByTheme.length > 0 && (
                                    <Chart chartTitle="acertos por tema" chartData={hitsByTheme}></Chart>
                                )
                            }
                            {
                                wrongByTheme.length > 0 && (
                                    <Chart chartTitle="erros por tema" chartData={wrongByTheme}></Chart>
                                )
                            }
                        </div>
                        <div style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            gap: '24px',
                        }}>
                            <Headline>Perguntas cadastradas: {countRegisteredQuestions} perguntas</Headline>
                            <Headline>Jogos realizados: {countGamesPlayed} jogos</Headline>
                            <Headline>Maior pontuação: {highestScore[0]} pontos - Jogador(a): {highestScore[1]}</Headline>
                        </div>
                    </Aside>
                    <Aside className="dashboard-aside" style={{
                        maxWidth: '350px',
                    }}>
                        <ListItem>
                            novas pontuações
                        </ListItem>
                        <span style={{
                            width: '100%',
                            height: '1px',
                            backgroundColor: 'var(--foreground-color-primary)',
                            display: 'block',
                        }}></span>
                        {
                            recentGames.map((info: any, index: number) => {
                                return (
                                    <ListItem key={index}>
                                        {info.pontuacao} pontos - {info.usuario}
                                    </ListItem>
                                )
                            })
                        }
                    </Aside>
                </div>
            </Main>
            <Footer></Footer>
        </>
    )
}

export default Index;