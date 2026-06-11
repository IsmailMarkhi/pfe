import Navbar from "@/Components/Navbar";
import { Link } from "@inertiajs/react";

export default function Show({ order }) {

    function statusColor(status) {
        switch (status) {
            case "pending":
                return "text-yellow-600";
            case "shipped":
                return "text-purple-600";
            case "delivered":
                return "text-green-600";
            case "cancelled":
                return "text-red-600";
            default:
                return "text-gray-600";
        }
    }

    return (
        <div className="min-h-screen bg-gray-100">

            <Navbar />

            <div className="max-w-5xl mx-auto p-8">

                {/* Header */}
                <div className="flex justify-between items-center mb-6">

                    <h1 className="text-3xl font-bold text-purple-700">
                        Order #{order.id}
                    </h1>

                    <Link
                        href="/orders"
                        className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-2 rounded-lg shadow"
                    >
                        ← Back
                    </Link>

                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">

                    {/* Order info */}
                    <div className="mb-8 space-y-3 border-b pb-5">

                        <p className="text-lg">
                            <span className="font-bold">
                                Status:
                            </span>{" "}

                            <span className={`font-bold ${statusColor(order.status)}`}>
                                {order.status}
                            </span>

                        </p>

                        <p className="text-lg">
                            <span className="font-bold">
                                Total:
                            </span>{" "}
                            {order.total_price} DH
                        </p>

                    </div>

                    {/* Products */}
                    <div className="space-y-5">

                        {order.items.map((item) => (

                            <div
                                key={item.id}
                                className="bg-gray-50 rounded-xl shadow p-4 flex gap-5 items-center"
                            >

                                <img
                                    src={item.product.image}
                                    alt={item.product.name}
                                    className="w-28 h-28 object-cover rounded-lg border"
                                />

                                <div className="flex-1">

                                    <h2 className="text-2xl font-bold text-purple-700">
                                        {item.product.name}
                                    </h2>

                                    <p className="text-gray-600 mt-2">
                                        Quantity: {item.quantity}
                                    </p>

                                    <p className="text-gray-600">
                                        Unit Price: {item.price} DH
                                    </p>

                                    <p className="font-semibold mt-2 text-purple-700">
                                        Subtotal: {item.quantity * item.price} DH
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </div>
    );
}