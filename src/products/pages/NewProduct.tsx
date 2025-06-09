import { Button, Image, Input, Textarea } from "@nextui-org/react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useProductMutation } from "..";

interface FormsInputs {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const NewProduct = () => {
  const mutation = useProductMutation();

  const { control, handleSubmit, watch } = useForm<FormsInputs>({
    defaultValues: {
      title: 'teclado',
      price: 2000,
      description: 'loasdasdsadalsjd a uhdfaiaurigqwrdfiaiushd ah ahugdfipau iqueiagcjhgsaf dea sga gdpqu eqwf jjg gyfo yaday gauygdfoa gaygqghdlja goqiau yf ayh rjkhipsfy iugrwrtrqhoiqdpw9 qpioqr qy duyqjdhq gtq qf',
      category: "men's clothing",
      image: 'https://www.alkomprar.com/medias/196548244195-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxNTY2OHxpbWFnZS93ZWJwfGFERTFMMmd6WXk4eE5ETTBNVFl3T1RZMU1qSTFOQzh4T1RZMU5EZ3lORFF4T1RWZk1EQXhYemMxTUZkNE56VXdTQXw3MDBjY2M2ZGYxODI2M2U4YjBjYzdjYzU3ZDUzYmUzYzEwODFkYWMzM2Y1MjFkMDg5NmY0MDFlNTRiNGRkODY0',
    },
  });

  const newImage = watch('image');

  const onSubmit: SubmitHandler<FormsInputs> = (data: FormsInputs) => {
    mutation.mutate(data);
  };



  return (
    <div className="w-full flex-col">
      <h1 className="text-2xl font-bold">Nuevo producto</h1>

      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>

        <div className="flex justify-around items-center">

          <div className="flex-col w-[500px]">
            <Controller
              control={control}
              name="title"
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  value={field.value}
                  onChange={field.onChange}
                  className="mt-2"
                  type="text"
                  label="Titulo del producto" />
              )}
            />
            <Controller
              control={control}
              name="price"
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  value={field.value?.toString()}
                  onChange={ev => field.onChange(+ev.target.value)}
                  className="mt-2"
                  type="number"
                  label="Precio del producto" />
              )}
            />
            <Controller
              control={control}
              name="image"
              rules={{ required: true }}
              render={({ field }) => (

                <Input
                  value={field.value}
                  onChange={field.onChange}
                  className="mt-2" type="url" label="Url del producto" />
              )}
            />
            <Controller
              control={control}
              name="description"
              rules={{ required: true }}
              render={({ field }) => (
                <Textarea
                  value={field.value}
                  onChange={field.onChange}
                  className="mt-2" label="Descripcion del producto" />
              )}
            />
            <Controller
              control={control}
              name="category"
              rules={{ required: true }}
              render={({ field }) => (
                <select
                  value={field.value}
                  onChange={field.onChange}
                  className="rounded-md p-3 mt-2 bg-gray-800 w-full">
                  <option value="men's clothing">Men's clothing</option>
                  <option value="women's clothing">Women's clothing</option>
                  <option value="jewelery">Jewelery</option>
                  <option value="electronics">Electronics</option>
                </select>

              )}
            />

            <br />
            <Button
              isDisabled={mutation.isPending}
              className="mt-2" color="primary" type="submit">{mutation.isPending ? 'Cargando...' : 'Crear'}</Button>
          </div>

          <div className="bg-white rounded-2xl p-10 flex items-center" style={{
            width: '500px',
            height: '600px',
          }}>

            <Image
              src={newImage}
              alt="producto"
            />
          </div>

        </div>


      </form>

    </div>
  )
}