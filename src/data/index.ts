import aki      from "./json/aki.json"
import blanka   from "./json/blanka.json"
import cammy    from "./json/cammy.json"
import chunli   from "./json/chunli.json"
import deejay   from "./json/deejay.json"
import dhalsim  from "./json/dhalsim.json"
import ehonda   from "./json/ehonda.json"
import guile    from "./json/guile.json"
import jamie    from "./json/jamie.json"
import jp       from "./json/jp.json"
import juri     from "./json/juri.json"
import ken      from "./json/ken.json"
import kimberly from "./json/kimberly.json"
import lily     from "./json/lily.json"
import luke     from "./json/luke.json"
import manon    from "./json/manon.json"
import marisa   from "./json/marisa.json"
import rashid   from "./json/rashid.json"
import ryu      from "./json/ryu.json"
import zangief  from "./json/zangief.json"

export const FRAME_DATA: Record<SF6.CharacterNameClean, SF6.ICharacterFrameData[]> = {
    aki:      aki as SF6.ICharacterFrameData[],
    blanka:   blanka as SF6.ICharacterFrameData[],
    cammy:    cammy as SF6.ICharacterFrameData[],
    chunli:   chunli as SF6.ICharacterFrameData[],
    deejay:   deejay as SF6.ICharacterFrameData[],
    dhalsim:  dhalsim as SF6.ICharacterFrameData[],
    ehonda:   ehonda as SF6.ICharacterFrameData[],
    guile:    guile as SF6.ICharacterFrameData[],
    jamie:    jamie as SF6.ICharacterFrameData[],
    jp:       jp as SF6.ICharacterFrameData[],
    juri:     juri as SF6.ICharacterFrameData[],
    ken:      ken as SF6.ICharacterFrameData[],
    kimberly: kimberly as SF6.ICharacterFrameData[],
    lily:     lily as SF6.ICharacterFrameData[],
    luke:     luke as SF6.ICharacterFrameData[],
    manon:    manon as SF6.ICharacterFrameData[],
    marisa:   marisa as SF6.ICharacterFrameData[],
    rashid:   rashid as SF6.ICharacterFrameData[],
    ryu:      ryu as SF6.ICharacterFrameData[],
    zangief:  zangief as SF6.ICharacterFrameData[],
}

export const getCharacterFrameData = (character: SF6.CharacterNameClean): SF6.ICharacterFrameData[] => FRAME_DATA[character]

export const getMoveFrameData = (character: SF6.CharacterNameClean, moveName: string): SF6.ICharacterFrameData => {
    return getCharacterFrameData(character).find((move) => move.name == moveName)
}
