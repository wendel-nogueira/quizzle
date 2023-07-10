export default async function getQuestions(): Promise<any> {
    const api = process.env.NEXT_PUBLIC_API_URL;
    let questions: never[] = [];

    await fetch(`${api}/questions`).then((response) => {
        return response.json();
    }).then((data) => {
        questions = data;
    });

    return questions;
}