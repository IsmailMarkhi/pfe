import { router } from "@inertiajs/react";

export default function Index({ items }) {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            
            <h1 className="text-2xl font-bold mb-6">
                Shopping Cart
            </h1>

            <div className="space-y-4">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white p-4 rounded shadow flex justify-between items-center"
                    >
                        <div>
                            <h2 className="font-semibold text-lg">
                                {item.product.name}
                            </h2>

                            <p className="text-gray-600">
                                Quantity: {item.quantity}
                            </p>

                            <p className="text-gray-600">
                                Price: {item.product.price} DH
                            </p>
                        </div>

                        <button
                            onClick={() => router.post("/checkout")}
                            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                        >
                            Checkout
                        </button>
                    </div>
                ))}
            </div>

        </div>
    );
}