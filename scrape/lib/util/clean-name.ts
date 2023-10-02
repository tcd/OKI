export const cleanName = (input: string): string => {
    let result = `${input}`
    for (const { from, to } of REPLACEMENTS) {
        // @ts-ignore: next-line
        result = result.replaceAll(from, to)
    }
    return result
}

const REPLACEMENTS = [
    { from: "（", to: "(" },
    { from: "）", to: ")" },
    { from: "％", to: "%" },
]
