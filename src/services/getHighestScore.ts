export default async function getHighestScore(): Promise<[number, string]> {
    const highestScore = 1000;
    const player = 'teste';

    return [highestScore, player];
}