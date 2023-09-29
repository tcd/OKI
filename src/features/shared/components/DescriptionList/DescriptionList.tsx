import type { ReactNode } from "react"
import { Box, Stack } from "@mui/material"
import type { StackProps } from "@mui/material"
import { isBlank } from "@mlxb/coolkit"

import { None } from "@app/features/shared/components/None"
import sx from "./sx"

export interface DLDetail {
    /** Description Term */
    term: string | number
    /** Description Details */
    details: ReactNode
}

export interface DescriptionListProps extends StackProps<"dl"> {
    items: DLDetail[]
    /** @default "0.85em" */
    spacing?: StackProps<"dl">["spacing"]
    titleColor?: string
}

/**
 * Description List component
 *
 * @see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)
 */
export const DescriptionList = (props: DescriptionListProps): JSX.Element => {
    const {
        items = [],
        spacing = "0.85em",
        titleColor = undefined,
        ...otherProps
    } = props

    const itemElements = items.map((item) => (
        <DLItem
            key={`description-list--${item.term}`}
            term={item.term}
            details={item.details}
            titleColor={titleColor}
        />
    ))

    return (
        <Stack
            component="dl"
            spacing={spacing}
            {...otherProps}
        >
            {itemElements}
        </Stack>
    )
}

// =============================================================================

export interface DescriptionListItemProps extends DLDetail {
    titleColor?: string
}

export const DLItem = (props: DescriptionListItemProps): JSX.Element => {
    const {
        term,
        details,
        titleColor = undefined,
    } = props

    const $detail = isBlank(details) ? <None /> : details

    const dtSx = titleColor ? {
        ...sx.dt,
        color: titleColor,
    } : sx.dt

    return (
        <Box sx={sx.item}>
            <Box component="dt" sx={dtSx}>{term}</Box>
            <Box component="dd" sx={sx.dd}>{$detail}</Box>
        </Box>
    )
}
