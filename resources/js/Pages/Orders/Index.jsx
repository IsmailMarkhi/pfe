import Navbar from "@/Components/Navbar";
export default function Index({ orders }) {
    return (
        <div className="p-6 max-w-5xl mx-auto">
            <Navbar />
            <h1 className="text-2xl font-bold mb-6">Orders</h1>

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
                                    Customer:
                                </span>{" "}
                                {order.user ? order.user.name : "Unknown"}
                            </p>

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
                                <span
                                    className={
                                        order.status === "completed"
                                            ? "text-green-600"
                                            : "text-yellow-600"
                                    }
                                >
                                    {order.status}
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}