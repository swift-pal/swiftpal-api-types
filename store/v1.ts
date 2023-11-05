import { Globals } from "../globals";

export type Store = {
    ownerId: number;
    name: string;
    description: string;
    products: Product[];
    categories: Category[];
    enabled: boolean;
}

export type StoreCreateRequestBody = Omit<Store, "ownerId" | "products" | "categories" | "enabled">

export type Product = {
    name: string;
    description: string;
    price: number;
    currency: Globals.CryptoCurrencies | Globals.Currencies;
    image: string;
    shopId: number;
    categoryId: number;
}
export type Category = {
    name: string;
    description: string;
    products: Product[]
    shopId: number;
}

