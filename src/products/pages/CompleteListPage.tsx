import { ProductList, useProducts } from ".."


export const CompleteListPage = () => {
  const { isLoading, isError, error, products, isFetching } = useProducts({});

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Todos los productos</h1>
      { isLoading && <p>Cargando...</p> }
      { isError && <p>Error: {error?.message}</p> }
      { isFetching && <p>Fetching...</p> }
      <ProductList products={products} />

    </div>
  )
}