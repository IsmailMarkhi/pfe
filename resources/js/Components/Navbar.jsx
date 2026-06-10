import { Link } from "@inertiajs/react";

export default function Navbar() {
    return (
        <div className="bg-gray-800 text-white px-6 py-4 flex justify-between">
            <h1 className="font-bold text-xl">
                Tsports
            </h1>

            <div className="space-x-4">
                <Link href="/products">
                    Products
                </Link>

                <Link href="/cart">
                    Cart
                </Link>

                <Link href="/orders">
                    Orders
                </Link>

                <Link
                    href={route('logout')}
                    method="post"
                    as="button"
                    className="bg-red-600 px-3 py-2 rounded"
                >
                    Logout
                </Link>
            </div>
        </div>
    );
}