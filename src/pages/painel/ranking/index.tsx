import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Header from '@/components/header/Header';
import Main from '@/components/main/Main';
import Footer from '@/components/footer/Footer';
import Aside from '@/components/aside/Aside';
import Headline from '@/components/headline/Headline';
import RankingList from '@/components/rankingList/RankingList';
import Select from '@/components/select/Select';

import getOverallRating from '@/services/getOverallRating';
import getClassificationByTheme from '@/services/getClassificationByTheme';
import getThemeList from '@/services/getThemeList';


const Index: NextPage = () => {
    const [overallRating, setOverallRating] = useState<any[]>([]);
    const [theme, setTheme] = useState<string>('');
    const [themeList, setThemeList] = useState<string[]>([]);
    const [themeRanking, setThemeRanking] = useState<any[]>([]);

    useEffect(() => {
        getThemeList().then((response: any) => {
            setThemeList(response);
            setTheme(response[0]);
        });
    }, []);

    useEffect(() => {
        getOverallRating().then((response: any) => {
            setOverallRating(response);
        });
    }, []);

    useEffect(() => {
        getClassificationByTheme(theme).then((response: any) => {
            if (response === undefined) {
                setThemeRanking([]);
                return;
            }

            setThemeRanking(response.ranking);
        });
    }, [theme]);

    return (
        <>
            <Header />
            <Main>
                <div className='ranking-container' style={{
                    display: 'flex',
                    alignItems: 'stretch',
                    justifyContent: 'space-between',
                    width: '100%',
                    height: '100%',
                    gap: '3rem',
                }}>
                    <Aside style={{
                        gap: '40px',
                    }}>
                        <Headline style={{
                            textAlign: 'center',
                            fontSize: '20px',
                        }}>Ranking geral</Headline>

                        <RankingList ranking={overallRating}></RankingList>
                    </Aside>
                    <span className='divider-ranking' style={{
                        display: 'block',
                        backgroundColor: 'var(--foreground-color-primary)',
                    }}></span>
                    <Aside style={{
                        gap: '40px',
                        position: 'relative',
                    }}>
                        <Select label='Tema:' options={themeList} value={theme} styleLabel={{
                            textAlign: 'center',
                            fontSize: '20px',
                        }} styleSelect={{
                            backgroundColor: 'var(--background-color-primary)',
                            border: 'none',
                            borderRadius: '5px',
                            fontFamily: 'Noto Sans, sans-serif',
                            fontSize: '20px',
                            fontWeight: 500,
                        }} onChange={(event) => {
                            setTheme(event.target.value);
                        }}></Select>

                        <RankingList ranking={themeRanking}></RankingList>
                    </Aside>
                </div>
            </Main>
            <Footer />
        </>
    );
}

export default Index;