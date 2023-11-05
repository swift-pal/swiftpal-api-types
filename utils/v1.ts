export type PasswordData = {
    id: number;
    userId: number;
    oldPasswords: string[];
    resetCode?: string;
}

export type IPData = {
    id: number;
    userId: number;
    ip: string;
    country?: string;
    city?: string;
}

export type Response<T> = {
    success: boolean,
    message: string,
    data: T | null | undefined,
    code: number
}

export type CRUDParamsType = {
    id?: string
}

export type AsyncResponse<T> = Promise<Response<T>>