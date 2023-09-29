import startCase from "lodash/startCase"
import camelCase from "lodash/camelCase"

export const titleCase = (s: string) => startCase(camelCase(s))
