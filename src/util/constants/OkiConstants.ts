import range from "lodash/range"

const DOT = "·"
const FRAMES_RANGE = range(1, 120)
const ROWS_RANGE   = range(1, 7) as unknown as SF6.OkiRowNumber[]

const ASTERISK_I_GUESS: SF6.T_ASTERISK_I_GUESS = "※"

// @ts-ignore: next-line
export const CANCEL_TRANSLATIONS: SF6.TMoveCancel = {
    C:   "Can be canceled by a special move, Drive Impact, Drive Rush or Super Art",
    SA:  "Can only be canceled by a Super Art",
    SA2: "Can only be canceled by a level 2 or 3 Super Art",
    SA3: "Can only be canceled by a level 3 Super Art or Critical Art",
    "*": "Can only be canceled by specific attacks",
    [`${ASTERISK_I_GUESS}`]: "Can only be canceled by specific attacks",
}

export const OkiConstants = {
    DOT,
    FRAMES_RANGE,
    ROWS_RANGE,
    ASTERISK_I_GUESS,
}
