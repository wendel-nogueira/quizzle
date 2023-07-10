export default async function getWrongByTheme(): Promise<any> {
    let wrongByTheme: any = [];
    const api = process.env.NEXT_PUBLIC_API_URL;

    await fetch(`${api}/game/countFails`).then((response) => {
        return response.json();
    }).then((data) => {
        wrongByTheme = data;
    });

    return wrongByTheme;
}