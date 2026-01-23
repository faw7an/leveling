import { NextApiRequest,NextApiResponse } from "next/types";
import pool from "@/lib/db";
import { withAuth } from "@/lib/auth-middleware";

async function handler(req: NextApiRequest, res:NextApiResponse){
    if(req.method!="GET"){
        res.status(405).json({message:"Methode not allowed"});
    }

    try{
        const userId = req.user?.userId;

        if(!userId){
           return res.status(401).json({message: "Unauthorized"});
        }

        const userResult = await pool.query(
            "SELECT id,name,email,username,isverified,created_at FROM users WHERE id=$1",[userId]
        );

        const user = userResult.rows[0];

        if(!user){
            return res.status(404).json({message:"User not found"});
        }

        const playerResult = await pool.query(
            "SELECT * FROM players WHERE user_id=$1",[userId]
        );

        const player = playerResult.rows[0];
        
        return res.status(200).json({
            user,
            player:player || null,
            isPlayer: !!player
        })

    }catch(err){
        console.error("Error: ",err);
        return res.status(500).json({message:"Internal server error"});
    }
}

export default withAuth(handler);