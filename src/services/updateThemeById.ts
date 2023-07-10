export default async function updateThemeById(id: string, { tema, descricao }: { tema: string, descricao: string }): Promise<any> {
    const api = process.env.NEXT_PUBLIC_API_URL;
    let theme = {};

    await fetch(`${api}/themes/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ tema, descricao })
    }).then((response) => {
        if (response.status !== 200) {
            throw new Error('Tema não encontrado!');
        }

        return response.json();
    }).then((data) => {
        theme = data;
    });

    return theme;
}
