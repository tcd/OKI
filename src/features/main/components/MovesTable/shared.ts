export const EXCLUDED_COLUMNS = [
    "section",
    "Combo Scaling",
    "Properties",
    "Miscellaneous",
    "driveGain_hit",
    "driveDrain_block",
    "driveDrain_punishCounter",
    "superGain",
    "inputString",
]

export const filterColumns = (frameData: SF6.ICharacterFrameData[]): (keyof SF6.ICharacterFrameData)[] => {
    return Object.keys(frameData[0]).filter(x => !EXCLUDED_COLUMNS.includes(x)) as (keyof SF6.ICharacterFrameData)[]
}
