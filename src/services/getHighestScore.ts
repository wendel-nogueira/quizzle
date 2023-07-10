export default async function getHighestScore(): Promise<[number, string]> {
    const api = process.env.NEXT_PUBLIC_API_URL;
    let highestScore = 0;
    let player = '';

    await fetch(`${api}/game/highestScore`).then((response) => {
        return response.json();
    }).then((data) => {
        highestScore = data.pontuacao;
        player = data.usuario;
    });

    return [highestScore, player];
}