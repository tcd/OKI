const LONG_NAMES_MAP: Record<SF6.CharacterNameClean, string> = {
    aki:      "A.K.I.",
    blanka:   "Blanka",
    cammy:    "Cammy",
    chunli:   "Chun-Li",
    deejay:   "Dee Jay",
    dhalsim:  "Dhalsim",
    ehonda:   "E. Honda",
    guile:    "Guile",
    jamie:    "Jamie",
    jp:       "JP",
    juri:     "Juri",
    ken:      "Ken",
    kimberly: "Kimberly",
    lily:     "Lily",
    luke:     "Luke",
    manon:    "Manon",
    marisa:   "Marisa",
    rashid:   "Rashid",
    ryu:      "Ryu",
    zangief:  "Zangief",
}

export const prettyCharacterName = (cleanName: SF6.CharacterNameClean): string => LONG_NAMES_MAP[cleanName]

export const CHARACTER_OPTIONS = Object.entries(LONG_NAMES_MAP).map(([value, title]) => ({ value, title }))
