import { productActions, usePrefetchQuery } from "..";

export const usePrefetches = () => {
    const { prefetch } = usePrefetchQuery();

    const prefetchProduct = (id: number) =>
        prefetch(['product', id], () => productActions.getProductById(id));
    

    return {
        prefetchProduct,
    };
};
