import { useForm } from "@inertiajs/react";

export default function Edit({ product }) {
    const { data, setData, put, processing, errors } = useForm({
        name: product.name || "",
        price: product.price || "",
        stock: product.stock || "",
        size: product.size || "",
        image: product.image || "",
        description: product.description || "",
    });

    function submit(e) {
        e.preventDefault();

        put(`/products/${product.id}`);
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10">

            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">

                {/* Header */}
                <div className="flex justify-between items-center mb-8">

                    <button
                        onClick={() => window.history.back()}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
                    >
                        ← Back
                    </button>

                    <h1 className="text-3xl font-bold text-purple-700">
                        Edit Product
                    </h1>

                </div>

                <form onSubmit={submit} className="space-y-5">

                    {/* Name */}
                    <div>
                        <label className="font-semibold text-gray-700">
                            Product Name
                        </label>

                        <input
                            type="text"
                            className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />

                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* Price */}
                    <div>
                        <label className="font-semibold text-gray-700">
                            Price (MAD)
                        </label>

                        <input
                            type="number"
                            className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
                            value={data.price}
                            onChange={(e) => setData("price", e.target.value)}
                        />

                        {errors.price && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.price}
                            </p>
                        )}
                    </div>

                    {/* Stock */}
                    <div>
                        <label className="font-semibold text-gray-700">
                            Stock
                        </label>

                        <input
                            type="number"
                            className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
                            value={data.stock}
                            onChange={(e) => setData("stock", e.target.value)}
                        />

                        {errors.stock && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.stock}
                            </p>
                        )}
                    </div>

                    {/* Size */}
                    <div>
                        <label className="font-semibold text-gray-700">
                            Size
                        </label>

                        <input
                            type="text"
                            className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
                            value={data.size}
                            onChange={(e) => setData("size", e.target.value)}
                        />
                    </div>

                    {/* Image */}
                    <div>
                        <label className="font-semibold text-gray-700">
                            Image URL
                        </label>

                        <input
                            type="text"
                            className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
                            value={data.image}
                            onChange={(e) => setData("image", e.target.value)}
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="font-semibold text-gray-700">
                            Description
                        </label>

                        <textarea
                            rows="4"
                            className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                        />

                        {errors.description && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.description}
                            </p>
                        )}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 pt-6">

                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg shadow"
                        >
                            {processing ? "Updating..." : "Update Product"}
                        </button>

                        <button
                            type="button"
                            onClick={() => window.history.back()}
                            className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-lg"
                        >
                            Cancel
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}
