import connectMongoDB from "@/libs/mongodb"
import Post from "@/models/post"
import { url } from "inspector";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const {title, content} = await request.json();
    await connectMongoDB();
    await Post.create({title, content})
    return NextResponse.json({message: "Post created"}, {status: 201})
}

export async function GET() {
    await connectMongoDB();
    const posts = await Post.find();
    return NextResponse.json({posts});
}

export async function DELETE(request: Request) {
    const url = new URL(request.url)
    const id = url.searchParams.get("id")
    await connectMongoDB();
    await Post.findByIdAndDelete(id);
    return NextResponse.json({message: "Post deleted"}, {status: 200})
}