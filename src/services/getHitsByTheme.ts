export default async function getHitsByTheme(): Promise<any> {
    let hitsByTheme: any[] = [];
    const api = process.env.NEXT_PUBLIC_API_URL;

    await fetch(`${api}/game/countHits`).then((response) => {
        return response.json();
    }).then((data) => {
        hitsByTheme = data;
    });

    return hitsByTheme;
}