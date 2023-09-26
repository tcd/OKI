import type { RootState } from "@app/state"

export type RequestSelector<T> = (s: RootState) => RequestState<T>

export type RequestSelectors<T> = {
    response: (s: RootState) => T
    status:   (s: RootState) => RequestStatus
    calling:  (s: RootState) => boolean
    complete: (s: RootState) => boolean
    rejected: (s: RootState) => boolean
}

export const createRequestSelectors = <T = any>(selector: RequestSelector<T>): RequestSelectors<T> => {

    const response = (s: RootState) => selector(s)?.response

    const status = (s: RootState) => selector(s)?.status

    const calling  = (s: RootState) => status(s) === "pending"
    const complete = (s: RootState) => status(s) === "fulfilled"
    const rejected = (s: RootState) => status(s) === "rejected"

    return {
        response,
        status,
        calling,
        complete,
        rejected,
    }
}
