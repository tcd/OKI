import { useDispatch, useSelector } from "react-redux"

import { Actions, Selectors } from "@app/state"
import { FullScreenDialog } from "@app/features/shared"
import { Content } from "./Content"

export const OkiModal = (): JSX.Element => {

    const dispatch = useDispatch()

    const open = useSelector(Selectors.Core.openModals.help)

    const handleClose = () => {
        dispatch(Actions.Core.closeModal("oki"))
    }

    return (
        <FullScreenDialog
            title="OKI"
            open={open}
            onClose={handleClose}
        >
            <Content />
        </FullScreenDialog>
    )
}
