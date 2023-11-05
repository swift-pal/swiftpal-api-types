export type RegisterRequestBody = {
    username: string;
    email: string;
    password: string;
}

export type LoginRequestBody = {
    username: string;
    password: string;
}

export type VerifyRequestParams = {
    token?: string;
}

export type ForgotPasswordRequestBody = {
    email: string;
}

export type ResetPasswordRequestBody = {
    token: string;
    password: string;
    id: number;
}

export type MFARequestBody = {
    code: string;
    email: string;
}

export type UpdateUserRequestBody = {
    username?: string;
    email?: string;
    password?: string;
}
