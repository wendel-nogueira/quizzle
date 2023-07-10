export default async function deleteThemeById(id: number): Promise<any> {
    const api = process.env.NEXT_PUBLIC_API_URL;

    await fetch(`${api}/themes/${id}`, {
        method: 'DELETE'
    }).then((data) => {
        return;
    }).catch((error) => {
        throw new Error(error);
    });
}