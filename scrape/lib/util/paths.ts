import { IPathname, Pathname } from "pathname-ts"

const _PROJECT_ROOT = process.cwd()
const PROJECT_ROOT: IPathname = new Pathname(_PROJECT_ROOT)

export const PATHS = {
    PROJECT_ROOT,
    TMP_FOLDER: PROJECT_ROOT.join("tmp"),
}
