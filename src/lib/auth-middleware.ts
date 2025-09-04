import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

declare module "next" {
  interface NextApiRequest {
    user?: {
      userId: string;
      username: string;
      email: string;
    };
  }
}

export function withAuth(handler: Function) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({message:'No token provided'});
    }

    try {
        const secretKey = process.env.SECRET_KEY;
        if (!secretKey){
            return res.status(500).json({message:'Server configuration error'});
        }

        const decoded = jwt.verify(token,secretKey) as any;
        req.user = decoded;
        return handler(req,res);
        
    } catch (error) {
        console.error("Token verification error:",error);
        return res.status(401).json({message:'Invalid or expired token'})
    }
  };
}
