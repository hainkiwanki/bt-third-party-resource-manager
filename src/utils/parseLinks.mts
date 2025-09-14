export function extractUnityAssetLinks(input: string): string[] {
    const regex = /https:\/\/assetstore\.unity\.com\/packages\/(?:slug\/\d+|[^ \n\r\t]+)/g;
    const matches = input.match(regex);
    return matches ? [...new Set(matches)] : [];
}

export async function readTextFromFile(file: File): Promise<string> {
    return await file.text();
}
