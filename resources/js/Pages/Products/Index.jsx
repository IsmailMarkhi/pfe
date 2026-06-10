import { router, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";

export default function Index({ products, user }) {

    function deleteProduct(id) {
        if (confirm("Delete this product ?")) {
            router.delete(`/products/${id}`);
        }
    }

    function toggleActive(product) {
        router.put(`/products/${product.id}`, {
            ...product,
            is_active: !product.is_active,
        });
    }

    function addToCart(id) {
        router.post(`/cart/${id}`);
    }

    return (
        <div className="max-w-7xl mx-auto p-8">

            {user.role === "client" && <Navbar />}

            <div className="flex justify-between items-center mb-8">

                {user.role === "client" && (
                    <h1 className="text-4xl font-bold text-purple-800">
                        Tsports
                    </h1>
                )}

                {user.role === "admin" && (
                    <>
                        <h1 className="text-4xl font-bold text-purple-800">
                            Products
                        </h1>

                        <Link
                            href="/products/create"
                            className="bg-purple-700 hover:bg-purple-800 text-white px-5 py-3 rounded-lg shadow"
                        >
                            + Add Product
                        </Link>
                    </>
                )}

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                {products.map((p) => (

                    <div
                        key={p.id}
                        className="bg-white rounded-xl shadow-lg overflow-hidden border"
                    >

                        <img
                            src={p.image}
                            alt={p.name}
                            className="w-full h-60 object-cover"
                        />

                        <div className="p-5">

                            <h2 className="text-2xl font-bold text-purple-800">
                                {p.name}
                            </h2>

                            <p className="text-gray-600 mt-2">
                                {p.description}
                            </p>

                            <div className="mt-4 space-y-1">

                                <p>
                                    <span className="font-bold">
                                        Price:
                                    </span>{" "}
                                    {p.price} MAD
                                </p>

                                {p.size && (
                                    <p>
                                        <span className="font-bold">
                                            Size:
                                        </span>{" "}
                                        {p.size}
                                    </p>
                                )}

                                <p>
                                    <span className="font-bold">
                                        Stock:
                                    </span>{" "}
                                    {p.stock}
                                </p>

                                <p>
                                    Status:
                                    <span
                                        className={
                                            p.is_active
                                                ? "text-green-600 font-bold ml-2"
                                                : "text-red-600 font-bold ml-2"
                                        }
                                    >
                                        {p.is_active ? "Active" : "Inactive"}
                                    </span>
                                </p>

                            </div>

                            <div className="flex flex-wrap gap-2 mt-6">

                                {user.role === "client" && (
                                    <button
                                        onClick={() => addToCart(p.id)}
                                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                                    >
                                        Add to Cart
                                    </button>
                                )}

                                {user.role === "admin" && (
                                    <>
                                        <Link
                                            href={`/products/${p.id}/edit`}
                                            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                                        >
                                            Edit
                                        </Link>

                                        <button
                                            onClick={() => toggleActive(p)}
                                            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
                                        >
                                            {p.is_active
                                                ? "Deactivate"
                                                : "Activate"}
                                        </button>

                                        <button
                                            onClick={() => deleteProduct(p.id)}
                                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                                        >
                                            Delete
                                        </button>
                                    </>
                                )}

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}