import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({
    productsCount,
    ordersCount,
    revenue,
}) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold text-gray-800">
                    Admin Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-10">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div className="bg-white p-6 rounded shadow">
                            <h3 className="text-lg font-bold mb-3">
                                Products
                            </h3>

                            <p className="mb-4">
                                Number of products: {productsCount}
                            </p>

                            <Link
                                href="/admin/products"
                                className="bg-blue-600 text-white px-4 py-2 rounded"
                            >
                                Manage Products
                            </Link>
                        </div>

                        <div className="bg-white shadow rounded-xl p-6">
    <h2 className="text-lg font-semibold text-gray-600">
        Revenue
    </h2>

    <p className="text-3xl font-bold text-green-600 mt-3">
        {revenue} DH
    </p>
</div>

                        <div className="bg-white p-6 rounded shadow">
                            <h3 className="text-lg font-bold mb-3">
                                Orders
                            </h3>

                            <p className="mb-4">
                                Number of orders: {ordersCount}
                            </p>

                            <Link
                                href="/admin/orders"
                                className="bg-green-600 text-white px-4 py-2 rounded"
                            >
                                View Orders
                            </Link>
                        </div>

                        <div className="bg-white p-6 rounded shadow">
                            <h3 className="text-lg font-bold mb-3">
                                Add Product
                            </h3>

                            <p className="mb-4">
                                Create a new product.
                            </p>

                            <Link
                                href="/products/create"
                                className="bg-purple-600 text-white px-4 py-2 rounded"
                            >
                                Add Product
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}