import Navbar from "@/Components/Navbar";
import { Link } from "@inertiajs/react";

export default function Index({ orders }) {
    return (
        <div className="p-6 max-w-5xl mx-auto">

            <Navbar />

            <h1 className="text-2xl font-bold mb-6">
                Orders
            </h1>

            <div className="space-y-4">

                {orders.map((order) => (

                    <div
                        key={order.id}
                        className="border rounded-lg p-4 shadow-sm bg-white"
                    >

                        <h2 className="font-semibold text-lg">
                            Order #{order.id}
                        </h2>

                        <div className="mt-2 text-gray-700">

                            <p>
                                <span className="font-medium">
                                    Total:
                                </span>{" "}
                                {order.total_price} DH
                            </p>

                            <p>
                                <span className="font-medium">
                                    Status:
                                </span>{" "}
                                {order.status}
                            </p>

                        </div>

                        <div className="mt-4">

                            <Link
                                href={`/orders/${order.id}`}
                                className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded"
                            >
                                View Details
                            </Link>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}