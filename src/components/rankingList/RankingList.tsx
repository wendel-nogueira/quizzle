import React, { useEffect, useState } from 'react';
import { Medal } from '@phosphor-icons/react';
import ListItem from '@/components/listItem/listItem';
import Headline from '../headline/Headline';


interface RankingListProps {
    ranking?: any;
}

export default function RankingList({ ranking, ...props }: RankingListProps) {
    const [rankingList, setRankingList] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (ranking) {
            setRankingList(ranking);
            setLoading(false);
        }
    }, [ranking]);

    const indexColor = (index: number) => {
        if (index === 0) {
            return 'var(--ranking-color-first)';
        } else if (index === 1) {
            return 'var(--ranking-color-second)';
        } else if (index === 2) {
            return 'var(--ranking-color-third)';
        } else {
            return 'var(--background-color-secondary)';
        }
    }

    return (
        <>
            {
                loading ? (
                    <div className='loading' style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        minHeight: '300px',
                        margin: 'auto',
                    }}>
                        <span className='spinner'></span>
                    </div>
                ) : (
                    rankingList.length === 0 ? (
                        <div className='empty-list' style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            minHeight: '300px',
                            margin: 'auto',
                        }}>
                            <Headline>Nenhum jogador encontrado :(</Headline>
                        </div>
                    ) : (
                        <div className='ranking-list' style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'stretch',
                            width: '100%',
                            height: '100%',
                            gap: '24px',
                        }}>
                            {
                                rankingList.map((item: any, index: number) => {
                                    return (
                                        <ListItem key={index} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'stretch',
                                            width: '100%',
                                            background: indexColor(index),
                                        }}>
                                            <span>{index + 1}°</span>
                                            <span>|</span>
                                            <span>{item.pontuacao} pontos</span>
                                            <span>|</span>
                                            <span>{item.usuario}</span>
                                            <span style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginLeft: 'auto',
                                                color: 'var(--foreground-color-quaternary)',
                                            }}>
                                                <Medal size={18} weight="light" />
                                            </span>
                                        </ListItem>
                                    )
                                })
                            }
                        </div>
                    )
                )
            }
        </>
    )
}