export const tryParseInt = (str: string): number | null => {
    const tried = parseInt(str)
    return isNaN(tried) ? null : tried
}
