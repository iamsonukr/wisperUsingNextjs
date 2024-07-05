import mongoose from "mongoose";
import { Template } from "../../model/template";
import { connectSrt } from "../../model/db";
import { NextResponse } from "next/server";

export async function GET(req,res){
    await mongoose.connect(connectSrt)
    const docs=await Template.find();
    return NextResponse.json({result:docs})
}

export async function POST(req,res){
    await mongoose.connect(connectSrt)
    const docs=await req.json()
    let product=new Template(docs)
    let result=await product.save()
    return NextResponse.json({result,success:true})
}