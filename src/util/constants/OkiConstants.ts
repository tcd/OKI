import range from "lodash/range"

const DOT = "·"
const FRAMES_RANGE = range(1, 120)
const ROWS_RANGE   = range(1, 7) as unknown as SF6.OkiRowNumber[]

export const OkiConstants = {
    DOT,
    FRAMES_RANGE,
    ROWS_RANGE,
}
