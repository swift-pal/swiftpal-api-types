export namespace Globals {
    export enum Currencies {
        EUR = "EUR",
        USD = "USD",
        GBP = "GBP"
    }
    export enum CryptoCurrencies {
        BTC = "BTC",
        ETH = "ETH",
        LTC = "LTC",
        EGLD = "EGLD"
    }
    export enum TransactionTypes {
        Transfer = "transfer",
        Conversion = "conversion",
        Payment = "payment"
    }
    export enum TransactionStatus {
        Pending = "pending",
        Failed = "failed",
        Completed = "completed"
    }
    export enum UserRoles {
        User = "user",
        PremiumUser = "premium",
        Admin = "admin"
    }
    export enum WalletTypes {
        Crypto = "Crypto",
        Fiat = "Fiat"
    }
    export enum Plans {
        Free = "Free",
        Premium = "Premium",
        Business = "Business"
    }
    export enum AllowedMethods {
        POST = "POST",
        GET = "GET",
        DELETE = "DELETE",
        PATCH = "PATCH",
        PUT = "PUT"
    }
}