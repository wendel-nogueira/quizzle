export default async function getThemeById(id: string): Promise<any> {
    const api = process.env.NEXT_PUBLIC_API_URL;
    let theme = {};

    await fetch(`${api}/themes/${id}`).then((response) => {
        return response.json();
    }).then((data) => {
        theme = data;
    });

    return theme;
}
