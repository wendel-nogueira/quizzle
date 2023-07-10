export default async function getThemes(): Promise<any> {
    const api = process.env.NEXT_PUBLIC_API_URL;
    let themes: never[] = [];

    await fetch(`${api}/themes`).then((response) => {
        return response.json();
    }).then((data) => {
        themes = data;
    });

    return themes;
}