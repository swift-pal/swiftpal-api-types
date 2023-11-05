import type { Globals } from "../globals";
import { User } from "../user";

export type ExchangeCreateRequestBody = {
    amount: number;
    from: Globals.Currencies;
    to: Globals.Currencies
}
export type TransferCreateRequestBody = {
    from: number;
    to: number;
    amount: number
    currency: Globals.Currencies
}


export type Transaction = {
    id: number;
    fromWalletId: number;
    toWalletId: number;
    currencyFrom: Globals.CryptoCurrencies | Globals.Currencies;
    currencyTo: Globals.CryptoCurrencies | Globals.Currencies;
    amount: number;
    type: Globals.TransactionTypes;
    status: Globals.TransactionStatus;
    createdAt: Date;
    updatedAt: Date;
}


export type TransactionClassType = Omit<Transaction, "fromWalletId" | "toWalletId" | "fromWallet" | "toWallet"> & {user: User | null, target: User | null, transaction: Transaction | null, type: Globals.TransactionTypes, currencyFrom: Globals.CryptoCurrencies | Globals.Currencies, currencyTo: Globals.CryptoCurrencies | Globals.Currencies, amount2: number}