import mongoose from 'mongoose'

const itemModel=new mongoose.Schema(
    {
        title:String,
        author:String,
        date:String,
        category:String,
        content:String
    }
)

export const Template= mongoose.models.Blogs || mongoose.model("Blogs",itemModel)