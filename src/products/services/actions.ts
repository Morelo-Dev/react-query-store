import { type Product, productsApi } from "..";

interface getProductsOption {
    filterKey?: string;
}

const sleep = (seconds: number) => new Promise((resolve) => setTimeout(resolve, seconds * 1000));

export const getProducts = async ({ filterKey }: getProductsOption): Promise<Product[]> => {
    await sleep(2);
    const { data } = await productsApi.get<Product[]>(`/products${filterKey ? `?category=${filterKey}` : ''}`);
    return data;
}


export const getProductById = async (id: number): Promise<Product> => {
    await sleep(2);
    const { data } = await productsApi.get<Product>(`/products/${id}`);
    return data;
}