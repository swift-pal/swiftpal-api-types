import { Globals } from "../globals";
import { Store } from "../store";
import { IPData, PasswordData } from "../utils/v1";
import { Wallet } from "../wallet/v1";

export type User = {
    id: number;
    username: string;
    email: string;
    password: string;
    verified: boolean;
    verificationToken?: string;
    mfaCode?: string;
    premiumPlan: Globals.Plans;
    wallets: UserToWalletRelation[]
    passwordData: PasswordData;
    ips: IPData[]
    shop?: Store
    createdAt: Date;
}

export type UserToWalletRelation = {
    user: User;
    userId: number;
    wallet: Wallet;
    walletId: number;
}