export default async function getClassificationByTheme(theme: string): Promise<any> {
    if (theme === 'desenho') {
        return {
            'theme': 'Desenho',
            'ranking': [
                { score: 100, player: 'usuario d' },
                { score: 90, player: 'usuario d' },
                { score: 80, player: 'usuario d' },
                { score: 70, player: 'usuario d' },
                { score: 60, player: 'usuario d' },
                { score: 50, player: 'usuario d' },
                { score: 40, player: 'usuario d' },
                { score: 30, player: 'usuario d' },
                { score: 20, player: 'usuario d' },
                { score: 10, player: 'usuario d' },
            ],
        };
    } else if (theme === 'musica') {
        return {
            'theme': 'Música',
            'ranking': [
                { score: 100, player: 'usuario m' },
                { score: 90, player: 'usuario m' },
                { score: 80, player: 'usuario m' },
                { score: 70, player: 'usuario m' },
                { score: 60, player: 'usuario m' },
                { score: 50, player: 'usuario m' },
                { score: 40, player: 'usuario m' },
                { score: 30, player: 'usuario m' },
                { score: 20, player: 'usuario m' },
                { score: 10, player: 'usuario m' },
            ],
        };
    } else if (theme === 'educacao') {
        return {
            'theme': 'Educação',
            'ranking': [
                { score: 100, player: 'usuario e' },
                { score: 90, player: 'usuario e' },
                { score: 80, player: 'usuario e' },
                { score: 70, player: 'usuario e' },
                { score: 60, player: 'usuario e' },
                { score: 50, player: 'usuario e' },
                { score: 40, player: 'usuario e' },
                { score: 30, player: 'usuario e' },
                { score: 20, player: 'usuario e' },
                { score: 10, player: 'usuario e' },
            ],
        };
    }
}