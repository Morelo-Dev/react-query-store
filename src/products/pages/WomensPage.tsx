import { ProductList, useProducts } from ".."

export const WomensPage = () => {
  const { isLoading, isError, error, products, isFetching } = useProducts({ filterKey: "women's clothing" });	
{ isLoading && <p>Cargando...</p> }
{ isError && <p>Error: {error?.message}</p> }
{ isFetching && <p>Fetching...</p> }
  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para mujeres</h1>

      <ProductList products={products} />

    </div>
  )
}