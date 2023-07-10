export default async function getCountGamesPlayed(): Promise<number> {
    const api = process.env.NEXT_PUBLIC_API_URL;
    let count = 0;

    await fetch(`${api}/game/count`).then((response) => {
        return response.json();
    }).then((data) => {
        count = data;
    });

    return count;
}