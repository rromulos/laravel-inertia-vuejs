<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function index() {
        // $this->create();
        $posts = Post::all();

        return inertia('Home', compact('posts'));
    }

    public function create() {
        $post = new Post();
        $post->content = 'Content';
        $post->title = 'Title';
        $post->save();
    }
}
