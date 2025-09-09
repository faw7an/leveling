import { NextApiRequest,NextApiResponse } from "next";
import pool from "@/lib/db";
import { withAuth } from "@/lib/auth-middleware";

async function handler (req:NextApiRequest,res:NextApiResponse){
    const {
        playerId,
        title,
        description,
        category,
        duration,
        targetDate
    }:{
        playerId:string
        title:string,
        description:string,
        category:string,
        duration:number,
        targetDate:Date,
    } = req.body;
    if(req.method === 'POST'){

    }else{
        return res.status(500).json({message:'Method not allowed'});
    }
}

export default withAuth(handler);