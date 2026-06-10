import { useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        price: "",
        stock: "",
        description: "",
        size: "",
        image: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/products");
    }

    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="bg-white shadow rounded-lg p-8">
                <h1 className="text-3xl font-bold text-purple-700 mb-6">
                    Create Product
                </h1>

                <form onSubmit={submit} className="space-y-5">

                    <div>
                        <input
                            className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-purple-600"
                            placeholder="Product Name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            type="number"
                            className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-purple-600"
                            placeholder="Price"
                            value={data.price}
                            onChange={(e) => setData("price", e.target.value)}
                        />
                        {errors.price && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.price}
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            type="number"
                            className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-purple-600"
                            placeholder="Stock"
                            value={data.stock}
                            onChange={(e) => setData("stock", e.target.value)}
                        />
                        {errors.stock && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.stock}
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-purple-600"
                            placeholder="Size"
                            value={data.size}
                            onChange={(e) => setData("size", e.target.value)}
                        />
                    </div>

                    <div>
                        <input
                            className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-purple-600"
                            placeholder="Image URL"
                            value={data.image}
                            onChange={(e) => setData("image", e.target.value)}
                        />
                    </div>

                    <div>
                        <textarea
                            rows="4"
                            className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-purple-600"
                            placeholder="Description"
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 rounded transition"
                    >
                        {processing ? "Saving..." : "Save Product"}
                    </button>

                </form>
            </div>
        </div>
    );
}