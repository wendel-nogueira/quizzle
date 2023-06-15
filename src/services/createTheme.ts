export default async function createTheme({ tema, descricao }: { tema: string, descricao: string }): Promise<any> {
    return {
        id: 1,
        tema,
        descricao
    };
}
