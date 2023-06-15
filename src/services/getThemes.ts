export default async function getThemes(): Promise<any> {
    const themes = [
        {
            id: 1,
            tema: 'Geografia',
            descricao: 'Perguntas sobre Geografia',
        },
        {
            id: 2,
            tema: 'História',
            descricao: 'Perguntas sobre História',
        },
        {
            id: 3,
            tema: 'Matemática',
            descricao: 'Perguntas sobre Matemática',
        }
    ];
    
    return themes;
}