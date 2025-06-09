import { type Product, productsApi } from "..";

interface getProductsOption {
    filterKey?: string;
}

// export const sleep = (seconds: number) => new Promise((resolve) => setTimeout(resolve, seconds * 1000));

export const getProducts = async ({ filterKey }: getProductsOption): Promise<Product[]> => {
    // await sleep(2);
    const { data } = await productsApi.get<Product[]>(`/products${filterKey ? `?category=${filterKey}` : ''}`);
    return data;
}


export const getProductById = async (id: number): Promise<Product> => {
    // await sleep(2);
    const { data } = await productsApi.get<Product>(`/products/${id}`);
    return data;
}


export interface ProductLike {
    id?: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}
export const createProduct = async (product: ProductLike) => {
    // await sleep(2);
    const { data } = await productsApi.post<Product>('/products', product);
    return data;
}