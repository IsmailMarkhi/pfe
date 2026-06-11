<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Order;
use App\Models\User;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Dashboard', [
            'productsCount' => Product::count(),
            'ordersCount' => Order::count(),
            'usersCount' => User::count(),
            'revenue' => Order::where('status', 'delivered')->sum('total_price'),
        ]);
    }
}