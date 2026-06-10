<?php

namespace App\Http\Controllers;

use App\Models\CartItem;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    public function index()
    {
        $items = CartItem::with('product')
            ->where('user_id', auth()->id())
            ->get();

        return Inertia::render('Cart/Index', [
            'items' => $items
        ]);
    }

    public function store(Product $product)
    {
        $item = CartItem::where('product_id', $product->id)
            ->where('user_id', auth()->id())
            ->first();

        if ($item) {
            $item->increment('quantity');
        } else {
            CartItem::create([
                'product_id' => $product->id,
                'user_id' => auth()->id(),
                'quantity' => 1
            ]);
        }

        return redirect('/cart');
    }

    public function update(Request $request, CartItem $cartItem)
    {
        abort_if($cartItem->user_id !== auth()->id(), 403);

        $request->validate([
            'quantity' => 'required|integer|min:1'
        ]);

        $cartItem->update([
            'quantity' => $request->quantity
        ]);

        return redirect('/cart');
    }

    public function destroy(CartItem $cartItem)
    {
        abort_if($cartItem->user_id !== auth()->id(), 403);

        $cartItem->delete();

        return redirect('/cart');
    }
}