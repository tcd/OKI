export declare global {

    export type RequestStatus = "idle" | "pending" | "fulfilled" | "rejected"

    export interface RequestState<T> {
        status: RequestStatus
        response?: T
        error?: any
        calledAt?: Timestamp
        fulfilledAt?: Timestamp
    }
}
