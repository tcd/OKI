import { BasicFrame } from "./BasicFrame"
import { RealFrame } from "./RealFrame"

export type FrameProps = {
    frame: number
    kd: SF6.IOkiRow
}

export const Frame = (props: FrameProps): JSX.Element => {
    const {
        frame,
        kd,
    } = props

    if (!!!kd?.frameData) {
        return <BasicFrame frame={frame} />
    } else {
        return <RealFrame {...props} />
    }
}
