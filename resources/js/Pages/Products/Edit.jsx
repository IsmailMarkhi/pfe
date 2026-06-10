import { useForm } from "@inertiajs/react";

export default function Edit({ product }) {
    const { data, setData, put, processing, errors } = useForm({
        name: product.name || "",
        price: product.price || "",
    });

    function submit(e) {
        e.preventDefault();
        put(`/products/${product.id}`);
    }

    return (
        <div className="p-6 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Edit Product</h1>

            <form onSubmit={submit} className="space-y-4">

                <div>
                    <input
                        className="w-full border p-2 rounded"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm">
                            {errors.name}
                        </p>
                    )}
                </div>

                <div>
                    <input
                        className="w-full border p-2 rounded"
                        value={data.price}
                        onChange={(e) => setData("price", e.target.value)}
                    />
                    {errors.price && (
                        <p className="text-red-500 text-sm">
                            {errors.price}
                        </p>
                    )}
                </div>

             
                    <div>
                    <input
                        className="w-full border p-2 rounded"
                        placeholder="Stock"
                        value={data.stock}
                        onChange={(e) => setData("stock", e.target.value)}
                    />
                    {errors.stock && (
                        <p className="text-red-500 text-sm">{errors.stock}</p>
                    )}
                </div>

                <div>
                    <textarea
                        className="w-full border p-2 rounded"
                        placeholder="Description"
                        value={data.description}
                        onChange={(e) =>
                            setData("description", e.target.value)
                        }
                    />
                    {errors.description && (
                        <p className="text-red-500 text-sm">
                            {errors.description}
                        </p>
                    )}
                </div>
           

                <button
                    type="submit"
                    disabled={processing}
                    className="bg-yellow-500 text-white px-4 py-2 rounded"
                >
                    Update
                </button>

            </form>
        </div>
    );
}