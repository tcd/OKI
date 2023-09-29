import { type ISxProps as SxProps } from "@app/theme"

const lineHeight = 1.3

const item: SxProps = {
    display: "flex",
    flexFlow: "column nowrap",
}

/** Term */
const dt: SxProps = {
    lineHeight,
    fontSize: "0.75em",
    color: "#6c757d",
    mb: 0.5,
}

/** Details */
const dd: SxProps = {
    lineHeight,
    display: "inline-block",
    marginInlineStart: "0px",
    fontSize: "0.95em",
    ml: 1,
}

// =============================================================================
// All Together Now
// =============================================================================

export default {
    item,
    dd,
    dt,
}
