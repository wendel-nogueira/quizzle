export default async function createTheme({ tema, descricao }: { tema: string, descricao: string }): Promise<any> {
    const api = process.env.NEXT_PUBLIC_API_URL;
    let theme = {};

    await fetch(`${api}/themes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ tema, descricao })
    }).then((response) => {
        if (response.status !== 201) {
            throw new Error('Não foi possível criar o tema!');
        }

        return response.json();
    }).then((data) => {
        theme = data;
    });

    return theme;
}
