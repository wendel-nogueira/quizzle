export default async function getQuestionById(id: number): Promise<any> {
    return {
        id: 1,
        pergunta: 'Qual a cor do cavalo branco de Napoleão?',
        alternativas: ['Preto', 'Marrom', 'Cinza'],
        resposta: 'Branco',
        tema: 'História'
    };
}
