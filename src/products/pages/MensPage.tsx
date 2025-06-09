import { ProductList, useProducts } from ".."

export const MensPage = () => {
  const { isLoading, isError, error, products, isFetching } = useProducts({ filterKey: "men's clothing" });

  { isLoading && <p>Cargando...</p> }
  { isError && <p>Error: {error?.message}</p> }
  { isFetching && <p>Fetching...</p> }

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para hombres</h1>

      <ProductList products={products} />

    </div>
  )
}