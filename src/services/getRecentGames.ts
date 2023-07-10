export default async function getRecentGames(): Promise<any> {
    let recentGames: any[] = [];
    
    const api = process.env.NEXT_PUBLIC_API_URL;

    await fetch(`${api}/game/recent`).then((response) => {
        return response.json();
    }).then((data) => {
        recentGames = data;
        console.log(recentGames);
    });

    return recentGames;
}