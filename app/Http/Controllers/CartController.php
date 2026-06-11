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

       
        if ($item->quantity >= $product->stock) {
            return redirect('/cart');
        }

        $item->increment('quantity');
    } else {

      
        if ($product->stock <= 0) {
            return redirect('/products');
        }

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

    
    if ($request->quantity > $cartItem->product->stock) {
        return redirect('/cart');
    }

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