export default async function updateThemeById(id: number, { tema, descricao }: { tema: string, descricao: string }): Promise<any> {
    return {
        id,
        tema,
        descricao
    };
}
