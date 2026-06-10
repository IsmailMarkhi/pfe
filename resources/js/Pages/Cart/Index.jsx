import { router } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
export default function Index({ items }) {

    const total = items.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
    );

    function increase(item) {
        router.put(`/cart/${item.id}`, {
            quantity: item.quantity + 1,
        });
    }

    function decrease(item) {
        if (item.quantity > 1) {
            router.put(`/cart/${item.id}`, {
                quantity: item.quantity - 1,
            });
        }
    }

    function removeItem(item) {
        if (confirm("Remove this product?")) {
            router.delete(`/cart/${item.id}`);
        }
    }

    function checkout() {
        router.post("/orders");
    }

    return (
        
        <div className="min-h-screen bg-gray-100 p-8">
            <Navbar />

            <h1 className="text-4xl font-bold text-purple-800 mb-8 mt-8">
                Shopping Cart
            </h1>

            <div className="space-y-6">

                {items.map((item) => (

                    <div
                        key={item.id}
                        className="bg-white rounded-xl shadow-lg p-6 flex justify-between items-center"
                    >

                        <div className="flex gap-6">

                            <img
                                src={item.product.image}
                                alt={item.product.name}
                                className="w-32 h-32 object-cover rounded-lg"
                            />

                            <div>

                                <h2 className="text-2xl font-bold text-purple-800">
                                    {item.product.name}
                                </h2>

                                <p className="text-gray-600 mt-2">
                                    Price: {item.product.price} MAD
                                </p>

                                <p className="text-gray-600">
                                    Quantity: {item.quantity}
                                </p>

                                <p className="font-bold mt-2">
                                    Total:
                                    {" "}
                                    {item.product.price * item.quantity} MAD
                                </p>

                            </div>

                        </div>

                        <div className="flex flex-col gap-3">

                            <button
                                onClick={() => increase(item)}
                                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                            >
                                +
                            </button>

                            <button
                                onClick={() => decrease(item)}
                                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                            >
                                -
                            </button>

                            <button
                                onClick={() => removeItem(item)}
                                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                            >
                                Remove
                            </button>

                        </div>

                    </div>

                ))}

            </div>

            {items.length > 0 && (

                <div className="mt-10 bg-white rounded-xl shadow-lg p-6">

                    <h2 className="text-2xl font-bold text-purple-800">
                        Cart Summary
                    </h2>

                    <p className="text-xl mt-4">
                        Total Price:
                        <span className="font-bold ml-2">
                            {total} MAD
                        </span>
                    </p>

                    <button
                        onClick={checkout}
                        className="mt-6 bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg"
                    >
                        Checkout
                    </button>

                </div>

            )}

        </div>
    );
}