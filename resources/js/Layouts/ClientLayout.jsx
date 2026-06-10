import { Link } from "@inertiajs/react";

export default function ClientLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-100">

            <nav className="bg-purple-700 text-white px-8 py-4 flex justify-between">

                <h1 className="font-bold text-3xl">
                    Tsports
                </h1>

                <div className="space-x-6">
                    <Link href="/products">Products</Link>

                    <Link href="/cart">Cart</Link>

                    <Link href="/orders">Orders</Link>

                    <Link href="/profile">
                        Profile
                    </Link>
                </div>

            </nav>

            <main className="p-8">
                {children}
            </main>

        </div>
    );
}