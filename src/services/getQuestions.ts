export default async function getQuestions(): Promise<any> {
    const questions = [
        {
            id: 1,
            pergunta: 'Qual a capital do Brasil?',
            tema: 'Geografia',
        },
        {
            id: 2,
            pergunta: 'Qual o maior país do mundo?',
            tema: 'Geografia',
        },
        {
            id: 3,
            pergunta: 'Qual o menor país do mundo?',
            tema: 'Geografia',
        }
    ];
    
    return questions;
}