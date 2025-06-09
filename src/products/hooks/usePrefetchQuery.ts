import { useQueryClient, QueryKey } from '@tanstack/react-query';

export const usePrefetchQuery = () => {
    const queryClient = useQueryClient();

    const prefetch = async <T>(
        queryKey: QueryKey,
        queryFn: () => Promise<T>,
        staleTime: number = 1000 * 60 * 5
    ) => {
        const exists = queryClient.getQueryData(queryKey);
        if (!exists) {
            await queryClient.prefetchQuery({ queryKey, queryFn, staleTime });
        }
    };


    return { prefetch };
};
