import { withAuth } from "@/lib/auth-middleware";
import { NextApiRequest,NextApiResponse } from "next/types";
import { serialize } from "cookie";

async function handler(req: NextApiRequest, res:NextApiResponse){
    if(req.method !== 'POST'){
        res.status(405).json({message:"Method not allowed"});
    }
    try {
        const serializedCookie = serialize("token", "" , {
            httpOnly:true,
            secure: process.env.NODE_ENV === "production",
            sameSite:"strict",
            maxAge:0,
            path:'/'
        });
        res.setHeader("Set-Cookie", serializedCookie);
        return res.status(200).json({message:"Logged out successfully"});
    } catch (error) {
        console.error("Error loggin out: " , error);
        return res.status(500).json({message:"Internal server error"})
    }
}

export default withAuth(handler);