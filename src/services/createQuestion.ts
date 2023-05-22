export default async function createQuestion({ pergunta, alternativas, resposta, tema }: { pergunta: string, alternativas: string[], resposta: string, tema: string }): Promise<any> {
    return {
        id: 1,
        pergunta,
        alternativas,
        resposta,
        tema
    };
}
