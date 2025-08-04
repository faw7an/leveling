import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_APIKEY);
export const sendEmailForgotPassword = async (email:string, name:string , resetToken:string , resetTokenExpiry:Date)=>{
    const url = `http://localhost:3000/forgotPassword/${resetToken}`;
    
    await resend.emails.send({
        from:'onboarding@resend.dev',
        to:email,
        subject:'Password reset',
        html:`
        <p>Hello ${name}</p>
        <p>Please reset your password by clicking on the link below</p>
        <a href="${url}">${url}</a>
        <p>Token Expires at ${resetTokenExpiry}</p>

        `
    })

};