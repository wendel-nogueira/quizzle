export default async function getCountQuestionByThemesRegistered(): Promise<any> {
    const api = process.env.NEXT_PUBLIC_API_URL;
    let questions = {};

    await fetch(`${api}/questions/count/byTheme`).then((response) => {
        return response.json();
    }).then((data) => {
        questions = data;
    });

    return questions;
}