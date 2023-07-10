export default async function getCountRegisteredQuestions(): Promise<number> {
    const api = process.env.NEXT_PUBLIC_API_URL;
    let count = 0;

    await fetch(`${api}/questions/count/all`).then((response) => {
        return response.json();
    }).then((data) => {
        count = data;
    });

    return count;
}