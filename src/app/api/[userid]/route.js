import { connectSrt } from "../../../model/db"
import mongoose from "mongoose"
import { NextResponse } from "next/server"
import { Template } from "../../../model/template"


export async function  GET(req,res){
    await mongoose.connect(connectSrt)
    const id=res.params.userid
    const record={_id:id}
    const result=await Template.findById(record)
    return NextResponse.json({result,success:true})
}

export async function PUT(req,res){
    await mongoose.connect(connectSrt)
    const id=res.params.userid
    const data=await req.json();

    const record={_id:id}
    const result=await Template.findOneAndUpdate(record,data)
    return NextResponse.json({result,success:true})

}

export async function DELETE(req,res){
    await mongoose.connect(connectSrt)
    const id=res.params.userid
    const record={_id:id}
    const result= await Template.deleteOne(record)
    return NextResponse.json({result,success:true})
}