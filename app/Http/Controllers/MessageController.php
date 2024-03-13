<?php

namespace App\Http\Controllers;

use App\Events\NewMessage;
use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use BeyondCode\LaravelWebSockets\WebSockets\Channels\ChannelManager;

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

        $validatedData = $request->validate([
            'content' => 'required|string', // Add validation as necessary
        ]);

        $message = new Message;
        $message->content = $validatedData['content'];
        $message->user_id = 3; // Add user_id as necessary
        $message->save();

        return response()->json($message, 201);
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
