import { useDispatch, useSelector } from "react-redux"

import { Actions, Selectors } from "@app/state"
import { FullScreenDialog } from "@app/features/shared"
import { MoveForms } from "@app/features/main/components/forms/MoveForms"

export const OkiModal = (): JSX.Element => {

    const dispatch = useDispatch()

    const open = useSelector(Selectors.Core.openModals.oki)

    const handleClose = () => {
        dispatch(Actions.Core.closeModal("oki"))
    }

    return (
        <FullScreenDialog
            title="OKI"
            open={open}
            onClose={handleClose}
        >
            <MoveForms />
        </FullScreenDialog>
    )
}
