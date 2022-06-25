<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Resources\ForumResource;

class ForumController extends Controller
{
    public function getUserForums(Request $request)
    {
        $forums = $request->user()->forums()->get();

        return ForumResource::collection($forums);
    }
}
