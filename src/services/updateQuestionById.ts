export default async function updateQuestionById(id: string, { pergunta, alternativas, resposta, tema }: { pergunta: string, alternativas: string[], resposta: string, tema: string }): Promise<any> {
    const api = process.env.NEXT_PUBLIC_API_URL;

    await fetch(`${api}/questions/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            pergunta,
            alternativas,
            resposta,
            tema
        })
    }).then((data) => {
        if (data.status !== 200) {
            throw new Error('Tema não encontrado!');
        }

        return;
    }).catch((error) => {
        throw new Error();
    });
}
