export default async function getQuestionById(id: string): Promise<any> {
    const api = process.env.NEXT_PUBLIC_API_URL;
    let question = {};

    await fetch(`${api}/questions/${id}`).then((response) => {
        return response.json();
    }).then((data) => {
        question = data;
    });

    return question;
}
