export default async function deleteQuestionById(id: number): Promise<any> {
    const api = process.env.NEXT_PUBLIC_API_URL;

    await fetch(`${api}/questions/${id}`, {
        method: 'DELETE'
    }).then((data) => {
        return;
    }).catch((error) => {
        throw new Error(error);
    });
}