import { Globals } from "../globals";
import { Transaction } from "../transaction/v1";

export type BalanceResponse = Array<Record<Globals.CryptoCurrencies | Globals.Currencies, number> | null>

export type Balance = {
    currency: Globals.CryptoCurrencies | Globals.Currencies;
    amount: number;
    address?: string;
    walletId: number;
}

export type Wallet = {
    balance: Balance[];
    type: Globals.WalletTypes;
    userId: number;
    receivedTransactions: Transaction[];
    sentTransactions: Transaction[];
}

export type BalanceRequestBody = {
    balances: Globals.CryptoCurrencies[] | Globals.Currencies[]
    type: Globals.WalletTypes
}

