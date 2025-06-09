import { useParams } from "react-router-dom";
import { ProductCard, useProduct } from ".."
import { useEffect } from "react";


export const ProductById = () => {
  const { id } = useParams();
  const { isLoading, isError, error, product, isFetching } = useProduct({ id: +id! });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">productos</h1>
      {isLoading && <p>Cargando...</p>}
      {isError && <p>Error: {error?.message}</p>}
      {isFetching && <p>Fetching...</p>}
      {
        product && (<ProductCard product={product} fulllDescription />)
      }
    </div>
  )
}