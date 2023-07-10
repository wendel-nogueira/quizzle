export default async function getClassificationByTheme(id: string): Promise<any> {
    const api = process.env.NEXT_PUBLIC_API_URL;
    let ranking = {};

    await fetch(`${api}/ranking/${id}`).then((response) => {
        return response.json();
    }).then((data) => {
        ranking = data;
    });

    return ranking;
}