<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class MessageController extends Controller
{
    //get data
    public function index()
    {
        $posts = Message::all();
        return response()->json($posts, Response::HTTP_OK);
    }

    //post
    public function store(Request $request)
    {
        $message = Message::create($request->all());

        event(new MessageSent($message));

        return response()->json($message);
    }

    //delete
    public function destroy($id)
    {
        $post = Message::find($id);

        if (!$post) {
            return response()->json(['message' => 'Post not found'], Response::HTTP_NOT_FOUND);
        }

        $post->delete();
        return response()->json(['message' => 'Post deleted'], Response::HTTP_OK);
    }
}
