export default async function updateQuestionById(id: number, { pergunta, alternativas, resposta, tema }: { pergunta: string, alternativas: string[], resposta: string, tema: string }): Promise<any> {
    return {
        id,
        pergunta,
        alternativas,
        resposta,
        tema
    };
}
