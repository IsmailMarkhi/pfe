import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";

export default function Orders({ orders }) {

    function changeStatus(order, status) {
        router.put(`/admin/orders/${order.id}`, {
            status,
        });
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-bold text-purple-800">
                    Orders Management
                </h2>
            }
        >
            <Head title="Orders" />

            <div className="max-w-6xl mx-auto p-8">

                <div className="space-y-6">

                    {orders.map((order) => (

                        <div
                            key={order.id}
                            className="bg-white rounded-xl shadow p-6 border"
                        >

                            <h2 className="text-2xl font-bold text-purple-800 mb-4">
                                Order #{order.id}
                            </h2>

                            <div className="space-y-2">

                                <p>
                                    <span className="font-bold">
                                        Client:
                                    </span>{" "}
                                    {order.user?.name}
                                </p>

                                <p>
                                    <span className="font-bold">
                                        Total:
                                    </span>{" "}
                                    {order.total_price} DH
                                </p>

                                <p>
                                    <span className="font-bold">
                                        Status:
                                    </span>{" "}

                                    <span
                                        className={
                                            order.status === "delivered"
                                                ? "text-green-600 font-bold"
                                                : order.status === "shipped"
                                                ? "text-blue-600 font-bold"
                                                : "text-yellow-600 font-bold"
                                        }
                                    >
                                        {order.status}
                                    </span>
                                </p>

                            </div>

                            <div className="flex gap-3 mt-5">

                                <button
                                    onClick={() =>
                                        changeStatus(order, "pending")
                                    }
                                    className="bg-yellow-500 text-white px-4 py-2 rounded"
                                >
                                    Pending
                                </button>

                                <button
                                    onClick={() =>
                                        changeStatus(order, "shipped")
                                    }
                                    className="bg-blue-600 text-white px-4 py-2 rounded"
                                >
                                    Shipped
                                </button>

                                <button
                                    onClick={() =>
                                        changeStatus(order, "delivered")
                                    }
                                    className="bg-green-600 text-white px-4 py-2 rounded"
                                >
                                    Delivered
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </AuthenticatedLayout>
    );
}