export default async function createQuestion({ pergunta, alternativas, resposta, tema }: { pergunta: string, alternativas: string[], resposta: string, tema: string }): Promise<any> {
    const api = process.env.NEXT_PUBLIC_API_URL;

    await fetch(`${api}/questions/`, {
        method: 'POST',
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
        return;
    }).catch((error) => {
        throw new Error();
    });
}
