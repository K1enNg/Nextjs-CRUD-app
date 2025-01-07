import connectMongoDB from "@/libs/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";


export async function PUT(request : Request, params : string) {
    const {id}: any = params;
    const {newTitle: title, newContent: content} = await request.json();
    await connectMongoDB();
    await Post.findByIdAndUpdate(id, {title, content});
    return NextResponse.json({message: "Topic updated"}, {status: 200});
}

export async function GET(params: string) {
    const {id}: any = params;
    await connectMongoDB();
    const post = await Post.findById(id);
    return NextResponse.json({post}, {status: 200})
}