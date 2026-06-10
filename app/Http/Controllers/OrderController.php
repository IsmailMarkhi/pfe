<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItem;
use App\Models\CartItem;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function adminIndex()
    {
        $orders = Order::with('user')
            ->latest()
            ->get();

        return Inertia::render('Admin/Orders', [
            'orders' => $orders
        ]);
    }

    public function index()
    {
        $orders = Order::with('user')
            ->where('user_id', auth()->id())
            ->latest()
            ->get();

        return Inertia::render('Orders/Index', [
            'orders' => $orders
        ]);
    }

    public function store()
    {
        $cartItems = CartItem::with('product')
            ->where('user_id', auth()->id())
            ->get();

        if ($cartItems->isEmpty()) {
            return redirect('/cart');
        }

        $total = $cartItems->sum(function ($item) {
            return $item->product->price * $item->quantity;
        });

        $order = Order::create([
            'user_id' => auth()->id(),
            'total_price' => $total,
            'status' => 'pending',
        ]);

        foreach ($cartItems as $item) {

            OrderItem::create([
                'order_id' => $order->id,
                'product_id' => $item->product_id,
                'quantity' => $item->quantity,
                'price' => $item->product->price,
            ]);

            $item->product->decrement('stock', $item->quantity);
        }

        CartItem::where('user_id', auth()->id())->delete();

        return redirect('/orders');
    }

    public function show(Order $order)
    {
        abort_if($order->user_id !== auth()->id(), 403);

        return Inertia::render('Orders/Show', [
            'order' => $order->load('items.product')
        ]);
    }

    public function update(Request $request, Order $order)
{
    $request->validate([
        'status' => 'required|in:pending,shipped,delivered',
    ]);

    if (auth()->user()->role === 'admin') {

        $order->update([
            'status' => $request->status,
        ]);

        return redirect()->back();
    }

    abort_if($order->user_id !== auth()->id(), 403);

    $order->update([
        'status' => $request->status,
    ]);

    return redirect('/orders');
}

    public function destroy(Order $order)
    {
        abort_if($order->user_id !== auth()->id(), 403);

        $order->delete();

        return redirect('/orders');
    }
}