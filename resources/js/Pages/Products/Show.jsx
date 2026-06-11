import Navbar from "@/Components/Navbar";
import { router, Link } from "@inertiajs/react";

export default function Show({ product, user }) {

    function addToCart() {
        router.post(`/cart/${product.id}`);
    }

    return (
        <div className="min-h-screen bg-gray-100">

            {user.role === "client" && <Navbar />}

            <div className="max-w-5xl mx-auto p-8">

                {/* Header */}
                <div className="flex justify-between items-center mb-6">

                    <h1 className="text-3xl font-bold text-purple-700">
                        Product Details
                    </h1>

                    <Link
                        href="/products"
                        className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-lg"
                    >
                        ← Back
                    </Link>

                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 flex gap-8">

                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-96 rounded-xl"
                    />

                    <div>

                        <h1 className="text-4xl font-bold text-purple-700">
                            {product.name}
                        </h1>

                        <p className="mt-4 text-gray-600">
                            {product.description}
                        </p>

                        <p className="mt-5 text-2xl font-bold">
                            {product.price} DH
                        </p>

                        <p className="mt-2">
                            Size: {product.size}
                        </p>

                        <p className="mt-2">
                            Stock: {product.stock}
                        </p>

                        {user.role === "client" && (
                            <button
                                onClick={addToCart}
                                className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
                            >
                                Add to Cart
                            </button>
                        )}

                    </div>

                </div>

            </div>

        </div>
    );
}