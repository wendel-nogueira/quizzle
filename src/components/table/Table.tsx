import React from 'react';
import '@fontsource/noto-sans/400.css';


interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
    data: any[];
    columns: any[];
    styletable?: React.CSSProperties;
    stylethead?: React.CSSProperties;
    styletbody?: React.CSSProperties;
    styletr?: React.CSSProperties;
    styleth?: React.CSSProperties;
    styletd?: React.CSSProperties;
    thwidth: string[];
}

export default function Table({ data, columns, ...props }: TableProps) {
    return (
        <>
            <table {...props} style={{
                width: '100%',
                borderCollapse: 'collapse',
                ...props.styletable
            }}>
                <thead style={{
                    width: '100%',
                    ...props.stylethead,
                }}>
                    <tr style={{
                        width: '100%',
                        backgroundColor: 'var(--background-color-secondary)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.05)',
                        padding: '10px 32px',
                        ...props.styletr,
                    }}>
                        {columns.map((column, index) => {
                            return (
                                <>
                                    <th key={index} style={{
                                        textAlign: index === 0 ? 'left' :
                                            index === columns.length - 1 ? 'right' :
                                                'center',
                                        fontFamily: 'Noto Sans',
                                        fontWeight: 'normal',
                                        fontSize: '14px',
                                        width: '100%',
                                        maxWidth: `calc(${props.thwidth[index]})`,
                                        ...props.styleth,
                                    }}>{column}</th>
                                    {
                                        index !== columns.length - 1 && (
                                            <th key={'div' + index} style={{
                                                width: '25px',
                                                height: '100%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: '--text-color-primary',
                                                fontFamily: 'Noto Sans',
                                                fontWeight: 'normal',
                                                ...props.styleth,
                                            }}>
                                                |
                                            </th>
                                        )
                                    }
                                </>
                            )
                        })}
                    </tr>
                </thead>
            </table>
            <div style={{
                width: 'calc(100% - 100px)',
                height: '1px',
                background: 'var(--foreground-color-primary)',
                margin: '24px auto',
            }}/>
            <table {...props} style={{
                width: '100%',
                borderCollapse: 'collapse',
                ...props.styletable
            }}>
                <tbody style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    ...props.styletbody,
                }}>
                    {data.length !== 0 && data.map((item, index) => (
                        <tr key={index} style={{
                            width: '100%',
                            backgroundColor: 'var(--background-color-secondary)',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.05)',
                            padding: '10px 32px',
                            ...props.styletr,
                        }}>
                            {columns.map((column, index) => {
                                return (
                                    <>
                                        <td key={index} style={{
                                            textAlign: index === 0 ? 'left' :
                                                index === columns.length - 1 ? 'right' :
                                                    'center',
                                            fontFamily: 'Noto Sans',
                                            fontWeight: 'normal',
                                            fontSize: '14px',
                                            width: '100%',
                                            maxWidth: `calc(${props.thwidth[index]})`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: index === 0 ? 'flex-start' :
                                                index === columns.length - 1 ? 'flex-end' :
                                                    'center',
                                            gap: '8px',
                                            ...props.styletd,
                                        }}>{item[column]}</td>
                                        {
                                            index !== columns.length - 1 && (
                                                <td key={'div' + index} style={{
                                                    width: '25px',
                                                    height: '100%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: '--text-color-primary',
                                                    fontFamily: 'Noto Sans',
                                                    fontWeight: 'normal',
                                                    ...props.styletd,
                                                }}>
                                                    |
                                                </td>
                                            )
                                        }
                                    </>
                                )
                            })}
                        </tr>
                    ))}
                    {
                        data.length === 0 && (
                            <tr style={{
                                width: '100%',
                                backgroundColor: 'var(--background-color-secondary)',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.05)',
                                padding: '10px 32px',
                            }}>
                                <td style={{
                                    textAlign: 'center',
                                    fontFamily: 'Noto Sans',
                                    fontWeight: 'normal',
                                    fontSize: '14px',
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                }}>Nenhuma questão encontrada</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}